import React from "react";
import { BiLogOut } from "react-icons/bi";
import UseLogout from "../../hooks/UseLogout";

const LogoutButton = () => {
  const { loading, logout } = UseLogout();
  return (
    <div>
      {!loading ? (
        <button onClick={logout}>
          <BiLogOut className="w-6 h-6" />{" "}
        </button>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
