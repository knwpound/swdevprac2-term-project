import { DefaultButtonProps } from "./DefaultButton";
export function LightButton({ text, onClick }: DefaultButtonProps) {
  return (
    <button
      className="font-semibold px-4 py-1 rounded-md bg-slate-100
        hover:bg-slate-300 transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
