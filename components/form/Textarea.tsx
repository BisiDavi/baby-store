import { useFormContext } from "react-hook-form";
import { inputType } from "@/types";

interface Props {
  input: inputType;
}

export default function Textarea({ input }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <div className="form-textarea flex flex-col">
      <label htmlFor={input.name}>{input.label}</label>
      <textarea
        className="border p-2 rounded"
        rows={4}
        name={input.name}
        placeholder={input.placeholder}
        {...register(input.name)}
      ></textarea>
      <p className="text-red-500 text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
