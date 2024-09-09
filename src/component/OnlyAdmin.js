import React from "react";
import { Link } from "react-router-dom";

export default function OnlyAdmin() {
  return (
    <>
      <section class="bg-white mt-20">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-32 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-indigo-700">
              Oops
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
              Only Admin can access Dashboard
            </p>
            <p class="mb-4 text-xl font-light text-gray-500">
              Please Login First.
            </p>
            <div className="rounded-md pt-4">
              <Link
                to="/login"
                className="inline-flex items-center text-white bg-indigo-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Go to Login
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
        </div>
      </section>
    </>
  );
}
