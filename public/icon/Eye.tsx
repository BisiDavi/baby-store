interface Props {
  fill: string;
}
export default function Eye({ fill }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="eyeIconTitle"
      stroke={fill}
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      fill="none"
      color="white"
    >
      <path d="M22 12C22 12 19 18 12 18C5 18 2 12 2 12C2 12 5 6 12 6C19 6 22 12 22 12Z" />{" "}
      <circle cx="12" cy="12" r="3" />{" "}
    </svg>
  );
}
