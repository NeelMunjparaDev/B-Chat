import React from "react";
import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="mt-auto">
      <button className="btn btn-s bg-[#4ade80]">
        Logout <BiLogOut className="w-6 h-6" />{" "}
      </button>
    </div>
  );
};

export default LogoutButton;
