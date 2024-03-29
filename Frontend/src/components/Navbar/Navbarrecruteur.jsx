import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo Vert.svg";
import avatar from "../../assets/avatar.jpg";
import { Outlet } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const handleDropdownToggle = () => {
  const dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("hidden");
};

function Navbarrecruteur() {
  return (
    <header aria-label="Site Header" className="bg-white" id="Nav">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <div className="flex lg:w-0 lg:flex-1">
              <Link to={"/Recruteur"}>
                <span className="inline-block h-10 w-44  bg-white">
                  <img src={Logo} alt="logo" />
                </span>
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-16 text-lg">
                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition  hover:text-gray-500/75"
                    href="#About"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#Pricing"
                  >
                    Pricing
                  </a>
                </li>

                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#FAQ"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#1CD2B1] font-semibold transition hover:text-gray-500/75"
                    href="#Contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex ">
                <Link to={"Loginrecruteur"}>
                  <a className="rounded-md bg-[#1CD2B1] px-5 py-2.5 text-sm font-semibold text-white">
                    Login
                  </a>
                </Link>
              </div>
            </div>

            <div className="block md:hidden relative">
              <button
                id="dropdownButton"
                className="rounded bg-gray-100 p-2 text-blue-600 transition hover:text-gray-600/75 py-2 px-2"
                onClick={handleDropdownToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div
                id="dropdownMenu"
                className="hidden absolute right-0 mt-2 py-2 w-24 bg-white border rounded shadow-lg z-10"
              >
                <ul>
                  <li>
                    <Link
                      to={"Loginrecruteur"}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbarrecruteur;
