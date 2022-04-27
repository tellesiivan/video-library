import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetParams from "../../helpers/GetParams";
import Skeleton from "../../helpers/Skeleton";
import { getVideo, relatedVideos } from "../../utils/fetchData";
import VdetailsLayout from "./VdetailsLayout";

export default function VdetailsMain() {
  const { videoID } = useParams();
  const from = GetParams("from");

  const [loading, setLoading] = useState(false);
  const [video, setVideo] = useState(null);
  const [relatedVids, setRelatedVids] = useState(null);

  useEffect(() => {
    if (videoID) {
      async function loadVid() {
        setLoading(true);
        const vInfo = await getVideo(videoID);
        const rVids = await relatedVideos(videoID);
        setRelatedVids(rVids);
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
        <VdetailsLayout vInfo={video} relatedVids={relatedVids} />
      ) : (
        console.log("show error msg")
      )}
    </>
  );
}
