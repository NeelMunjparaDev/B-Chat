import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import LogoutButton from "../../components/sidebar/LogoutButton";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { authUser } = useAuthContext();
  return (
    <div>
      <div className="navbar mb-3 w-[779px] rounded-lg bg-[#505156c2]">
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src={authUser.profilePic} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{authUser.fullName}</a>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>

      {/* //containers */}

      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#505156a7] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 mb-12">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
