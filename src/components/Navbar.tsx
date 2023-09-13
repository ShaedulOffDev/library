import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full cont bg-[#1D1F21] text-white text-[2rem] py-4 navbar uppercase text-center tracking-widest font-semibold">
      <h2>
        <Link to='/'><i className="fa fa-book-open"></i>Library</Link>
      </h2>
    </div>
  );
};

export default Navbar;
