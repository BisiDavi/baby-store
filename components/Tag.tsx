interface Props {
  className: string;
}

export default function Tag({ className }: Props) {
  return (
    <div
      className={`rounded ${className} text-white h-6 px-4  text-sm flex items-center `}
    >
      Sale
    </div>
  );
}
