import React, { useContext } from "react";
import { IoMdMailOpen, IoIosCall } from "react-icons/io";
import AuthContext from "./AuthContext";
const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogut = () => {
    localStorage.removeItem("token");
    logout();
  };
  return (
    <nav className="w-[100vw] px-[20px] bg-white fixed z-50 shadow-lg  top-0 ">
      <div className="flex justify-between sm:flex-row sm:items-center  py-3 border-b-2 border-gray-400 px-10">
        <ul className="flex gap-3 text-md text-gray-500 ">
          <li
            className="uppercase py-2 px-6 bg-blue-400 text-white font-semibold rounded"
            onClick={handleLogut}
          >
            Logout
          </li>
        </ul>
        <ul className="flex gap-4 text-md text-gray-600">
          <li className="flex items-center gap-2">
            {" "}
            <IoMdMailOpen />
            shraddha@gmail.com
          </li>
          <li className="flex items-center gap-2">
            {" "}
            <IoIosCall />
            1-800-1234-567
          </li>
        </ul>
      </div>

      {/* next part of navabar */}
      <div className="flex justify-between items-center my-6 px-10 brightness-50">
        <span className="text-2xl font-bold">
          FLOWER <span className="text-sm text-yellow-500">Gallery</span>
        </span>

        <ul className="flex gap-8 items-center text-[18px] uppercase font-semibold">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Gallery</li>
          <li className="cursor-pointer">Flower Types</li>
          <li className="cursor-pointer">Submit Flower</li>
          <li className="cursor-pointer">Care Tips</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
