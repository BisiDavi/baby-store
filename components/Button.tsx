interface Props {
  text?: string;
  type?: "submit" | "reset" | "button";
  className?: string;
  onClick?: () => void;
  icon?: JSX.Element;
  onMouseMove?: () => void;
  onMouseOut?: () => void;
  iconPosition?: "left" | "right";
  disabled?: boolean;
}
export default function Button(props: Props) {
  const {
    text,
    type = "button",
    className,
    onClick,
    icon,
    iconPosition = "left",
  } = props;
  return (
    <button
      {...props}
      className={className}
      type={type}
      title={text}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && icon} {text ? text : ""}{" "}
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
