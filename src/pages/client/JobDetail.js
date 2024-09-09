import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  let { idData } = useParams();
  const [data, setData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });

  useEffect(() => {
    if (idData !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
        .then((res) => {
          console.log(res.data);

          let data = res.data;

          setData({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
        })
        .catch((error) => {});
    }
  }, []);

  console.log(data);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return (
    <section className="bg-white mt-20">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full"
          style={{
            resizeMode: "contain",
            height: 400,
            width: 400,
          }}
          src={data.company_image_url}
          alt="dashboard image"
        />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            {data.title} ({data.job_type})
          </h2>
          <p className="mb-4 font-light text-black md:text-lg font-semibold">
            {data.company_name} - {data.job_tenure}
          </p>
          <p className="mb-4 font-light text-black md:text-lg">
            Status :<span> </span>
            <span>
              {data.job_status === 1 ? (
                <span style={{ color: "green", fontWeight: "700" }}>
                  Open Hiring
                </span>
              ) : (
                <span style={{ color: "red", fontWeight: "700" }}>
                  Closed Hiring
                </span>
              )}
            </span>
          </p>
          <p className="mb-4 font-light text-black md:text-lg">
            City : {data.company_city}
          </p>
          <p className="mb-4 font-light text-black md:text-lg">
            Description : {data.job_description}
          </p>
          <p className="mb-4 font-light text-black md:text-lg">
            Qualification : {data.job_qualification}
          </p>
          <p className="mb-4 font-light text-black md:text-lg">
            Salary : {formatRupiah(data.salary_min)} -{" "}
            {formatRupiah(data.salary_max)}
          </p>
          <Link
            to="/job-vacancy"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Apply Now
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
  );
};

export default Detail;
