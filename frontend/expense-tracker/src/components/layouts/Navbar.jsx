import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import SideMenu from "./SideMenu";
export default function Navbar({ activeMenu }) {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="flex gap-5 bg-white border border-gray-200/50 backdrop-blur-[12px] py-4 px-7 sticky top-0 z-30">
      <button className="" onClick={() => setOpenSideMenu(!openSideMenu)}>
        {" "}
        {openSideMenu ? (
          <HiOutlineX className="" />
        ) : (
          <HiOutlineMenu className="" />
        )}
      </button>
      <h2 className="">Expense Tracker</h2>
      {openSideMenu && (
        <div className="">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
}
