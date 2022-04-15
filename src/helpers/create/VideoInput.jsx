import { RiUploadCloud2Line } from "react-icons/ri";
import ProgressBar from "../ProgressBar";
import { firebaseApp } from "../../firebase-config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export default function VideoInput({ settings, filePL, captureValue }) {
  const { file, progress } = settings;

  // init storage
  const storage = getStorage(firebaseApp);

  function uploadFileHandler(e) {
    const videoFile = e.target.files[0];

    // Create a storage reference
    const storageRef = ref(storage, `Videos/${Date.now()}-${videoFile.name}`);

    // upload Task
    const uploadTask = uploadBytesResumable(storageRef, videoFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const upload_progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        // set progress state
        filePL("progress", upload_progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);

          captureValue("videoFile", downloadURL);
        });
      }
    );
  }

  const isLoading = progress > 0 && progress <= 100;
  const noFileContent = isLoading ? (
    <ProgressBar
      progressValue={progress}
      message={`Uploading: ${Math.round((progress * 100) / 100)}%`}
    />
  ) : (
    <>
      <div className="flex flex-col items-center ">
        <RiUploadCloud2Line size="2em" />
        <span className="block mt-2 text-sm font-medium text-gray-900 dark:text-dark-primaryText">
          Click or drag & drop a new video
        </span>
      </div>
      {!isLoading && (
        <input
          type="file"
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full opacity-0 cursor-pointer z-20"
          onChange={uploadFileHandler}
          name="upload-file"
          accept="video/mp4,video/x-m4v,video/*"
        />
      )}
    </>
  );

  return (
    <div
      type="button"
      className="relative flex items-center justify-center w-full h-full p-12 text-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-dark-secondary hover:border-gray-400 dark:hover:border-dark-primary"
    >
      {!file ? noFileContent : `file uploaded`}
    </div>
  );
}
