import { useState } from "react";

import Caret from "@/public/icon/Caret";
import Button from "@/components/Button";

interface Props {
  content: Array<{ name: string; value: string }>;
}
export default function Dropdown({ content }: Props) {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const [dropdown, setDropdown] = useState<{
    name: string;
    value: string;
  } | null>(null);

  function showDropdownHandler() {
    return setDropdownStatus(!dropdownStatus);
  }

  function dropdownHandler(item: { name: string; value: string }) {
    return setDropdown(item);
  }

  return (
    <div className="relative">
      <Button
        text={content[0].name}
        className="h-10  px-2 mx-2 flex items-center"
        onClick={showDropdownHandler}
        icon={<Caret className="w-4 mr-1" />}
      />
      {dropdownStatus && (
        <ul className="dropdown-list bg-white absolute z-20 top-10 text-black py-1 rounded-md shadow">
          {content.map((item) => (
            <li
              key={item.name}
              className="border-b px-3 py-1 hover:bg-gray-300 hover:text-white"
            >
              <button onClick={() => dropdownHandler(item)}>{item.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
