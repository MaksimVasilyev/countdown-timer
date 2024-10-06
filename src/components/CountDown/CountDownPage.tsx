"use client";
import { useState, useEffect } from "react";
import getTime from "@/utils/getTime";
import Timer from "@/components/CountDown/Timer/Timer";
import React from "react";

const CountDownPage = () => {
  const launchTime = { year: 2024, month: 10, date: 8, hours: 11, minutes: 0 };

  const [timeLeft, setTimeLeft] = useState(getTime(launchTime)); // Initialize state
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTime(launchTime)); // Update time left every second
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, ); // Dependency array with launchTime

  return (
    <div className="flex flex-col mt-[110px] xl:mt-[134px] gap-[54px] xl:gap-[104px]">
      <h1 className="font-redhat font-bold text-[18px] xl:text-[22px] leading-[24px] xl:leading-[29px] tracking-[6.14px] xl:tracking-[7.5px] text-center uppercase text-white">
        We`re launching soon
      </h1>
      <Timer timeLeft={timeLeft} />
    </div>
  );
};

export default CountDownPage;
