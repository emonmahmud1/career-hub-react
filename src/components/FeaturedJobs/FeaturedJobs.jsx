import { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState(4);
  const [showBtn, setShowBtn] = useState(true);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const allJobsBtn = ()=>{
    setAllJobs(jobs.length)
    setShowBtn(false);


  }

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="font-extrabold text-4xl mb-4">Featured Jobs</h1>
        <p className="font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.slice(0, allJobs).map((job) => (
          <FeaturedJob key={job.id} job={job}></FeaturedJob>
        ))}
      </div>
      {
        showBtn && (
            <div className="mt-6 text-center">
        <button onClick={allJobsBtn} className=" btn bg-[#7E90FE] text-white font-bold text-xl">
          See All Jobs
        </button>
      </div>

        )
      }
      
    </div>
  );
};

export default FeaturedJobs;
