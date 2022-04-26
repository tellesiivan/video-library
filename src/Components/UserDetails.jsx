import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userID } = useParams();

  return <div>User details go here! | {userID}</div>;
}
