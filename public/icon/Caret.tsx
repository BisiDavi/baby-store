interface Props {
  className: string;
}

export default function Caret({ className }: Props) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      role="presentation"
      className={className}
      viewBox="0 0 10 6"
      height={10}
      width={50}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
