interface Props {
  text: string;
  type?: "submit" | "reset" | "button";
  className: string;
  onClick?: () => void;
}
export default function Button({
  text,
  type = "button",
  className,
  onClick,
}: Props) {
  return (
    <button className={className} type={type} title={text} onClick={onClick}>
      {text}
    </button>
  );
}
