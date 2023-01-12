interface Props {
  input: {
    label: string;
    name: string;
  };
}
export default function Input({ input }: Props) {
  return (
    <div className="form-input flex flex-col my-2 w-full">
      <label htmlFor={input.name}>{input.label}</label>
      <input className="border h-8 rounded w-full" name={input.name} />
    </div>
  );
}
