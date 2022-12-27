import Image from "next/image";

import infoList from "@/json/infolist.json";

export default function InfoList() {
  return (
    <ul className="container flex-col lg:flex-row lg:mx-4 space-y-4 lg:space-y-0 lg:mx-auto border p-8 my-6 lg;my-8 rounded-xl flex justify-between shadow">
      {infoList.map((item) => (
        <li key={item.title} className="flex">
          <div className="icon border rounded-full flex items-center p-4 mx-4 hover:shadow">
            <Image src={item.icon} height={50} width={50} alt={item.title} />
          </div>
          <div className="text">
            <h3 className="text-lg my-2">{item.title}</h3>
            <p className="text-gray-500">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
