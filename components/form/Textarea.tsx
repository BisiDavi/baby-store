import { inputType } from "@/types";

interface Props {
  input: inputType;
}

export default function Textarea({ input }: Props) {
  return (
    <div>
      <label htmlFor={input.name}>{input.label}</label>
      <textarea name={input.name} placeholder={input.placeholder}></textarea>
    </div>
  );
}
