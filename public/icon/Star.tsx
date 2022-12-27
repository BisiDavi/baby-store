interface Props {
  fill: string;
}

export default function Star({ fill }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 19"
      fill={fill}
      className="mr-1 border-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 15.235L4.179 18L5.388 11.88L1 7.392L7.179 6.621L10 1L12.821 6.621L19 7.392L14.612 11.88L15.821 18L10 15.235Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
