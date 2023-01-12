import { inputType } from "@/types";

interface Props {
  input: inputType;
}

export default function Textarea({ input }: Props) {
  return (
    <div className="form-textarea flex flex-col">
      <label htmlFor={input.name}>{input.label}</label>
      <textarea className="border p-2 rounded" rows={4} name={input.name} placeholder={input.placeholder}></textarea>
    </div>
  );
}
