import infoList from "@/json/infolist.json";

export default function InfoList() {
  return (
    <ul className="border p-8 my-4 rounded-xl flex justify-between shadow">
      {infoList.map((item) => (
        <li key={item.title} className="flex">
          <div className="icon"></div>
          <div className="text">
            <h3 className="text-lg my-2">{item.title}</h3>
            <p className="text-gray-500">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
