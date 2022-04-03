import { InputKind } from "@libs/client/utils";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: InputKind;
  register: UseFormRegisterReturn;
  [key: string]: any;
}

export default function Input({
  label,
  name,
  kind = InputKind.text,
  register,
  ...rest
}: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="text-gray-400 ">
        {label}
      </label>
      <div>
        {kind === InputKind.email ? (
          <input
            {...register}
            {...rest}
            id="input"
            className="w-full border-gray-400 rounded-lg shadow-sm appearance-none focus:border-orange-400 focus:ring-orange-400"
            type="email"
          />
        ) : null}
        {kind === InputKind.phone ? (
          <div className="flex">
            <span className="flex items-center justify-center px-2 text-gray-500 border border-r-0 border-gray-400 rounded-l-lg select-none bg-gray-50">
              +82
            </span>
            <input
              {...register}
              {...rest}
              id={name}
              className="w-full border-gray-400 rounded-r-lg shadow-sm appearance-none focus:border-orange-400 focus:ring-orange-400"
              type="number"
            />
          </div>
        ) : null}
        {kind === InputKind.text ? (
          <input
            {...register}
            {...rest}
            className="w-full border-gray-400 rounded-lg shadow-sm appearance-none focus:border-orange-400 focus:ring-orange-400"
            id="name"
            type="text"
            placeholder=""
          />
        ) : null}
        {kind === InputKind.price ? (
          <div className="relative flex items-center mt-1">
            <div className="absolute left-0 flex items-center justify-center pl-3 select-none">
              <span className="text-sm text-gray-500">$</span>
            </div>
            <input
              {...register}
              {...rest}
              className="w-full border-gray-400 rounded-lg shadow-sm appearance-none pl-7 focus:border-orange-400 focus:ring-orange-400"
              id="price"
              type="text"
              placeholder="0.00"
            />
            <div className="absolute right-0 flex items-center justify-center pr-4">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
