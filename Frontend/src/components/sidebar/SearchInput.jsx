import React from "react";
import { MdOutlinePersonSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-3 m-5">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full  bg-[#51515368] font-medium "
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <MdOutlinePersonSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
