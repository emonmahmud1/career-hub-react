import Header from "./../Header/Header";

import Footer from "./../Footer/Footer";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div>
      <div className="w-10/12 m-auto ">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
