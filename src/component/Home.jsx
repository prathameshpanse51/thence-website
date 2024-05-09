import React, { useState } from "react";
import Navbar from "./Navbar";
import AskQuestions from "./AskQuestions";
import Footer from "./Footer";
import HomeImg from "../assets/homeImg.png";
import Sparkle from "../assets/sparkle.png";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import rectangle from "../assets/rectangle.png";
import rectangle2 from "../assets/rectangle2.png";
import rectangle3 from "../assets/rectangle3.png";
import rectangle4 from "../assets/rectangle4.png";
import { Slide } from "react-awesome-reveal";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-8 md:gap-16 w-full mt-6 md:mt-14">
        <Slide direction="down" duration={1500} triggerOnce className="z-[-1]">
          <div className="flex flex-col items-center">
            <p className="covered-by-your-grace-regular tracking-tighter text-3xl md:text-4xl text-[#2DA950]">
              Success stories
            </p>
            <h1 className="manrope600 tracking-tighter md:leading-[70px] text-3xl md:text-[56px] text-[#1C1C1C]">
              Every success journey <br />
              &nbsp;&nbsp;&nbsp;
              <span className="ml-2">we’ve encountered.</span>
            </h1>
          </div>
        </Slide>

        <div className="w-[100%] h-[100vh] flex flex-col items-center md:items-start md:flex-row md:justify-between mx-auto my-8">
          <Slide direction="left" duration={1400} triggerOnce>
            <div id="left-div">
              <img
                src="https://ik.imagekit.io/qz6ubt34n4/image.png?updatedAt=1715107900018"
                className="mx-auto md:ml-52 w-[200px] h-[220px] md:w-fit md:h-fit"
              />
              <div
                className=" bg-white w-[268px] p-[30px] rounded-[28px] relative z-999 bottom-[250px] left-[-70px] md:bottom-[430px] md:left-[50px] scale-[0.4] md:scale-100"
                style={{ boxShadow: "0px 22.59px 36.14px 0px #1E1E1E17" }}
              >
                <p className="manrope600 text-6xl text-[#1C1C1C]">
                  <img
                    src={Sparkle}
                    className="absolute bottom-[175px] left-[-15px] x-999"
                  />
                  40%
                </p>
                <p className="mannrope500 text-lg text-[#828282] mt-4">
                  Achieved reduction in project execution time by optimising
                  team availability
                </p>
              </div>
              <div
                className="w-[245px] flex flex-row items-center justify-center gap-4 bg-white py-4 pr-6 rounded-[112px] z-999 relative bottom-[330px] left-[-40px] md:bottom-[380px] md:left-[150px] scale-[0.4] md:scale-100"
                style={{ boxShadow: "0px 15.21px 35.49px 0px #00000017" }}
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-[#DDEFE0] rounded-full w-[52px] h-[52px] p-2"
                >
                  <path
                    d="M13.1587 23.9525C13.11 24.1462 11.8912 28.71 5.18749 28.71C4.92227 28.71 4.66792 28.6046 4.48038 28.4171C4.29284 28.2295 4.18749 27.9752 4.18749 27.71C4.18749 21.0062 8.75124 19.7875 8.94499 19.7387C9.20241 19.6744 9.47484 19.715 9.70235 19.8515C9.92985 19.9881 10.0938 20.2094 10.1581 20.4669C10.2224 20.7243 10.1818 20.9967 10.0453 21.2242C9.90875 21.4517 9.68741 21.6157 9.42999 21.68C9.31749 21.7112 6.62749 22.4975 6.23499 26.6625C10.4 26.27 11.1875 23.585 11.22 23.46C11.2863 23.2029 11.452 22.9827 11.6807 22.8477C11.9094 22.7128 12.1823 22.6743 12.4394 22.7406C12.6965 22.8069 12.9167 22.9726 13.0516 23.2013C13.1865 23.43 13.225 23.7029 13.1587 23.96V23.9525ZM24.7837 15.5275L24.1875 16.1237V23.415C24.189 23.6786 24.138 23.9399 24.0376 24.1837C23.9372 24.4275 23.7893 24.6489 23.6025 24.835L19.3125 29.1225C19.1275 29.3088 18.9074 29.4566 18.665 29.5575C18.4226 29.6583 18.1626 29.7101 17.9 29.71C17.6833 29.7099 17.468 29.6749 17.2625 29.6062C16.9096 29.4895 16.5964 29.2764 16.3583 28.991C16.1202 28.7056 15.9666 28.3593 15.915 27.9912L15.2437 23.18L9.71749 17.6537L4.90874 16.9825C4.54017 16.9308 4.19333 16.7773 3.90724 16.5392C3.62116 16.3012 3.40718 15.988 3.28937 15.6349C3.17156 15.2819 3.15459 14.903 3.24038 14.5408C3.32618 14.1787 3.51132 13.8477 3.77499 13.585L8.06249 9.29498C8.24858 9.10821 8.46996 8.96031 8.71374 8.85988C8.95752 8.75945 9.21883 8.70849 9.48249 8.70998H16.7737L17.37 8.11373C20.705 4.77998 24.7225 4.63623 26.2962 4.72998C26.7838 4.75961 27.2437 4.96667 27.5891 5.31208C27.9345 5.6575 28.1416 6.11739 28.1712 6.60498C28.2625 8.17373 28.1187 12.1925 24.785 15.5275H24.7837ZM14.7737 10.71H9.48249L5.18749 15.0025L9.83124 15.65L14.7737 10.71ZM22.1875 18.1237L17.2462 23.065L17.8962 27.71L22.1875 23.415V18.1237Z"
                    fill="#2DA950"
                  />
                </svg>

                <div className="flex flex-col">
                  <h3 className="manrope700 text-[#1C1C1C] text-2xl">
                    10 DAYS
                  </h3>
                  <p className="manrope500 text-[#828282] text-base">
                    Staff Deployment
                  </p>
                </div>
              </div>

              <div
                className="bg-[#002E18] flex flex-col gap-4 rounded-[29px] w-[290px] pt-[34px] px-[32px] pb-[40px] z-999 relative bottom-[480px] right-[-90px] md:bottom-[520px] md:right-[-530px] scale-[0.4] md:scale-100"
                style={{
                  border: "1.18px solid",

                  borderImageSource:
                    "linear-gradient(159.14deg, #3D3D3D 6.08%, rgba(61, 61, 61, 0) 85.58%)",
                  boxShadow: "0px 23.63px 37.81px 0px #1E1E1E17",
                }}
              >
                <div className="flex flex-row items-end gap-2">
                  <p className="manrope600 tracking-tighter text-white text-6xl">
                    $0.5
                  </p>
                  <p className="manrope600 text-[#A6A3A0]">MILLION</p>
                </div>
                <p className="text-lg text-[#CCCCCC]">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
            </div>
          </Slide>
          <Slide
            direction="left"
            duration={1000}
            triggerOnce
            className="hidden md:block"
          >
            <div
              id="right-div"
              className="relative bottom-[560px] md:bottom-[80px]"
            >
              <span className="relative">
                <div className="flex flex-row scale-[0.5] md:scale-100">
                  <img src={rectangle} alt="" />
                  <img src={rectangle} alt="" />
                  <img src={rectangle2} alt="" />
                </div>
                <div className="flex flex-row relative bottom-[100px] md:bottom-0 scale-[0.5] md:scale-100">
                  <img src={rectangle3} alt="" />
                  <img src={rectangle3} alt="" />
                  <img src={rectangle4} alt="" />
                </div>
                <div className="flex flex-row relative bottom-[200px] md:bottom-0 scale-[0.5] md:scale-100">
                  <img src={rectangle} alt="" className="rotate-180" />
                  <img src={rectangle} alt="" className="rotate-180" />
                  <img src={rectangle4} alt="" />
                </div>
              </span>
              <div className="flex flex-col gap-16 md:gap-32 relative bottom-[500px] right-[-10px] md:bottom-[420px] md:right-[60px]">
                <div className="flex flex-col gap-10 md:gap-20 w-fit">
                  <h2 className="manrope600 w-[300px] md:w-[398px] tracking-tight text-2xl md:text-4xl text-[#1c1c1c] ">
                    Enhance fortune 50 company’s insights teams research
                    capabilities
                  </h2>
                  <MobileStepper
                    variant="dots"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                    className="text-[#2DA950] bg-transparent"
                  />
                </div>
                <button className="manrope500 w-[190px] h-[60px] md:w-[243.39px] md:h-[77.22px] border-[1.31px] border-[#EAEAEA] rounded-[107.06px] p-[26.11px, 49.61px, 26.11px, 41.78px] text-[#FFFFFF] text-sm md:text-lg tracking-wider leading-6 bg-[#1C1C1C] hover:bg-[#4E4E4E] hover:transition-all hover:duration-800 ">
                  Explore More <ArrowForwardIcon className="ml-4" />
                </button>
              </div>
            </div>
          </Slide>

          <div
            id="right-div"
            className="relative bottom-[560px] flex flex-col items-end md:bottom-[80px] block md:hidden"
          >
            <span className="relative">
              <div className="flex flex-row scale-[0.5] md:scale-100">
                <img src={rectangle} alt="" />
                <img src={rectangle} alt="" />
                <img src={rectangle2} alt="" />
              </div>
              <div className="flex flex-row relative bottom-[100px] md:bottom-0 scale-[0.5] md:scale-100">
                <img src={rectangle3} alt="" />
                <img src={rectangle3} alt="" />
                <img src={rectangle4} alt="" />
              </div>
              <div className="flex flex-row relative bottom-[200px] md:bottom-0 scale-[0.5] md:scale-100">
                <img src={rectangle} alt="" className="rotate-180" />
                <img src={rectangle} alt="" className="rotate-180" />
                <img src={rectangle4} alt="" />
              </div>
            </span>
            <div className="flex flex-col gap-16 md:gap-32 relative bottom-[500px] right-[-10px] md:bottom-[420px] md:right-[60px]">
              <div className="flex flex-col gap-10 md:gap-20 w-fit">
                <h2 className="manrope600 w-[300px] md:w-[398px] tracking-tight text-2xl md:text-4xl text-[#1c1c1c] ">
                  Enhance fortune 50 company’s insights teams research
                  capabilities
                </h2>
                <MobileStepper
                  variant="dots"
                  steps={3}
                  position="static"
                  activeStep={activeStep}
                  sx={{ maxWidth: 400, flexGrow: 1 }}
                  className="text-[#2DA950] bg-transparent"
                />
              </div>
              <button className="manrope500 w-[190px] h-[60px] md:w-[243.39px] md:h-[77.22px] border-[1.31px] border-[#EAEAEA] rounded-[107.06px] p-[26.11px, 49.61px, 26.11px, 41.78px] text-[#FFFFFF] text-sm md:text-lg tracking-wider leading-6 bg-[#1C1C1C] hover:bg-[#4E4E4E] hover:transition-all hover:duration-800 ">
                Explore More <ArrowForwardIcon className="ml-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <AskQuestions />
      <Footer />
    </>
  );
}
