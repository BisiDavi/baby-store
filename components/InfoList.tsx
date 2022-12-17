import infoList from "@/json/infolist.json";

export default function InfoList() {
  return (
    <ul>
      {infoList.map((item) => (
        <li key={item.title}>
          <div className="icon"></div>
          <div className="text">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
