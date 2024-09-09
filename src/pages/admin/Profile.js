import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import AsideDashboard from "./AsideDashboard";

export default function Profile() {
  const user = JSON.parse(Cookies.get("user"));
  console.log(user);

  return (
    <>
      <div className="flex flex-row">
        <AsideDashboard />

        <section className="bg-white">
          <div className="flex flex-row p-24">
            <img
              className="w-full rounded-full border-2 border-black mt-4"
              style={{
                resizeMode: "contain",
                height: 300,
                width: 300,
              }}
              src={user.image_url}
              alt="dashboard"
            />
            <div className="border-2 border-black mx-20 rounded-2xl p-5 bg-gray-200 w-96">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                {user.name}
              </h2>
              <p className="mb-4 font-light text-black md:text-lg font-semibold">
                Email : {user.email}
              </p>
              <p className="mb-4 font-light text-black md:text-lg">
                Account id : {user.id}
              </p>
              <p className="mb-4 font-light text-black md:text-lg">
                Created at : {user.created_at}
              </p>
              <p className="mb-4 font-light text-black md:text-lg">
                Update at : {user.updated_at}
              </p>

              <Link
                to="/dashboard/reset-password"
                className="inline-flex items-center text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Change Passwords
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
