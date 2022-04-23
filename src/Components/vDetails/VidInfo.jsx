import { RiLinksLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export default function VidInfo({ info }) {
  const location = useLocation();
  console.log(location.pathname, window.location.href);

  return (
    <div className="py-4">
      <div className="flex items-center justify-between w-full py-4 border-b border-gray-100 dark:border-dark-navHover">
        <div>user info</div>
        <button
          type="button"
          className="flex items-center justify-center w-8 h-8 text-white ease-in-out rounded-full dark:text-dark-primary bg-light-purple dark:bg-dark-green"
        >
          <RiLinksLine />
        </button>
      </div>
    </div>
  );
}
