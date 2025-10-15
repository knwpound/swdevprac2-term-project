interface DefaultInputProps {
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  className?: string;
}

export function DefaultInput({
  type = "text",
  value,
  onChange,
  placeholder = "Value",
  name,
  className = "",
}: DefaultInputProps) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-gray-200 outline outline-gray-300 py-1 px-3 rounded-sm 
                 focus:outline-gray-400 focus:outline-2 transition duration-150 ${className}`}
    />
  );
}
