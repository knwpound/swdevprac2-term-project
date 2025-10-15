"use client";
import { useEffect, useState } from "react";
import { DefaultButton, SecondaryButton } from "../reused/Button";
import { DefaultInput } from "../reused/DefaultInput";

export function PicsURLInput({ onClose, onChange, url }: { onClose: () => void, onChange:(e: React.ChangeEvent<HTMLInputElement>) => void, url:string }) {

  const handleSave = () => {
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
        <div className="w-full gap-2 flex flex-row">
          <DefaultInput onChange={onChange} value={url}/>
          <DefaultButton text="Save" onClick={handleSave} />
        </div>
      </div>
    </div>
  );
}
