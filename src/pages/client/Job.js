import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { Accordion } from "flowbite-react";

export default function Company() {
  const { state } = useContext(GlobalContext);
  const { data, setData, setFetchStatus } = state;

  // Seacrh
  const [seacrh, setSeacrh] = useState("");
  const handleChangeSeacrh = (event) => setSeacrh(event.target.value);
  const handleSeacrh = (event) => {
    event.preventDefault();
    // console.log(seacrh)
    let fetchData = async () => {
      setData(null);
      let result = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );
      let data = result.data.data;

      setData(data);
      let searchData = data.filter((res) => {
        return res.title.toLowerCase().includes(seacrh.toLowerCase());
      });

      setData([...searchData]);
    };
    fetchData();
    setSeacrh("");
  };

  // Filter name
  const [filter, setFilter] = useState({
    title: "",
    company_name: "",
    company_city: "",
  });

  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleFilter = (event) => {
    event.preventDefault();
    let fetchData = async () => {
      let result = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );
      let data = result.data.data;
      let filterData = data.filter((res) => {
        return (
          res.title.toLowerCase().includes(filter.title.toLowerCase()) &&
          res.company_name
            .toLowerCase()
            .includes(filter.company_name.toLowerCase()) &&
          res.company_city
            .toLowerCase()
            .includes(filter.company_city.toLowerCase())
        );
      });
      if (filterData.length === 0) {
        setData([]);
        console.log("Sorry, no data");
      } else {
        setData(filterData);
      }
    };
    fetchData();
  };

  return (
    <>
      <>
        <section className="bg-white dark:bg-gray-900 mt-20">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Open Vacancy Job
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Explore the job that suits to you
              </p>
              <div className="flex">
                <form onSubmit={handleSeacrh} className="w-full">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">
                    Search
                  </label>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      value={seacrh}
                      onChange={handleChangeSeacrh}
                      id="default-search"
                      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Job here..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Search
                    </button>
                  </div>
                </form>
                <button
                  className="bg-red-600 rounded-lg text-white w-36 ml-5"
                  onClick={() => setFetchStatus(true)}>
                  Reset Data
                </button>
              </div>
              <div className="w-full justify-self-center mt-5 border-2">
                <Accordion alwaysOpen={true}>
                  <Accordion.Panel>
                    <Accordion.Title>
                      <h2 className="text-black font-semibold">Filter Data</h2>
                    </Accordion.Title>
                    <Accordion.Content>
                      <form onSubmit={handleFilter}>
                        <div>
                          <div className="mb-3">
                            <label
                              htmlFor="small-input"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Title
                            </label>
                            <input
                              onChange={handleChangeFilter}
                              placeholder="insert job title"
                              value={filter.title}
                              name="title"
                              type="text"
                              id="small-input"
                              className="block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 "
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="small-input"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Company Name
                            </label>
                            <input
                              onChange={handleChangeFilter}
                              placeholder="insert company name"
                              value={filter.company_name}
                              name="company_name"
                              type="text"
                              id="small-input"
                              className="block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                            />
                          </div>
                          <div className="mb-3">
                            <label
                              htmlFor="small-input"
                              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Company City
                            </label>
                            <input
                              onChange={handleChangeFilter}
                              placeholder="insert company city"
                              value={filter.company_city}
                              name="company_city"
                              type="text"
                              id="small-input"
                              className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="w-20 p-3 text-white bg-blue-600 rounded-lg">
                          Filter
                        </button>
                      </form>
                    </Accordion.Content>
                  </Accordion.Panel>
                </Accordion>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 mb-20">
              {data !== null && data.length > 0 ? (
                data.map((res, index) => (
                  <Link key={index} to={`${res.id}`}>
                    <a
                      href="#"
                      className="flex items-center w-96 mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow-md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                      key={res.id}>
                      <img
                        className="object-contain w-32 h-32 rounded-t-lg md:h-32 md:w-32 md:rounded-none md:rounded-l-lg"
                        src={res.company_image_url}
                        alt=""
                      />
                      <div className="flex flex-col p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {res.title}
                        </h5>
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 mb-2 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 26">
                            {/* Replace this with your SVG path data */}
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                            />
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z"
                            />
                          </svg>
                          <p className="pl-1 -mt-3.5">{res.company_city}</p>
                        </div>
                        <div className="flex items-center">
                          <svg
                            className="w-6 h-6 text-gray-800 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="none"
                            viewBox="0 0 18 18">
                            {/* Replace this with your SVG path data */}
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 1h12M3 1v16M3 1H2m13 0v16m0-16h1m-1 16H3m12 0h2M3 17H1M6 4h1v1H6V4Zm5 0h1v1h-1V4ZM6 8h1v1H6V8Zm5 0h1v1h-1V8Zm-3 4h2a1 1 0 0 1 1 1v4H7v-4a1 1 0 0 1 1-1Z"
                            />
                          </svg>
                          <p className="pl-2">{res.company_name}</p>
                        </div>

                        <div className="pb-2 mt-4">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {res.job_type}
                          </span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {res.job_tenure}
                          </span>
                        </div>
                        <div className="flex items-center justify-left">
                          {/* Updated container */}
                          <div key={res.id}>
                            <button
                              type="button"
                              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Detail
                              <svg
                                className="w-3.5 h-3.5 ml-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10">
                                {/* Replace this with your SVG path data */}
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))
              ) : (
                // Display "No jobs found" message when no matching data
                <p className="text-center">No jobs found</p>
              )}
            </div>
          </div>
        </section>
      </>
    </>
  );
}
