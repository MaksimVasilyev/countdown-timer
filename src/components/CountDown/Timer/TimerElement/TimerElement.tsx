import { FC, useState, useEffect } from "react";

interface TimerElementProps {
  time: number;
  timeStamp: "days" | "hours" | "minutes" | "seconds";
  shouldRotate?: boolean;
}

const TimerElement: FC<TimerElementProps> = ({
  time,
  timeStamp,
  shouldRotate,
}) => {

  const [clientTime, setClientTime] = useState<number | null>(null);

  useEffect(() => {
  
    setClientTime(time);
  }, [time]);

  
  if (clientTime === null) {
    return null; 
  }

  const formattedTime = time.toString().padStart(2, '0');
  return (
    <div className="flex flex-col gap-[9px] xl:gap-[16px]  items-center ">
      <div className="relative flex-col w-[70px] h-[71px] xl:h-[150px] xl:w-[148px] bg-mostly_black rounded-lg">
        <h1 className="absolute inset-0 flex items-center justify-center text-soft_red text-[36px] xl:text-[80px] font-bold leading-[71px] z-20">
          {formattedTime}
        </h1>
        <div
          className={`w-[70px] h-[33px] xl:w-[148px] xl:h-[70px]  bg-dark_desaturated_blue rounded-t-lg ${
            shouldRotate ? "animate-[rotateXCounterClockwise_1s_ease-in-out]" : ""
          }`}
        ></div>
        <div className="w-[70px] h-[0.47px] xl:w-[148px] xl:h-[1px] bg-very_dark_blue"></div>
        <div
          className={`w-[70px] h-[33px] xl:w-[148px] xl:h-[70px]   bg-dark_desaturated_blue rounded-b-lg ${
            shouldRotate ? "animate-[rotateXClockwise_1s_ease-in-out]" : ""
          }`}
        ></div>
        <div className=" absolute right-0 top-[30px] xl:top-[64px]  w-[3px] h-[6px] xl:w-[6px] xl:p-[12px] rounded-tr-[3px] rounded-br-[3px] xl:rounded-tr-[6px] xl:rounded-br-[6px]  bg-mostly_black rounded-full z-10"></div>
        <div className=" absolute left-0 top-[30px] xl:top-[64px]  w-[3px] h-[6px] xl:w-[6px] xl:p-[12px] rounded-tl-[3px] rounded-bl-[3px] xl:rounded-tl-[6px] xl:rounded-bl-[6px]  bg-mostly_black rounded-full z-10"></div>
      </div>
      <p className=" text-[7px] xl:text-[18px] font-bold text-grayish_blue uppercase tracking-[2.96px] xl:tracking-[5.92px] ">
        {timeStamp}
      </p>
    </div>
  );
};
export default TimerElement;


