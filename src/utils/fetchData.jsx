import { DB_Reference } from "../firebase-config";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";

export async function FetchVideos() {
  let videos = [];
  const querySnapshot = await getDocs(
    query(collection(DB_Reference, "videos"), orderBy("createdOn", "desc"))
  );

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    videos.push(doc.data());
  });

  return videos;
}

// fetch user Information

export async function FetchUser(userID) {
  const docRef = doc(DB_Reference, "users", userID);
  const docSnap = await getDoc(docRef);

  // check if user exist
  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return "No such document!";
  }
}

// fetch specific video

export async function getVideo(id) {
  const videoRef = doc(DB_Reference, "videos", id);
  const videoSnap = await getDoc(videoRef);

  // check if user exist
  if (videoSnap.exists()) {
    // console.log("Document data:", videoSnap.data());
    return videoSnap.data();
  } else {
    // doc.data() will be undefined in this case
    return "error";
  }
}

export async function relatedVideos(id) {
  let videos = [];
  const q = query(collection(DB_Reference, "videos"), where("id", "!=", id));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    videos.push(doc.data());
  });

  return videos;
}
