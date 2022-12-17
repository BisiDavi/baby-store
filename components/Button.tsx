interface Props {
  text: string;
  type: "submit" | "reset" | "button";
  className: string;
}
export default function Button({ text, type, className }: Props) {
  return (
    <button className={className} type={type} title={text}>
      {text}
    </button>
  );
}
