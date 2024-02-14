import React from "react";
import { BiSolidSend } from "react-icons/bi";

const MessageInput = () => {
  return (
    <form className="px-4 my-1">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-xs rounded-lg block w-full   p-2.5 bg-gray-600 text-white maxlength-5 row-span-1"
          placeholder="Send a message"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pr-1 m-1 pl-1 rounded-lg bg-[#fefefe25]"
        >
          Send <BiSolidSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

{
  /* <div className="flex flex-row">
      <input
        type="text"
        placeholder="You can't touch this"
        className="input input-bordered w-full max-w-xs "
      />
      <button className="btn btn-sm ml-3 mt-2">Send</button>
    </div> */
}
