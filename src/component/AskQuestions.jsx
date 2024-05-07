import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AskQuestions() {
  const askQuestions = [
    {
      topic: "Do you offer freelancers?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla aut fugiat expedita, sapiente ipsam esse repellendus ",
    },
    {
      topic:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla aut fugiat expedita, sapiente ipsam esse repellendus ",
    },
    {
      topic: "Can I hire multiple talents at once?",
      desc: "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      topic: "Why should I not go to an agency directly?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla aut fugiat expedita, sapiente ipsam esse repellendus ",
    },
    {
      topic: "Who can help me pick a right skillset and duration for me?",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui nulla aut fugiat expedita, sapiente ipsam esse repellendus ",
    },
  ];
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className="w-[98%] h-[100%] flex justify-center mx-auto my-8 bg-[#E8EEE7] rounded-[40px]">
        <div id="left-div" className="w-[50%]">
          <div className="flex flex-col my-16 mx-20">
            <p className="covered-by-your-grace-regular text-3xl text-[#9E9D9D]">
              What's on your mind
            </p>
            <p className="manrope500 font-semibold text-6xl tracking-tight mt-4">
              Ask Questions
            </p>
          </div>

          <svg
            width="491"
            height="475"
            viewBox="0 0 491 475"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M251.005 123.04H14.5072V0H255.167C369.093 0 401.151 14.6756 444.456 57.9807C477.934 91.7389 490.999 135.444 490.999 205.385V514.607H349.717V205.385C349.717 204.652 349.706 203.921 349.685 203.191L275.051 253.194L275.078 253.215L144.958 340.344C136.345 346.116 130.769 355.335 130.769 365.723C130.769 383.206 146.563 397.378 166.047 397.378L166.077 397.393H283.781V514.592H166.077H166.05C74.3429 514.592 0 447.884 0 365.596C0 313.559 29.7294 267.753 74.779 241.107L251.005 123.04Z"
              fill="url(#paint0_linear_0_212)"
              className="w-[491px] h-[514.61px]"
            />
            <defs>
              <linearGradient
                id="paint0_linear_0_212"
                x1="245.5"
                y1="2.84126e-08"
                x2="245"
                y2="457.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div id="right-div" className="w-[50%] pr-16">
          <div className="h-fit flex flex-col mt-24 mb-8">
            {askQuestions.map((e, idx) => {
              return (
                <Accordion
                  defaultExpanded
                  key={idx}
                  className="bg-transparent shadow-none py-6"
                  expanded={expanded === `panel${idx}`}
                  onChange={handleChange(`panel${idx}`)}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === `panel${idx}` ? (
                        <RemoveIcon className="text-[#000000] w-[24px] h-[24px]" />
                      ) : (
                        <AddIcon className="text-[#000000] w-[24px] h-[24px]" />
                      )
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className="manrope600 text-xl text-[#1C1C1C] leading-6 !pl-0"
                  >
                    {e.topic}
                  </AccordionSummary>
                  <AccordionDetails className="manrope400 text-[#617275] text-base leading-6 !pl-0">
                    {e.desc}
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
