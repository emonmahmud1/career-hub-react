import { useEffect, useState } from "react";
import JobList from './JobList';

const JobCategoryList = () => {
    const [jobCategory, setJobCategory] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then((data)=> setJobCategory(data))
    },[]);
  return (
    <div className="w-10/12 m-auto">
      <div className="text-center mb-8">
        <h1 className="font-extrabold text-4xl mb-4">Job Category List</h1>
        <p className="font-medium text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
    <div className="grid grid-cols-4 gap-6">

    {
        jobCategory.map((job)=> (
            <JobList key={job.id} job={job}></JobList>

        ))

     }
    </div>
      


    </div>
  );
};

export default JobCategoryList;
