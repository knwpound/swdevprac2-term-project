"use client";
import * as React from "react";
import { DatePicker, TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

export function DateInputCard({onChangeDate,onChangeTime}:{onChangeDate:(newValue: Dayjs | null) => void,onChangeTime:(newValue: Dayjs | null) => void}) {

  return (
    <div className="w-full h-full flex flex-col justify-between p-5 bg-white rounded-md shadow-md">
      <h1 className="text-lg font-semibold">Date & Time</h1>
      <div className="flex flex-row gap-2 items-center justify-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="w-[50%] flex flex-col gap-1">
            <p className="text-sm font-semibold">Select a day</p>
            <DatePicker
              onChange={onChangeDate}
              slotProps={{ textField: { size: "small", fullWidth: true } }}
            />
          </div>
          <div className="w-[30%] flex flex-col gap-1">
            <p className="text-sm font-semibold">Start time</p>
            <TimePicker
              onChange={onChangeTime}
              slotProps={{ textField: { size: "small", fullWidth: true } }}
            />
          </div>
        </LocalizationProvider>
      </div>
    </div>
  );
}
