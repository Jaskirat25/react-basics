import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
function View() {
  const paste = useSelector((state) => state.paste.pastes);
  const { id } = useParams();

  const post = paste.filter((item) => item._id == id);

  const copy = () => {
    navigator.clipboard.writeText(post[0].content);
    toast.success("copied to clipboard");
  };

  return (
    <>
      <Navbar />
      <div className="bg-slate-800 h-screen flex flex-col items-center justify-start  ">
        <div className=" w-full flex justify-center mt-20">
          <input
            autoComplete="off"
            type="text"
            id="first_name"
            className="h-10 mt-8 bg-gray-700  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[40%] p-2.5 "
            value={post[0].title}
          />
          <Button text="Copy" onclick={() => copy()} />
        </div>
        <textarea
          name="content"
          id="content"
          className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[70%] h-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Content"
          value={post[0].content}
        ></textarea>
      </div>
    </>
  );
}

export default View;
