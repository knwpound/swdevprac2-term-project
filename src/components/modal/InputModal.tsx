"use client";
import { DefaultButton, SecondaryButton } from "../reused/Button";
import { DefaultInput } from "../reused/DefaultInput";
import { useState } from "react";

export function PicsURLInput({
  onClose,
  onSave,
  url,
}: {
  onClose: () => void;
  onSave: (newUrl: string) => void;
  url: string;
}) {
  const [picSrc, setPicSrc] = useState(url);
  const handleSave = () => {
    if (picSrc == "") {
      alert("Please enter valid picture url");
      return;
    }
    onSave(picSrc);
    onClose();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col gap-0">
          <h2 className="text-xl font-semibold mb-4">Fill event picture URL</h2>
          <p className="text-gray-600 mb-6">
            Please fill a correct website url
          </p>
        </div>
        <DefaultInput
          value={picSrc}
          onChange={(e) => {
            setPicSrc(e.target.value);
          }}
          className="w-full mb-5"
        />
        <div className="w-full gap-2 flex flex-row justify-center">
          <SecondaryButton text="Cancel" onClick={onClose} />
          <DefaultButton text="Save" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}

export function DeleteEventModal({
  onClose,
  onChange,
}: {
  onClose: () => void;
  onChange: () => void;
}) {
  const [inputValue, setInputValue] = useState("");

  const handleDelete = () => {
    if (inputValue === "Delete me") {
      onChange();
      console.log("Deleted!");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="flex flex-col gap-0">
          <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
          <p className="text-gray-600 mb-6">Type "Delete me" to comfirm</p>
        </div>
        <div className="w-full gap-2 flex flex-row">
          <DefaultInput
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <SecondaryButton text="Cancel" onClick={onClose} />
          <DefaultButton
            text="Delete"
            onClick={handleDelete}
            disabled={inputValue !== "Delete me"}
          />
        </div>
      </div>
    </div>
  );
}

export function ReservationModal({
  onClose,
  onClick,
  onChange,
}: {
  onClose: () => void;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  function handleReservation(){
    onClose;
    onClick;
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col gap-6 bg-white rounded-2xl p-6 shadow-lg items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-xl font-semibold">Confirm Reservation</h2>
          <p className="text-gray-600">Choose ticket amount from 1-4</p>
        </div>

        <div className="w-full gap-2 flex flex-row justify-center">
          <DefaultInput
            type="number"
            className="text-center"
            min="1"
            max="4"
            placeholder=""
            onChange={onChange}
          ></DefaultInput>
          <SecondaryButton text="Cancel" onClick={onClose} />
          <DefaultButton text="Reserve" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}
