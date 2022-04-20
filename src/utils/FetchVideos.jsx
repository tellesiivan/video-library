import { DB_Reference } from "../firebase-config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export default async function FetchVideos() {
  let videos = [];
  const querySnapshot = await getDocs(
    query(collection(DB_Reference, "videos"), orderBy("id", "desc"))
  );

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    videos.push(doc.data());
  });

  return videos;
}