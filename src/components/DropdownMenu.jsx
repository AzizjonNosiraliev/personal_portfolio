'user client'
import React from "react";

export default function DropdownMenu() {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.1]">
        <img
          className="w-full h-full object-cover"
          src="/images/menu.jpg"
          width={688}
          height={953}
          alt=""
        />
      </div>
    </div>
  );
}
