export interface DefaultButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function DefaultButton({ text, onClick, disabled }: DefaultButtonProps) {
  return (
    <button
      onClick={onClick}
      className="font-semibold text-white bg-black px-4 py-1 rounded-md
    hover:text-black hover:bg-white hover:outline hover:outline-1 hover:outline-black
    disabled:hover:text-white disabled:hover:bg-black disabled:hover:outline-none
    transition duration-300 cursor-pointer disabled:opacity-30"
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export function SecondaryButton({ text, onClick, disabled }: DefaultButtonProps) {
  return (
    <button
      className="font-semibold px-4 py-1 rounded-md bg-slate-100
        hover:bg-slate-300 transition duration-300 cursor-pointer disabled:opacity-75"
      onClick={onClick}
      disabled={disabled}
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