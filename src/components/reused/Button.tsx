export interface DefaultButtonProps {
  text: string;
  onClick?: () => void;
}

export function DefaultButton({ text, onClick }: DefaultButtonProps) {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-white bg-black px-4 py-1 rounded-md
        hover:text-black hover:bg-white hover:outline hover:outline-1 hover:outline-black
        transition duration-300 cursor-pointer"
    >
      {text}
    </button>
  );
}

export function SecondaryButton({ text, onClick }: DefaultButtonProps) {
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