import { RiDeleteBin4Line } from "react-icons/ri";

export default function VideoCard({ videoSrc, action }) {
  return (
    <div className="relative w-full h-full ">
      <button
        type="button"
        className="absolute z-20 flex items-center justify-center w-8 h-8 duration-300 ease-in-out border-2 border-gray-100 rounded-full shadow-lg bg-dark-primary top-2 right-2 hover:scale-105"
        onClick={() => action()}
      >
        <RiDeleteBin4Line className="text-white" />
      </button>
      <video
        src={videoSrc}
        className="object-fill w-full h-full rounded-md"
        controls
        autoPlay
      />
    </div>
  );
}
