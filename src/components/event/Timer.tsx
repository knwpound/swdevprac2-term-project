"use client"
import { useEffect, useState } from "react";

export function Timer({ targetDateISO }: { targetDateISO: string }) {
  const calculateTimeLeft = () => {
    const targetDate = new Date(targetDateISO);
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-row gap-1">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-serif font-bold text-2xl">{timeLeft.days}</h1>
        <p className="font-serif font-semibold text-md">Days</p>
      </div>
      <p className="font-serif font-bold text-2xl">:</p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-serif font-bold text-2xl">{timeLeft.hours}</h1>
        <p className="font-serif font-semibold text-md">Hours</p>
      </div>
      <p className="font-serif font-bold text-2xl">:</p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-serif font-bold text-2xl">{timeLeft.minutes}</h1>
        <p className="font-serif font-semibold text-md">Minutes</p>
      </div>
      <p className="font-serif font-bold text-2xl">:</p>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-serif font-bold text-2xl">{timeLeft.seconds}</h1>
        <p className="font-serif font-semibold text-md">Seconds</p>
      </div>
    </div>
  );
}
