import { RiLinksLine, RiDeleteBin7Line } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../../helpers/vPage/Avatar";

export default function VidInfo({ info, user }) {
  const location = useLocation();
  const currentUser = useSelector((store) => store.main.user);
  //   console.log(window.location.href);
  // const timeAgo = moment(
  //   new Date(parseInt(info?.createdOn)).toISOString()
  // ).fromNow();

  const videoByUser = info?.uid === currentUser?.uid ? true : false;

  return (
    <div className="py-4">
      {user && (
        <div className="flex items-center justify-between w-full py-4 border-b border-gray-100 dark:border-dark-navHover">
          <Avatar user={{ user, timeAgo: info?.createdOn }} />
          <div className="flex flex-row items-center space-x-2">
            {videoByUser && (
              <button
                type="button"
                className="flex items-center justify-center w-8 h-8 text-white ease-in-out rounded-full dark:text-dark-primary bg-light-purple dark:bg-dark-green"
              >
                <RiDeleteBin7Line />
              </button>
            )}
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 text-white ease-in-out rounded-full dark:text-dark-primary bg-light-purple dark:bg-dark-green"
            >
              <RiLinksLine />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
