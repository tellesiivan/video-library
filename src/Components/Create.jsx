import React, { useState } from "react";
import BgHeaderImg from "../helpers/BgHeaderImg";
import CategoryDrp from "../helpers/create/CategoryDrp";
import CustomInput from "../helpers/create/CustomInput";
import HalfCard from "../helpers/HalfCard";
import { GoLocation } from "react-icons/go";
import VideoInput from "../helpers/create/VideoInput";
import DescTextarea from "../helpers/create/DescTextarea";
import VerifyUpload from "../helpers/create/VerifyUpload";

export default function Create() {
  const [values, setValues] = useState({
    title: "",
    category: null,
    location: "",
    videoFile: null,
    video_name: "",
    desc: "",
  });
  const [uploadStatus, setUploadStatus] = useState({
    progress: 0,
  });

  function fileProgress(type, value) {
    setUploadStatus({ ...uploadStatus, [type]: value });
  }

  function captureValue(type, value) {
    const lowercaseType = type.toLowerCase();

    const veriFilter = type === "videoFile" ? "videoFile" : lowercaseType;

    setValues({ ...values, [veriFilter]: value });
  }

  return (
    <div className="pb-4">
      <BgHeaderImg
        info={{
          heading: "Create studio",
          desc: "Upload a new video.",
          imgSrc:
            "https://images.pexels.com/photos/1149055/pexels-photo-1149055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        }}
      />
      <div className="flex flex-col mx-2 space-y-2 md:space-y-0 md:space-x-2 md:flex-row md:h-96 md:mx-4">
        <HalfCard
          customStyle={{
            bg: null,
            customClasses: "flex flex-col justify-center p-2 h-96",
          }}
        >
          <CustomInput
            settings={{
              idValue: "Title",
              value: values.title,
              placeholderValue: "Drifting on a Saturday morning...",
            }}
            captureValue={captureValue}
          />
          <CategoryDrp
            settings={{
              idValue: "category",
              value: values.category,
            }}
            captureValue={captureValue}
          />
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
        <HalfCard
          customStyle={{
            bg: null,
            customClasses: null,
          }}
        >
          <VideoInput
            settings={{
              progress: uploadStatus.progress,
              file: values.videoFile,
            }}
            fileProgress={fileProgress}
            captureValue={captureValue}
          />
        </HalfCard>
      </div>
      <div className="flex flex-col h-auto mx-2 mt-2 space-y-2 md:space-y-0 md:mt-3 md:space-x-2 md:flex-row md:h-96 md:mx-4">
        <HalfCard
          customStyle={{
            bg: null,
            customClasses: "flex flex-col justify-center p-4 h-96",
          }}
        >
          <DescTextarea
            settings={{
              idValue: "desc",
              value: values.desc,
              placeholderValue: "Let's try to stay below 240 characters...",
            }}
            captureValue={captureValue}
          />
        </HalfCard>
        <HalfCard
          customStyle={{
            bg: "dark:bg-dark-green bg-light-purple ",
            customClasses:
              " h-full flex justify-center p-5 flex-col items-center",
          }}
        >
          <VerifyUpload values={values} />
        </HalfCard>
      </div>
    </div>
  );
}
