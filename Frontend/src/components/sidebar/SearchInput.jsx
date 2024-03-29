import React, { useState } from "react";
import { MdOutlinePersonSearch } from "react-icons/md";
import UseGetConversation from "../../hooks/UseGetConversation";
import useConversation from "../../store_zustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = UseGetConversation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3  relative">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full  bg-[#51515368] font-medium pl-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <MdOutlinePersonSearch className="w-6 h-6 outline-none absolute left-0 top-0 bottom-0 my-auto ml-[203px]" />
      </button>
    </form>
  );
};

export default SearchInput;
