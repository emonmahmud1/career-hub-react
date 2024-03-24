
const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-[#9873ff0d]">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <div className="lg:w-6/12 w-full">
          <img src="https://i.ibb.co/KxJ2Cm1/13850246-5385937.jpg" className=" rounded-lg shadow-2xl" />
          </div>
          <div className=" lg:w-2/5 w-full">
            <h1 className="text-6xl font-extrabold">One Step Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span></h1>
            <p className="py-6 text-[#757575] font-medium text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn bg-[#7E90FE] text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;