import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <>
      <footer className="w-[95%] md:w-[98%] h-[100%] flex flex-col md:flex-row gap-10 md:gap-0 justify-between p-[30px] md:p-[60px] mx-auto my-8 bg-[#F5F5F5] rounded-[40px]">
        <div className="flex flex-row items-center gap-2">
          <CopyrightIcon />{" "}
          <p className="manrope500 text-[#1C1C1C] text-base md:text-lg">
            Talup 2023. All rights reserved
          </p>
        </div>

        <div className="manrope400 underline text-base md:ext-lg text-[#1C1C1C] flex flex-row items-center gap-4 md:gap-12">
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Privacy Policy</p>
        </div>
      </footer>
    </>
  );
}
