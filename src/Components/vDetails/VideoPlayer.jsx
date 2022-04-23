import { useState } from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ videoSrc }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded"
      onMouseEnter={() => setShowControls(!showControls)}
      onMouseLeave={() => setShowControls(!showControls)}
    >
      <ReactPlayer
        url={videoSrc}
        width="100%"
        height="auto"
        controls={showControls}
      />
    </div>
  );
}
