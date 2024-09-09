import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
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
        `https://bootcamp-rent-cars.herokuapp.com/customer/car`
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
    name: "",
    category: "",
    price: "",
    status: "",
  });

  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleFilter = (event) => {
    event.preventDefault();
    let fetchData = async () => {
      let result = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/car`
      );
      let data = result.data;
      console.log(data);
      let filterData = data.filter((res) => {
        return res.name.toLowerCase().includes(filter.name.toLowerCase());
        // res.category.toLowerCase().includes(filter.category.toLowerCase())
        // res.price.toLowerCase().includes(filter.price.toLowerCase()) &&
        // res.status.toLowerCase().includes(filter.status.toLowerCase())
      });
      console.log(filterData);
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
      <section className="bg-white dark:bg-gray-900">
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
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
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
                      xmlns="http://www.w3.org/2000/svg"
                    >
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
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
              <button
                className="bg-red-600 rounded-lg text-white w-36 ml-5"
                onClick={() => setFetchStatus(true)}
              >
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
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Car Name
                          </label>
                          <input
                            onChange={handleChangeFilter}
                            placeholder="insert car name"
                            value={filter.name}
                            name="name"
                            type="text"
                            id="small-input"
                            className="block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 "
                          />
                        </div>
                        {/* <div className="mb-3">
                          <label
                            htmlFor="small-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Car Category
                          </label>
                          <input
                            onChange={handleChangeFilter}
                            placeholder="insert Car Category"
                            value={filter.category}
                            name="category"
                            type="text"
                            id="small-input"
                            className="block w-full  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="small-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Car Price
                          </label>
                          <input
                            onChange={handleChangeFilter}
                            placeholder="insert Car Price"
                            value={filter.price}
                            name="price"
                            type="text"
                            id="small-input"
                            className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="small-input"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            Car Status
                          </label>
                          <input
                            onChange={handleChangeFilter}
                            placeholder="insert Car Status"
                            value={filter.status}
                            name="status"
                            type="text"
                            id="small-input"
                            className="block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500"
                          />
                        </div> */}
                      </div>
                      <button
                        type="submit"
                        className="w-20 p-3 text-white bg-blue-600 rounded-lg"
                      >
                        Filter
                      </button>
                    </form>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>

          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-3">
            {data !== null &&
              data.map((res, index) => {
                return (
                  <Link
                    key={index}
                    to={`${res.id}`}
                    className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
                  >
                    <div>
                      <img
                        className="w-40 h-36 rounded-lg sm:rounded-none sm:rounded-l-lg"
                        src={res.image}
                        alt="Car Images"
                      />
                    </div>
                    <div className="px-5">
                      <h3 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        {res.name} ({res.category})
                      </h3>
                      {/* <span className="text-gray-500 dark:text-gray-400">
                        {res.company_name}
                      </span> */}
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        {res.status === false
                          ? "Mobil tersedia"
                          : "Mobil tidak tersedia"}
                      </p>
                      <p className="font-light text-gray-500 dark:text-gray-400">
                        {res.price}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
