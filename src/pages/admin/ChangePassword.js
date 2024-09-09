import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function ChangePassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  let navigate = useNavigate();

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const [fetchStatus, setFetchStatus] = useState(true);

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (event) => {
    let token = Cookies.get("token");
    console.log(token);
    event.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;

    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password",
        {
          current_password,
          new_password,
          new_confirm_password,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )

      .then((res) => {
        setFetchStatus(true);
        navigate("/dashboard/profile");
        Swal.fire({
          icon: "success",
          title: "Your password changed",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        alert(error);
      });
    console.log(fetchStatus);
  };

  return (
    <>
      <div className="flex flex-row">
        <aside className="w-48 h-screen" aria-label="Sidebar">
          <div className="overflow-y-auto py-4 px-3 bg-gray-800 h-screen">
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/dashboard/"}
                  className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/list-job-vacancy"}
                  className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">List Job Table</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/list-job-vacancy/form"}
                  className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Add new Job
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/profile"}
                  className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/dashboard/reset-password"}
                  className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span className="flex-1 ml-3 whitespace-nowrap">
                    Change Pass
                  </span>
                </Link>
              </li>
              {Cookies.get("token") && (
                <li>
                  <span
                    className="cursor-pointer flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
                    onClick={() => {
                      Cookies.remove("token");
                      navigate("/login");
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Logout
                    </span>
                  </span>
                </li>
              )}
            </ul>
          </div>
        </aside>

        <section className="bg-gray-50 w-full mx-auto ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8 border-2 border-black">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Change Password
              </h2>
              <form
                className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="current_password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Current Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="current_password"
                    id="current_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="••••••••"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="new_password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    New Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="new_password"
                    id="new_password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleInput}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="new_confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="new_confirm_password"
                    id="new_confirm_password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleInput}
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
                      id="newsletter"
                      aria-describedby="newsletter"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="newsletter"
                      className="font-light text-gray-500"
                    >
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
                  type="submit"
                  className="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Reset passwod
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
