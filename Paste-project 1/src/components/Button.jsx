import React from "react";

function Button({ text, onclick,...p}) {
  return (
    <button
      type="button"
      className="  w-20 h-auto mt-8 ml-9 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      onClick={onclick}
      {...p}
    >
      {text}
    </button>
  );
}

export default Button;
