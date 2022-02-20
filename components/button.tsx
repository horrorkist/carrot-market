interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function Button({ onClick, text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className="w-full px-4 py-2 mt-4 text-white bg-orange-400 hover:bg-orange-500 rounded-xl focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
    >
      {text}
    </button>
  );
}
