import React from "react";

export default function Button({ onButtonClick }) {
  return (
    <div className="bg-gradient-to-t from-blue-800/50 via-purple-600/50 to-pink-600/50 w-10 h-10 flex items-center justify-center rounded-lg lg:hidden hover:transition-color duration-150 active:scale-95 hover:scale-105">
      <button className="bg-black rounded-lg " onClick={onButtonClick}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="4" y="8" width="24" height="3" rx="1.5" fill="#fff" />
          <rect x="8" y="15" width="16" height="3" rx="1.5" fill="#fff" />
          <rect x="4" y="22" width="24" height="3" rx="1.5" fill="#fff" />
        </svg>
      </button>
    </div>
  );
}
