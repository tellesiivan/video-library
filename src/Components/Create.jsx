import React from "react";
import BgHeaderImg from "../helpers/BgHeaderImg";
import CategoryDrp from "../helpers/create/CategoryDrp";
import TitleInput from "../helpers/create/TitleInput";
import HalfCard from "../helpers/HalfCard";

export default function Create() {
  return (
    <>
      <BgHeaderImg
        info={{
          heading: "Create..",
          desc: "Upload a new video.",
          imgSrc:
            "https://images.unsplash.com/photo-1640023032958-2b1bb10fd967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1209&q=80",
        }}
      />
      <div className="flex mx-2 space-x-3 md:flex-row md:h-96 md:mx-4">
        <HalfCard>
          <TitleInput />
          <CategoryDrp />
        </HalfCard>
        <HalfCard></HalfCard>
      </div>
    </>
  );
}
