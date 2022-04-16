import { Line } from "rc-progress";

export default function ProgressBar({ progressValue, message }) {
  return (
    <div className="flex flex-col w-2/4 mx-auto">
      <p>{message}</p>
      <Line
        percent={Math.floor(progressValue)}
        strokeWidth="3"
        trailWidth="2"
        strokeColor="#7a66ff"
        trailColor="#ded9ff"
        className="mt-2"
      />
    </div>
  );
}
