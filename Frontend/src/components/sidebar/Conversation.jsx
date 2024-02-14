import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center bg-[#51515368] hover:bg-[#515153d0] rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 mask mask-squircle">
            <img
              src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1707842085~exp=1707842685~hmac=1b0c003d84e7ff365354ffe641f23835fb1c9505e268df84c7b05c453dbad232"
              alt="user image"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-bold text-gray-200 ml-2">Neel</p>
          </div>
        </div>
      </div>

      <div className="divider my-0 py-0 h-1" />
    </>
  );
};

export default Conversation;
