interface Props {
  color?: string;
}

export default function Tag({ color = "" }: Props) {
  return <div className={`rounded ${color}`}>Sale</div>;
}
