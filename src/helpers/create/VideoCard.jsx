import { RiDeleteBin4Line } from "react-icons/ri";

export default function VideoCard({ videoSrc, action }) {
  return (
    <div className="relative h-full w-full ">
      <button
        type="button"
        className="h-8 w-8 rounded-full bg-dark-primary absolute top-2 right-2 z-20 shadow-lg hover:scale-105 flex items-center justify-center ease-in-out duration-300  border-2 border-gray-100"
        onClick={() => action()}
      >
        <RiDeleteBin4Line className="text-white" />
      </button>
      <video
        src={videoSrc}
        className="h-full w-full object-fill rounded-md"
        controls
        autoPlay
      />
    </div>
  );
}
