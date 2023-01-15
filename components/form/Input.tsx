import { useFormContext } from "react-hook-form";
interface Props {
  input: {
    label: string;
    name: string;
  };
}
export default function Input({ input }: Props) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();
  return (
    <div className="form-input flex flex-col my-2 w-full">
      <label htmlFor={input.name}>{input.label}</label>
      <input
        className="border h-8 rounded w-full"
        name={input.name}
        {...register(input.name)}
      />
      <p className="text-red-500 text-xs">{errors[input.name]?.message}</p>
    </div>
  );
}
