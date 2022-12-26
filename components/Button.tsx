interface Props {
  text?: string;
  type?: "submit" | "reset" | "button";
  className: string;
  onClick?: () => void;
  icon?: JSX.Element;
}
export default function Button({
  text,
  type = "button",
  className,
  onClick,
  icon,
}: Props) {
  return (
    <button className={className} type={type} title={text} onClick={onClick}>
      {text ? text : ""} {icon ? icon : ""}
    </button>
  );
}
