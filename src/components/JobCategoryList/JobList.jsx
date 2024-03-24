import PropTypes from 'prop-types';
const JobList = ({job}) => {
    const {logo,category_name,availability} = job;
    return (
        <div className="bg-[#9873ff0d] rounded-3xl p-10">
            <div className=" mb-8 h-20 w-20 bg-[#9873ff1a] rounded-2xl flex justify-center items-center">

            <img className="h-11 w-11" src={logo} alt="" />
            </div>
            <h2 className="text-xl font-extrabold text[#474747]">{category_name}</h2>
            <p className="text-[#A3A3A3] font-medium">{availability} </p>
            
        </div>
    );
}
JobList.propTypes={
    job: PropTypes.object,

};

export default JobList;