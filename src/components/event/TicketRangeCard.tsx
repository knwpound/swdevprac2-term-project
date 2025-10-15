"use client";
import { useState } from "react";

export function TicketRangeCard({onChange}:{onChange?: (value: number) => void;}) {
  const [value, setValue] = useState(500);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange?.(newValue); 
  };
  return (
    <div className="w-full h-full flex flex-col justify-between p-5 bg-white rounded-md shadow-md">
      <h1 className="text-lg font-semibold">Ticket Detail</h1>
      <div>
        <div className="flex flex-row justify-between">
          <p>0</p>
          <div className="font-bold text-sky-600">{value}</div>
          <p>1000</p>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          step="1"
          className="w-full"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
