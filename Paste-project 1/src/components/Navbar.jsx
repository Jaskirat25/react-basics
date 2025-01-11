import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-2">
      <div className="container mx-auto flex justify-center items-center ">
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/" className="hover:underline text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Pastes" className="hover:underline text-xl">
              Pastes
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
