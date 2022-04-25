import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function Avatar({ user, timeAgo }) {
  const ago = moment(new Date(parseInt(user.timeAgo)).toISOString()).fromNow();

  return (
    <Link to={`/u/${user.user.uid}`} className="flex-shrink-0 block group">
      <div className="flex items-center">
        <div>
          <img
            className="inline-block rounded-full h-9 w-9"
            src={user.user.photoURL}
            alt={`${user.user.displayName} profile avatar`}
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700 dark:text-dark-primaryText group-hover:text-gray-900 dark:group-hover:text-dark">
            {user.user.displayName}
          </p>
          <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
            {user.timeAgo ? ago : "View Profile"}
          </p>
        </div>
      </div>
    </Link>
  );
}
