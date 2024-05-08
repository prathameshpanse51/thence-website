import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const changeField = e.target.name;
    const newValue = e.target.value;

    setFormData((currData) => {
      return {
        ...currData,
        [changeField]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    if (formData.email.includes("@gmail.com") === false) {
      document.getElementById("invalidSVG").style.display = "block";
      document.getElementById("invalid").innerHTML =
        "Enter a valid email address";
    } else {
      e.preventDefault();
      setFormData({ name: "", email: "" });
      document.getElementById("invalidSVG").style.display = "none";
      document.getElementById("invalid").innerHTML = "";
      window.location.href = "/success";
    }
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className="bg-[#FFFFFF] w-[98%] h-[111.17px] flex justify-center mx-auto my-2 text-black shadow-none p-[16.97px, 20.89px, 16.97px, 52.22px] rounded-[65.28px]"
        >
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                transform: "scale(0.8)",
              }}
            >
              <svg
                width="121"
                height="32"
                viewBox="0 0 121 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative md:left-[31px]"
              >
                <path
                  d="M36.2621 10.7612C37.6781 9.54073 39.224 8.57237 42.5571 8.23332V13.9571L40.4347 14.2961C37.3511 14.8436 36.4284 15.3001 36.4284 18.0816V30.4385H30.0051V8.44376H36.2626V10.7612H36.2621ZM58.2149 22.1554C58.1663 23.3377 58.1242 24.4281 56.7512 25.2663C55.7914 25.8163 54.9143 25.8163 54.5417 25.8163C53.2478 25.8163 52.3712 25.2262 51.996 24.7229C51.4971 24.0448 51.4971 23.0815 51.4971 22.1177V8.49053H45.0373V22.2774C45.0373 25.8555 45.2452 27.1573 46.3672 28.7595C47.8695 30.8615 50.4958 31.0714 51.9133 31.0714C53.335 31.0714 54.7475 30.7278 56.0419 30.0654C57.2075 29.4752 57.5832 29.0538 58.2144 28.3386V30.439H64.6356V8.49053H58.2144V22.1554H58.2149ZM14.113 25.0569C16.574 25.0106 19.7839 24.9293 19.7839 21.5271C19.7839 17.9474 16.8625 17.9073 15.3633 17.8651H8.9882V25.0569H14.113ZM25.6251 17.6989C26.667 18.8309 27.2526 20.4657 27.2526 22.1569C27.2526 24.4687 26.0429 27.7032 22.3721 29.3431C20.1621 30.313 17.7817 30.438 14.404 30.438H1.98037V12.4443L14.5303 12.4783C16.1978 12.4392 18.9093 12.3579 18.9093 9.28555C18.9093 6.4252 16.4498 6.30066 15.0307 6.30066L5.47871 6.27473L0 0.750244H13.3652C16.4498 0.750244 19.2454 0.875802 21.0402 1.46648C24.6648 2.64071 26.1255 5.5463 26.1255 8.36345C26.1255 9.95654 25.7067 10.929 25.5835 11.2162C24.2491 14.2463 21.4104 14.8355 19.8305 15.1709C21.6233 15.4658 23.9966 15.8486 25.6251 17.6989ZM75.0333 8.52967H68.5736V30.4395H74.9948V18.5859C74.9948 15.8485 74.9948 13.1148 78.374 13.1148C79.6238 13.1148 80.7483 13.6251 81.2492 14.7948C81.4971 15.387 81.5407 16.0986 81.5407 18.0832V30.4401H87.9194V15.4282C87.9194 12.0229 87.3379 10.0445 85.0437 8.82297C83.9156 8.19671 82.4554 7.94814 81.1646 7.94814C79.6238 7.94814 78.2026 8.32075 77.2043 8.74266C76.0808 9.28606 75.659 9.79184 75.0333 10.4679V8.52967ZM96.8097 16.7463C97.0161 15.8216 97.227 14.809 98.1067 13.8422C98.7277 13.1702 99.8143 12.4133 101.355 12.4133C102.485 12.4133 103.694 12.8337 104.489 13.6378C105.401 14.6006 105.566 15.8216 105.691 16.7463H96.8097ZM106.494 23.0531C106.154 24.2131 104.957 26.2459 101.454 26.2459C97.9921 26.2459 96.7291 23.5156 96.7697 20.7808H112.326C112.237 18.3002 112.075 14.0104 109.232 10.9402C106.447 7.91053 102.689 7.79259 101.393 7.79259C92.809 7.79259 90.2222 14.6001 90.2222 19.8974C90.2222 27.0897 94.764 31.2493 101.227 31.2493C104.735 31.2493 107.563 29.9038 109.446 28.1445C110.569 27.0897 111.781 25.3258 112.036 23.0525H106.494V23.0531ZM121 0.754312H114.577V30.439H121V0.754312Z"
                  fill="#333333"
                />
              </svg>
            </Typography>
            <Box>
              <button
                onClick={() =>
                  setTimeout(() => {
                    window.location.href = "/";
                  }, 200)
                }
                className="manrope500 w-[44px] h-[44px] md:w-[64px] md:h-[64px] border-[1.31px] border-[#CACACA] rounded-[107.06px] text-[#1C1C1C] hover:bg-[#F1F1F1] hover:transition-all hover:duration-800"
              >
                <CloseRoundedIcon fontSize="large" />
              </button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <main className="flex flex-col items-center gap-[30px] md:gap-[52px] mb-20">
        <div className="flex flex-col gap-[14px] md:gap-[16px] items-center">
          <h2 className="covered-by-your-grace-regular text-2xl md:text-4xl text-[#2DA950] tracking-tighter">
            Registration Form
          </h2>
          <h1 className="manrope600 text-center text-3xl md:text-6xl text-[#1C1C1C] md:leading-[67px]">
            Start your success <br />
            Journey here!
          </h1>
        </div>
        <div className="flex flex-col gap-[20px] scale-[0.7] md:scale-100">
          <fieldset className="flex flex-col gap-[24px]">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-[417px] rounded-[64px] px-[36px] py-[24px] bg-[#EFEFEF] text-xl placeholder:text-[#827A7A] placeholder:manrope500 placeholder:text-xl focus:manrope500 focus:text-xl focus:text-black focus:border-[1px] focus:outline-[#537FF1] focus:bg-[#F5F8FF]"
              style={{ border: "1px solid #00000005" }}
              autoComplete="off"
            />
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-[417px] rounded-[64px] px-[36px] py-[24px] bg-[#EFEFEF] text-xl placeholder:text-[#827A7A] placeholder:manrope500 placeholder:text-xl focus:manrope500 focus:text-xl focus:text-black focus:border-[1px] focus:outline-[#537FF1] focus:bg-[#F5F8FF]"
              style={{ border: "1px solid #00000005" }}
              autoComplete="off"
            />
            <div className="flex items-center gap-2 relative bottom-[10px]">
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="invalidSVG"
              >
                <rect
                  x="8.89941"
                  y="6.00024"
                  width="3.2"
                  height="8"
                  fill="white"
                />
                <path
                  d="M10.5016 16.6666C6.81973 16.6666 3.83496 13.6818 3.83496 9.99992C3.83496 6.31802 6.81973 3.33325 10.5016 3.33325C14.1835 3.33325 17.1683 6.31802 17.1683 9.99992C17.1683 13.6818 14.1835 16.6666 10.5016 16.6666ZM9.83496 11.9999V13.3332H11.1683V11.9999H9.83496ZM9.83496 6.66658V10.6666H11.1683V6.66658H9.83496Z"
                  fill="#FF0808"
                />
              </svg>
              <p
                className="manrope500 text-base text-[#FF0808]"
                id="invalid"
              ></p>
            </div>
          </fieldset>
          {formData.name !== "" && formData.email !== "" ? (
            <button
              onClick={handleSubmit}
              className="w-[417px] rounded-[108px] px-[50px] py-[26px] manrope600 text-lg text-white"
              style={{
                background:
                  "linear-gradient(97.55deg, #1C1C1C 2.63%, #454444 105.2%),linear-gradient(0deg, #1C1C1C, #1C1C1C)",
              }}
            >
              Submit
            </button>
          ) : (
            <button
              disabled
              onClick={handleSubmit}
              className="w-[417px] rounded-[108px] px-[50px] py-[26px] bg-[#C9C9C9] manrope600 text-lg text-white"
            >
              Submit
            </button>
          )}
        </div>
      </main>
    </>
  );
}
