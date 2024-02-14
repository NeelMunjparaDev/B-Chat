import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex flex-row items-center">
            {/* <span className="label-text">To:</span>{" "} */}
            <div className="w-10 rounded ">
              <img
                className="rounded-2xl"
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1707842085~exp=1707842685~hmac=1b0c003d84e7ff365354ffe641f23835fb1c9505e268df84c7b05c453dbad232"
                alt="user image"
              />
            </div>
            <span className="text-gray-900 font-bold ml-2">Neel M</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-3">
        <p>🙋‍♂️Welcome Neel</p>
        <img
          className="h-12 rounded-xl"
          src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1707842085~exp=1707842685~hmac=1b0c003d84e7ff365354ffe641f23835fb1c9505e268df84c7b05c453dbad232"
          alt=""
        />
      </div>
    </div>
  );
};
