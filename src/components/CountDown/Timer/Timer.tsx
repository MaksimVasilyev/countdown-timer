import { FC, useEffect, useState } from "react";
import TimerElement from "@/components/CountDown/Timer/TimerElement/TimerElement";

interface TimerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

const Timer: FC<TimerProps> = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft;

  const [previousTime, setPreviousTime] = useState(timeLeft);
  const [rotateDays, setRotateDays] = useState(false);
  const [rotateHours, setRotateHours] = useState(false);
  const [rotateMinutes, setRotateMinutes] = useState(false);
  const [rotateSeconds, setRotateSeconds] = useState(false);

  useEffect(() => {
    // Check changes and trigger rotations for each time unit
    if (previousTime.days !== days) {
      setRotateDays(true);
      setTimeout(() => setRotateDays(false), 500);
    }

    if (previousTime.hours !== hours) {
      setRotateHours(true);
      setTimeout(() => setRotateHours(false), 500);
    }

    if (previousTime.minutes !== minutes) {
      setRotateMinutes(true);
      setTimeout(() => setRotateMinutes(false), 500);
    }

    if (previousTime.seconds !== seconds) {
      setRotateSeconds(true);
      setTimeout(() => setRotateSeconds(false), 500);
    }

    // Update the previous time to the current time
    setPreviousTime(timeLeft);
  }, [timeLeft, previousTime]);

  return (
    <div className="flex gap-4 xl:gap-8 justify-center">
      <TimerElement time={days} timeStamp="days" shouldRotate={rotateDays} />
      <TimerElement time={hours} timeStamp="hours" shouldRotate={rotateHours} />
      <TimerElement
        time={minutes}
        timeStamp="minutes"
        shouldRotate={rotateMinutes}
      />
      <TimerElement
        time={seconds}
        timeStamp="seconds"
        shouldRotate={rotateSeconds}
      />
    </div>
  );
};

export default Timer;
