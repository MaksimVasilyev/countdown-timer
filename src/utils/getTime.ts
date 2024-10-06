const getTime = (launchTime: {
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
}) => {
  const timeNow = new Date();
  const eventTime = new Date(
    launchTime.year,
    launchTime.month - 1,
    launchTime.date,
    launchTime.hours,
    launchTime.minutes
  );

  const milisecondsLeft = eventTime.getTime() - timeNow.getTime();
  const daysLeft = Math.floor(milisecondsLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((milisecondsLeft / (1000 * 60 * 60)) % 24);
  const minutesLeft = Math.floor((milisecondsLeft / (1000 * 60)) % 60);
  const secondsLeft = Math.floor((milisecondsLeft / 1000) % 60);
  const timeLeft = {
    days: daysLeft,
    hours: hoursLeft,
    minutes: minutesLeft,
    seconds: secondsLeft,
  };
  return timeLeft;
};

export default getTime;
