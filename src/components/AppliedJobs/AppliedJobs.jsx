import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../localStorage";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import FeaturedJob from "../FeaturedJobs/FeaturedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [getid,setGetId]= useState([]);
    useEffect(() => {

      const getstorageDataId=  getDataFromLocalStorage();
      const storeId =getstorageDataId.map(id => parseInt(id));
      const remainingIds= jobs.filter(job => storeId.includes(job.id));
      setGetId(remainingIds)

    },[jobs]);
    

    return (
        <div >
            <div className=" mb-36  relative  h-[300px]">
                <img className=" absolute bottom-0 left-0" src="images/bg1.png" alt="" />
                <h2 className=" absolute right-[45%] left-[40%] top-[50%] font-extrabold lg:text-3xl text-2xl">Applied Jobs</h2>
                <img className="absolute right-0 -top-16" src="images/bg2.png" alt="" />
            </div>

            <div className="w-10/12 m-auto grid gap-10">
                {
                    getid.map((job)=> (
                        // <AppliedJob key={job.id} job={job}></AppliedJob>
                        <FeaturedJob key={job.id} job={job}></FeaturedJob>
                    ))

                }
            </div>

        </div>
    );
};

export default AppliedJobs;