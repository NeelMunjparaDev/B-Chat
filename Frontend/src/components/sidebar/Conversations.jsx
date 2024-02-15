import React from "react";
import UseGetConversation from "../../hooks/UseGetConversation";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = UseGetConversation();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;
