import React from "react";
import { useParams } from "react-router-dom";
import GetParams from "../helpers/GetParams";

export default function Vdetails() {
  const params = useParams();
  const from = GetParams("from");

  console.log(from);

  return (
    <>
      {/* 3 column wrapper */}
      <div className="flex-grow w-full h-full mx-auto max-w-7xl xl:px-8 lg:flex">
        {/* Left sidebar & main wrapper */}
        <div className="flex-1 min-w-0 xl:flex">
          <div className="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200">
            <div className="h-full py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
              {/* Start left column area */}
              <div
                className="relative h-full"
                style={{ minHeight: "26rem" }}
              ></div>
              {/* End left column area */}
            </div>
          </div>

          <div className=" lg:min-w-0 lg:flex-1">
            <div className="h-full px-4 py-6 sm:px-6 lg:px-8">
              {/* Start main area*/}
              <div
                className="relative h-full"
                style={{ minHeight: "16rem" }}
              ></div>
              {/* End main area */}
            </div>
          </div>
        </div>

        <div className="pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
          <div className="h-full py-6 pl-6 lg:w-80">
            {/* Start right column area */}
            <div
              className="relative h-full"
              style={{ minHeight: "16rem" }}
            ></div>
            {/* End right column area */}
          </div>
        </div>
      </div>
    </>
  );
}
