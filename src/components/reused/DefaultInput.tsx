interface DefaultInputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
  min?:string;
  max?:string;
  disabled?:boolean;
}

export function DefaultInput({
  type = "text",
  value,
  onChange,
  placeholder = "Value",
  name,
  className = "",
  min,
  max,
  disabled,
}: DefaultInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
      className={`bg-gray-200 outline outline-gray-300 py-1 px-3 rounded-sm 
                 focus:outline-gray-400 focus:outline-2 transition duration-150 ${className}
                 disabled:bg-gray-50`}
      disabled={disabled}
    />
  );
}
