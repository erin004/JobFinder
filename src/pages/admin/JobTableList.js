import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import AsideDashboard from "./AsideDashboard";

export default function JobTableList() {
  function add3Dots(string, limit) {
    var dots = "...";
    if (string.length > limit) {
      string = string.substring(0, limit) + dots;
    }
    return string;
  }

  const { state, handleFunction } = useContext(GlobalContext);
  const { data } = state;
  const { handleDelete, handleEdit } = handleFunction;

  return (
    <>
      <div className="flex flex-row">
        <AsideDashboard />

        <div className="overflow-x-auto relative w-full h-full">
          <table className="w-full h-full text-sm text-center text-gray-500 dark:text-gray-400 mb-10">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-2 px-2">
                  No
                </th>
                <th scope="col" className="py-2 px-3">
                  Title
                </th>
                <th scope="col" className="py-2 px-2">
                  Description
                </th>
                <th scope="col" className="py-2 px-2">
                  Qualification
                </th>
                <th scope="col" className="py-2 px-2">
                  Type
                </th>
                <th scope="col" className="py-2 px-2">
                  Tenure
                </th>
                <th scope="col" className="py-2 px-2">
                  Status
                </th>
                <th scope="col" className="py-2 px-2">
                  Company
                </th>
                <th scope="col" className="py-2 px-2">
                  Logo
                </th>
                <th scope="col" className="py-2 px-2">
                  City
                </th>
                <th scope="col" className="py-2 px-2">
                  Salary
                </th>
                <th scope="col" className="py-2 px-2">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {data !== null &&
                data.map((res, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-gray-100 bg-white text-black border-b">
                      <td className="py-2 px-2 whitespace-nowrap text-sm font-medium">
                        {index + 1}
                      </td>
                      <th scope="row" class="py-2 px-2 whitespace-nowrap">
                        {res.title}
                      </th>
                      <td class="py-2 px-2">
                        {add3Dots(res.job_description, 15)}
                      </td>
                      <td class="py-2 px-2">
                        {add3Dots(res.job_qualification, 15)}
                      </td>
                      <td class="py-2 px-2">{res.job_type}</td>
                      <td class="py-2 px-2">{res.job_tenure}</td>
                      <td class="py-2 px-2">{res.job_status}</td>
                      <td class="py-2 px-2">{res.company_name}</td>
                      <td class="py-2 px-2">
                        <img
                          className="py-2 px-2"
                          style={{
                            resizeMode: "contain",
                            height: 50,
                            width: 50,
                          }}
                          src={res.company_image_url}
                          alt="company"
                        />
                      </td>
                      <td class="py-2 px-2">{res.company_city}</td>
                      <td class="py-2 px-2">
                        {res.salary_min} {"-"} {res.salary_max}
                      </td>

                      <td className="py-2 px-2">
                        <td>
                          <button
                            className="bg-gray-200 hover:bg-slate-300 text-black font-bold py-2 px-3 w-12 border border-black-700 rounded"
                            onClick={handleEdit}
                            value={res.id}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 w-16 ml-4 border border-red-700 rounded"
                            onClick={handleDelete}
                            value={res.id}
                            // onClick={deleteBUtton}
                          >
                            Delete
                          </button>
                        </td>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
