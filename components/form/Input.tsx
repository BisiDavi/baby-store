interface Props {
  input: {
    label: string;
    name: string;
  };
}
export default function Input({ input }: Props) {
  return (
    <div className="form-input">
      <label htmlFor={input.name}>{input.label}</label>
      <input className="" name={input.name} />
    </div>
  );
}
