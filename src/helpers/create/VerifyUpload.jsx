import { useState } from "react";
import { RiCheckLine } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";
import UploadSummary from "./UploadSummary";
import { doc, setDoc } from "firebase/firestore";
import { DB_Reference } from "../../firebase-config";
import { getUser } from "../../utils/authUser";
import { useNavigate } from "react-router-dom";
import createUID from "create-unique-id";

export default function VerifyUpload({ values }) {
  const [summary, setSummary] = useState(false);
  const user = getUser();
  const navigate = useNavigate();

  const id = `v-${createUID(13)}`;

  console.log(id);

  async function renderHandler() {
    let error = false;
    for (const key in values) {
      if (values[key] === null || values[key] === "") {
        error = true;
      }
    }
    if (error) {
      toast("ERROR: Complete all fields", {
        icon: "🗑️",
        position: "bottom-right",
        className: "text-xs ",
      });
      setSummary(false);
      return;
    }
    const data = {
      ...values,
      id,
      createdOn: `${Date.now()}`,
      uid: user[0]?.uid,
    };
    setSummary(true);
    await setDoc(doc(DB_Reference, `videos`, `${id}`), data);

    navigate("/", { replace: true });
  }

  const renderBTN = (
    <button
      type="button"
      className="flex items-center px-3 py-2 text-sm font-medium leading-4 text-white border border-transparent rounded-md shadow-sm w-fit bg-light-purple dark:bg-dark-secondary focus:outline-none"
      onClick={renderHandler}
    >
      <RiCheckLine className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
      Upload
    </button>
  );

  return (
    <>
      {summary ? <UploadSummary details={values} /> : renderBTN}
      <Toaster />
    </>
  );
}
