import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { addPaste } from "../store/PasteSlice";

function Home() {
  const [value, setvalue] = useState("");
  const [content, setcontent] = useState("");
  const dispatch = useDispatch();
  const CreatePost = () => {
    const ob = {
      title: value,
      content: content,
      _id: Date.now(),
    };
    const pastes = JSON.parse(localStorage.getItem("pastes")) || [];
    pastes.push(ob);
    localStorage.setItem("pastes", JSON.stringify(pastes));
    dispatch(addPaste(ob));
    setcontent("");
    setvalue("");
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
            placeholder="Title"
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            required
          />

          {/* Button */}
          <Button text="Create" onClick={CreatePost} />
        </div>

        <textarea
          name="content"
          id="content"
          className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[50%] h-40 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export default Home;
