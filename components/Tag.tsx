interface Props {
  className: string;
  text: string;
}

export default function Tag({ className, text }: Props) {
  return (
    <div
      className={`rounded-full ${className} text-white h-6 px-2  text-sm flex items-center `}
    >
      {text}
    </div>
  );
}
