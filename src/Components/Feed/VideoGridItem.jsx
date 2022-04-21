import { useEffect, useState } from "react";
import VideoCard from "../../helpers/create/VideoCard";
import { Link, useLocation } from "react-router-dom";
import { FetchUser } from "../../utils/FetchVideos";
import moment from "moment";

export default function VideoGridItem({ video }) {
  const [user, setUser] = useState({
    userID: "",
    userInfo: "",
  });

  const location = useLocation();

  useEffect(() => {
    async function UserDetails() {
      if (video) setUser({ ...user, userID: video.uid });
      if (user.userID) {
        const fetchedUser = await FetchUser(user.userID);
        console.log(fetchedUser);
        setUser({ ...user, userInfo: fetchedUser });
      }
    }
    UserDetails();
  }, [user.userID]);

  const timeAgo = moment(new Date(parseInt(video.id)).toISOString()).fromNow();

  return (
    <li className="relative p-2 bg-gray-100 rounded-sm dark:bg-dark-secondary">
      <div className="block w-full h-48 overflow-hidden transition duration-700 ease-in-out rounded-sm cursor-pointer group aspect-w-10 aspect-h-7 ">
        <VideoCard videoSrc={video.videoFile} />
      </div>
      <div className="flex flex-row items-center">
        <div className="w-1/4">
          <Link to={`u/${video.uid}`}>
            {user.userInfo?.photoURL ? (
              <img
                className="avatarVideoCard"
                src={user.userInfo.photoURL}
                alt=""
              />
            ) : (
              <span className="overflow-hidden bg-white dark:bg-gray-600 avatarVideoCard">
                <svg
                  className="w-full h-full text-gray-300 dark:text-dark-altLight"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            )}
          </Link>
        </div>

        <div className="flex-1 text-right">
          <Link
            to={{
              pathname: `v/${video.id}`,
              search: `?from=/`,
            }}
          >
            <h3 className="block mt-2 text-sm font-medium text-gray-900 truncate pointer-events-none dark:text-white">
              {video.title}
            </h3>
          </Link>
          <div className="my-1.5">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium dark:bg-dark-navHover dark:text-gray-400 text-gray-600 bg-white">
              <svg
                className="-ml-0.5 mr-1.5 h-2 w-2 dark:text-dark-green text-light-purple"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              {video.category.name}
            </span>
          </div>
          <span className="text-xs text-gray-500">{timeAgo}</span>
        </div>
      </div>
    </li>
  );
}
