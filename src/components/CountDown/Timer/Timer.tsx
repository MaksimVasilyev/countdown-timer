import TimerElement from "@/components/CountDown/Timer/TimerElement/TimerElement";

interface TimerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="flex gap-4 xl:gap-8 justify-center">
      <TimerElement time={days} timeStamp={"days"} />
      <TimerElement time={hours} timeStamp={"hours"} />
      <TimerElement time={minutes} timeStamp={"minutes"} />
      <TimerElement time={seconds} timeStamp={"seconds"} />
    </div>
  );
};
export default Timer;
