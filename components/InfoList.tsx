import infoList from "@/json/infolist.json";

export default function InfoList() {
  return (
    <ul className="border p-8 my-4 rounded-xl flex justify-between shadow">
      {infoList.map((item) => (
        <li key={item.title} className="flex">
          <div className="icon"></div>
          <div className="text">
            <h3 className="text-lg">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
