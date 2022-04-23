import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetParams from "../../helpers/GetParams";
import Skeleton from "../../helpers/Skeleton";
import { getVideo } from "../../utils/fetchData";
import VdetailsLayout from "./VdetailsLayout";

export default function VdetailsMain() {
  const { videoID } = useParams();
  const from = GetParams("from");

  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    if (videoID) {
      async function loadVid() {
        setLoading(true);
        const vInfo = await getVideo(videoID);
        setVideo(vInfo);
        setLoading(false);
      }
      loadVid();
    }
  }, [videoID]);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : video !== "error" ? (
        <VdetailsLayout vInfo={video} />
      ) : (
        console.log("show error msg")
      )}
    </>
  );
}
