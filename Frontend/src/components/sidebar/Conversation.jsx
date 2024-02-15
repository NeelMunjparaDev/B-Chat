import React from "react";
import useConversation from "../../store_zustand/useConversation";

const Conversation = ({ conversation, lastId }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  return (
    <>
      <div
        className={`flex gap-2 items-center bg-[#51515368] hover:bg-[#515153d0] rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-[#515153d0]" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-12 mask mask-squircle">
            <img src={conversation.profilePic} alt="user image" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-bold text-gray-200 ml-2">
              {conversation.fullName}
            </p>
          </div>
        </div>
      </div>

      {!lastId && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
