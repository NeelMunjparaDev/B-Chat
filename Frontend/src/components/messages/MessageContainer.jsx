import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../store_zustand/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex flex-row items-center">
            {/* <span className="label-text">To:</span>{" "} */}
            <div className="w-10 rounded ">
              <img
                className="rounded-2xl"
                src={selectedConversation.profilePic}
                alt="user image"
              />
            </div>
            <span className="text-gray-900 font-bold ml-2">
              {selectedConversation.fullName}
            </span>
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
          className="h-[125px] rounded-xl"
          src="https://media.tenor.com/AvHPuvcRU4wAAAAi/cute-penguin.gif"
          alt=""
        />
      </div>
    </div>
  );
};
