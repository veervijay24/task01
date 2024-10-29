import React from "react";
import github from "../../assets/github.png";
import "./nav.css";

function Navbar() {
  return (
    <div className="navbar w-[100vw] h-[7vh] items-center flex justify-between border-b-[1px] px-[32px] py-0">
      <div className="navleft">
        <div className="hamburger">
          <div className="backg"></div>
          <svg
            stroke-width="0"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </div>
        {/* <img src={more} alt="" /> */}
        <h2 className="docit text-customBrown">Docit</h2>
      </div>
      <img src={github} alt="github" />
    </div>
  );
}

export default Navbar;
