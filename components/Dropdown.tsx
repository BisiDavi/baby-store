interface Props {
  content: Array<{ name: string; value: string }>;
}
export default function Dropdown({ content }: Props) {
  return (
    <div>
      <button></button>
      <ul className="dropdown-list">
        {content.map((item) => (
          <li key={item.name}>
            <button onClick={() => null}>{item.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
