import React from "react";

export default function Content() {
  return (
    <>
      <section className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2dyYW1tZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-5xl tracking-tight font-semibold text-gray-900 ">
              Find your passion <br />
              and achieve success
            </h2>
            <p className="mb-4 text-black text-xl">
              Find a job that suits your interest and talents. A high salary is
              not the top priority. Most importantly, You can work according to
              your heart's desire and have a work-life balance.
            </p>
            {/* <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
}
