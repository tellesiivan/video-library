import { RiTvLine } from "react-icons/ri";

export default function UploadSummary({ details }) {
  return (
    <dl className="grid w-full grid-cols-1 gap-x-3 gap-y-8 sm:grid-cols-2">
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-white dark:text-black ">
          Title
        </dt>
        <dd className="mt-1 text-sm text-light-gray dark:text-dark-altLight">
          {details.title}
        </dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-white dark:text-black">
          Category
        </dt>
        <dd className="mt-1 text-sm text-light-gray dark:text-dark-altLight">
          {details.category.name}
        </dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-white dark:text-black">
          Location
        </dt>
        <dd className="mt-1 text-sm text-light-gray dark:text-dark-altLight">
          {details.location}
        </dd>
      </div>
      <div className="sm:col-span-1">
        <dt className="text-sm font-medium text-white dark:text-black">
          Date/Time
        </dt>
        <dd className="mt-1 text-sm text-light-gray dark:text-dark-altLight">
          $120,000
        </dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-sm font-medium text-white dark:text-black">
          Video Description
        </dt>
        <dd className="mt-1 text-sm text-light-gray dark:text-dark-altLight">
          {details.desc}
        </dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-sm font-medium text-white dark:text-black">
          Attachment
        </dt>
        <dd className="mt-1 text-sm text-black">
          <div className="flex items-center justify-between py-3 pl-3 pr-4 text-sm bg-white rounded-md dark:bg-dark-primary">
            <div className="flex items-center flex-1 w-0">
              <RiTvLine
                className="flex-shrink-0 w-5 h-5 text-black dark:text-white"
                aria-hidden="true"
              />
              <span className="flex-1 w-0 ml-2 truncate dark:text-dark-primaryText">
                resume_back_end_developer.pdf
              </span>
            </div>
          </div>
        </dd>
      </div>
    </dl>
  );
}
