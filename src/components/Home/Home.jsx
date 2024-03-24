import Banner from "./../Banner/Banner";
import JobCategoryList from "./../JobCategoryList/JobCategoryList";
import FeaturedJobs from "./../FeaturedJobs/FeaturedJobs";
const Home = () => {
  return (
    <div className="space-y-20">
      <Banner></Banner>
      <div className="w-10/12 m-auto space-y-20">
        <JobCategoryList></JobCategoryList>
        <FeaturedJobs></FeaturedJobs>
      </div>
    </div>
  );
};

export default Home;
