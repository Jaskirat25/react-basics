import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removePaste } from "../store/PasteSlice";
import {
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
function Pastes() {
 
  const paste = useSelector((state) => state.paste.pastes);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const p = paste.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
const shareurl=JSON.stringify(p);
  const handleview = (id) => {
    navigate(`/pastes/${id}`);
  };
  const handleEdit = (id) => {
    navigate(`/${id}`);
  };
  const handleRemove = (id) => {
    dispatch(removePaste(id));
  };
  return (
    <>
      <Navbar />
      <div className="bg-slate-800 h-screen flex flex-col items-center justify-start  ">
        <div key={"12"} className="  w-full flex justify-center mt-11">
          <input
            type="text"
            className=" h-10 mt-4 bg-gray-700  text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[80%] p-2.5 "
            placeholder="Search"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
        </div>

        <div
          key={"3456"}
          className=" flex flex-col bg-transparent h-screen w-[80%] mt-10 space-y-3"
        >
          {p.length > 0 ? (
            p.map((item) => (
              <div>
                <div className="flex border-2 rounded-lg">
                  <div
                    key={item._id}
                    className="rounded-lg text-white p-3 flex flex-col max-h-max w-full"
                  >
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <p className="mt-2 overflow-hidden text-ellipsis max-w-[300px] h-12">
                      {item.content}
                    </p>
                  </div>
                  <div key={"9786"} className="p-4 flex flex-row">
                    <button
                      onClick={() => handleview(item._id)}
                      className="border text-white  p-4 h-14"
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(item._id)}
                      className="border text-white  p-4 h-14"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="border text-white  p-4 h-14"
                    >
                      Delete
                    </button>
                    <WhatsappShareButton url={shareurl}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className=" h-20 rounded-md p-4 text-white">
              No results found
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Pastes;
