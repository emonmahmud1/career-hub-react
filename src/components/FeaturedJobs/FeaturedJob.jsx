import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    const {id,logo,job_title,company_name,remote_or_onsite,job_type, location,salary }=job;
   
   
   
    return (
        <div className='p-10 border rounded-xl'>
            <div className='mb-8'>

            <img className='h-10 w-24' src={logo} alt="" />
            </div>
            <h2 className='text-[#474747] font-extrabold text-2xl'>{job_title}</h2>
            <p className='text-[#757575] font-semibold text-xl'> {company_name}</p>
            <div className='flex gap-4 my-5'>
                <button className='btn-outline border-[#7E90FE] border px-5 py-2 rounded-lg text-[#9873FF] text-base font-bold'>{remote_or_onsite}</button>
                <button className='btn-outline border-[#7E90FE] border px-5 py-2 rounded-lg text-[#9873FF] text-base font-bold'>{job_type}</button>
            </div>
            <div className='text-[#757575] font-semibold text-xl flex gap-7'>
                <p className='flex items-center gap-1'><IoLocationOutline/>{location}</p>
                <p className='flex items-center gap-1'><AiOutlineDollar/>{salary}</p>
            </div>
            <div className='mt-6'>
                <Link to={`/jobdetails/${id}`}>
                <button className=' btn bg-[#7E90FE] text-white font-bold text-xl'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

FeaturedJob.propTypes = {
    job: PropTypes.object
}

export default FeaturedJob;