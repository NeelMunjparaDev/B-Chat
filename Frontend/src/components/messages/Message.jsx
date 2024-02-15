import React from "react";
import useConversation from "../../store_zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTIme";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;

  const formatedTime = extractTime(message.createdAt);

  const chatClassName = fromMe ? "chat-end" : "chat-start";

  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className={`chat-bubble text-black bg-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div
        className={`chat-footer opacity-50 text-xs font-black mt-1 flex gap-1 items-center`}
      >
        {formatedTime}
      </div>
    </div>
  );
};

export default Message;

//dicarded feature

{
  /* <div className="chat-image avatar">
        <div className="w-10 rounded">
          <img
            className="rounded-2xl"
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1707842085~exp=1707842685~hmac=1b0c003d84e7ff365354ffe641f23835fb1c9505e268df84c7b05c453dbad232"
            alt="user image"
          />
        </div>
      </div> */
}
