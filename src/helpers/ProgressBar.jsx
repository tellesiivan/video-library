import { Line } from "rc-progress";

export default function ProgressBar({ progressValue, message }) {
  return (
    <div className="w-2/4 flex flex-col mx-auto">
      <p>{message}</p>
      <Line
        percent={Math.floor(progressValue)}
        strokeWidth="2"
        strokeColor="#7a66ff"
        className="mt-2"
      />
    </div>
  );
}
