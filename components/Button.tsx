interface Props {
  text?: string;
  type?: "submit" | "reset" | "button";
  className: string;
  onClick?: () => void;
  icon?: JSX.Element;
  onMouseMove?: () => void;
  onMouseOut?: () => void;
}
export default function Button(props: Props) {
  const { text, type = "button", className, onClick, icon } = props;
  return (
    <button
      {...props}
      className={className}
      type={type}
      title={text}
      onClick={onClick}
    >
      {text ? text : ""} {icon ? icon : ""}
    </button>
  );
}
