import { RiLinksLine, RiDeleteBin7Line } from "react-icons/ri";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";
import { DB_Reference, storage_Reference } from "../../firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Avatar from "../../helpers/vPage/Avatar";
import { useState } from "react";

export default function VidInfo({ info, user }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [deleteObjErr, setDeleteObjErr] = useState(false);

  const currentUser = useSelector((store) => store.main.user);
  //   console.log(window.location.href);

  const fromNow = info?.createdOn
    ? moment(new Date(parseInt(info?.createdOn)).toISOString()).fromNow()
    : null;

  const videoByUser = info?.uid === currentUser?.uid ? true : false;

  async function deleteHandler() {
    setLoading(true);
    // close toast
    toast.dismiss();

    const { id, videoFile: file } = info;

    const deleteRef = ref(storage_Reference, file);
    // Delete the file
    deleteObject(deleteRef)
      .then(() => {
        toast("Your video has been deleted", {
          icon: "🗑️",
          position: "bottom-right",
          className: "text-xs ",
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
        console.log(error);
        setLoading(false);
        setDeleteObjErr(true);
      });
    !deleteObjErr && (await deleteDoc(doc(DB_Reference, "videos", id)));

    navigate("/", { replace: true });
    setLoading(false);
    setDeleteObjErr(false);
  }

  return (
    <div className="py-4">
      <div className=" pb-4">
        <h3 className="sm:text-xl dark:text-white text-black ">
          {info?.title}
        </h3>
        {fromNow !== null ? (
          <p className="text-xs text-gray-500 ">{fromNow}</p>
        ) : (
          ""
        )}
      </div>
      {user && (
        <div className="py-4 border-b border-gray-100 dark:border-dark-navHover">
          <div className="flex items-center justify-between w-full ">
            <Avatar user={{ user }} />
            <div className="flex flex-row items-center space-x-4">
              {videoByUser && (
                <button
                  type="button"
                  className="flex items-center justify-center w-8 h-8 text-white ease-in-out rounded-full dark:text-dark-primary bg-light-purple dark:bg-dark-green"
                  onClick={() =>
                    toast(
                      <>
                        <span>Sure you want to delete this video?</span>
                        <div className="space-x-1 ml-2 cursor-pointer">
                          <span
                            className="p-2 hover:bg-gray-100  hover:text-light-purple rounded-lg"
                            onClick={deleteHandler}
                          >
                            Yes
                          </span>
                          <span
                            className="p-2 hover:bg-gray-100  hover:text-light-purple rounded-lg"
                            onClick={() => toast.dismiss()}
                          >
                            No
                          </span>
                        </div>
                      </>
                    )
                  }
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
          <p className="text-sm text-gray-500 mt-4 text-justify">{info.desc}</p>
        </div>
      )}
      {loading &&
        toast("Loading...", {
          icon: "🤨",
          position: "bottom-right",
          className: "text-xs ",
        })}
      <Toaster
        position="bottom-center"
        toastOptions={{ icon: "👋", className: "text-xs", duration: 10000 }}
      />
    </div>
  );
}
