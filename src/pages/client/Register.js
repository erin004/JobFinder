import axios from "axios";
import React, { useState } from "react";
// import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  let navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    image_url: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    let { name, image_url, email, password } = input;
    console.log(input);

    axios
      .post("https://dev-example.sanbercloud.com/api/register", {
        name,
        image_url,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })

      .catch((error) => {
        // console.log(error)
        alert(error.message);
      });
  };

  return (
    <>
      <section className="bg-gray-50 mt-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg border-2 border-black shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create Account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleRegister}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    id="name"
                    type={"text"}
                    placeholder="Name"
                    value={input.name}
                    onChange={(e) => handleInput(e)}
                    name="name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="image_url"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Image URL
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    id="image_url"
                    placeholder="Image URL"
                    value={input.image_url}
                    onChange={(e) => handleInput(e)}
                    name="image_url"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="E-mail"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    E-mail
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    id="E-mail"
                    placeholder="E-mail"
                    value={input.email}
                    onChange={(e) => handleInput(e)}
                    name="email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={input.password}
                    onChange={(e) => handleInput(e)}
                    required
                  />
                </div>
                <button
                  onClick={togglePassword}
                  className="inline-flex items-center text-black bg-slate-200 hover:bg-slate-300 font-medium rounded-lg text-sm px-3 py-1 text-center"
                >
                  Show/Hide Password{"\u00A0"}
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-6 h-6"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fill-rule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-500">
                      I accept the{" "}
                      <Link
                        className="font-medium text-primary-600 hover:underline"
                        to="#"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type={"submit"}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
