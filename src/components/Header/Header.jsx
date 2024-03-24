import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar bg-base-100 p-0">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="  lg:hidden">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><NavLink to="/"  className={ ({ isActive }) => (isActive ? 'bg-[#7E90FE]' : ' ')}>Statistic</NavLink></li>
          <li> <NavLink to="/appliedjobs" className={({ isActive }) => (isActive ? 'bg-[#7E90FE]' : ' ')} >Applied Job</NavLink></li>
          <li> <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'bg-[#7E90FE]' : ' ')}>Blog</NavLink></li>
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-xl text-lg">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><NavLink to="/"  className={ ({ isActive }) => (isActive ? 'bg-[#7E90FE]' : ' ')}>Statistic</NavLink></li>
          <li> <NavLink to="/appliedjobs" className={({ isActive }) => (isActive ? 'bg-[#7E90FE]' : ' ')} >Applied Job</NavLink></li>
          <li> <NavLink to="/blogs" className={({ isActive }) => (isActive ? 'bg-[#7E90FE]' : ' ')}>Blog</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn  bg-[#7E90FE] text-white">Start Applying</a>
      </div>
    </div>
  );
};

export default Header;
