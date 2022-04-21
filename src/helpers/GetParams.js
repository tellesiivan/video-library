import { useLocation } from "react-router-dom";

export default function GetParams(param) {
  const params = useLocation();
  const { search } = params;

  const query = new URLSearchParams(search).get(param);

  return query;
}
