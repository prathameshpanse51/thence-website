import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <>
      <footer className="w-[98%] h-[100%] flex justify-between p-[60px] mx-auto my-8 bg-[#F5F5F5] rounded-[40px]">
        <div className="flex flex-row items-center gap-2">
          <CopyrightIcon />{" "}
          <p className="manrope500 text-[#1C1C1C] text-lg">
            Talup 2023. All rights reserved
          </p>
        </div>

        <div className="manrope400 underline text-lg text-[#1C1C1C] flex flex-row items-center gap-12">
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
      </footer>
    </>
  );
}
