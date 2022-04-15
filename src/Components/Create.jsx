import React, { useState } from "react";
import BgHeaderImg from "../helpers/BgHeaderImg";
import CategoryDrp from "../helpers/create/CategoryDrp";
import CustomInput from "../helpers/create/CustomInput";
import HalfCard from "../helpers/HalfCard";
import { GoLocation } from "react-icons/go";
import VideoInput from "../helpers/create/VideoInput";

export default function Create() {
  const [values, setValues] = useState({
    title: "",
    category: "",
    location: "",
    videoFile: null,
  });
  const [uploadStatus, setUploadStatus] = useState({
    progress: 0,
  });

  function filePL(type, value) {
    console.log(type, value);
    setUploadStatus({ ...values, [type]: value });
  }

  function captureValue(type, value) {
    const lowercaseValueId = type.toLowerCase();

    const veriFilter = type === "videoFile" ? "videoFile" : lowercaseValueId;

    setValues({ ...values, [veriFilter]: value });

    console.log(values, lowercaseValueId);
  }

  return (
    <>
      <BgHeaderImg
        info={{
          heading: "Create..",
          desc: "Upload a new video.",
          imgSrc:
            "https://images.pexels.com/photos/2062556/pexels-photo-2062556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <div className="flex mx-2 space-x-3 md:flex-row md:h-96 md:mx-4">
        <HalfCard>
          <CustomInput
            settings={{
              idValue: "Title",
              value: values.title,
              placeholderValue: "Drifting on a Saturday morning...",
            }}
            captureValue={captureValue}
          />
          <CategoryDrp />
          <CustomInput
            settings={{
              idValue: "Location",
              value: values.location,
              placeholderValue: "Long Beach, CA...",
              icon: <GoLocation className="w-5 h-5" />,
            }}
            captureValue={captureValue}
          />
        </HalfCard>
        <HalfCard>
          <VideoInput
            settings={{
              progress: uploadStatus.progress,
              file: values.videoFile,
            }}
            filePL={filePL}
            captureValue={captureValue}
          />
        </HalfCard>
      </div>
    </>
  );
}
