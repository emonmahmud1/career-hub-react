import { useLoaderData, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.id == id);
 
  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    contact_information
  } = job;
  return (
    <div>
      <div className=" mb-36  relative h-[300px]">
        <img
          className=" absolute bottom-0 left-0"
          src="/images/bg1.png"
          alt=""
        />
        <h2 className=" absolute right-[45%] left-[40%] top-[50%] font-extrabold lg:text-3xl text-2xl">
          Jobs Details
        </h2>
        <img
          className="absolute right-0 -top-16"
          src="/images/bg2.png"
          alt=""
        />
      </div>

      <div className="grid grid-cols-5  w-10/12 m-auto gap-5">
        <div className="col-span-3 space-y-4">
        
          <p>
            <span className="text-lg font-bold ">Job description: </span>{" "}
            <span className="text-[#757575]">{job_description}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Job Responsibility: </span>{" "}
            <span className="text-[#757575]">{job_responsibility}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">
              Educational Requirements: <br />{" "}
            </span>{" "}
            <span className="text-[#757575]">{educational_requirements}</span>
          </p>
          <p>
            <span className="text-lg font-bold ">Job description: </span>
            <br /> <span className="text-[#757575]">{experiences}</span>
          </p>
        </div>

        <div className="col-span-2 ">
            <div className="border lg:p-8 bg-[#9873ff1a] rounded-2xl">
            <h2 className="text-xl font-extrabold ">Job Details</h2>
          <div className="border my-5"></div>
          <p>
            <span className="text-[#474747] font-bold text-xl">Salary: </span><span className="text-xl font-medium text-[#757575]">{salary} </span>
          </p>
          <p>
            <span className="text-[#474747] font-bold text-xl">Job Title: </span><span className="text-xl font-medium text-[#757575]">{job_title} </span>
          </p>
          <div className="border my-5"></div>
          <p>
            <span className="text-[#474747] font-bold text-xl">Phone: </span><span className="text-xl font-medium text-[#757575]">{contact_information.phone} </span>
          </p>
          <p>
            <span className="text-[#474747] font-bold text-xl">Email: </span><span className="text-xl font-medium text-[#757575]">{contact_information.email} </span>
          </p>
          <p>
            <span className="text-[#474747] font-bold text-xl">Address: </span><span className="text-xl font-medium text-[#757575]">{contact_information.address} </span>
          </p>

            </div>
            <div className="mt-4">
                <Link>
                <button className="btn bg-[#9873FF] text-white font-semibold w-full text-xl">Apply Now</button>
                </Link>
            </div>
       

        </div>
      </div>
    </div>
  );
};

export default JobDetails;
