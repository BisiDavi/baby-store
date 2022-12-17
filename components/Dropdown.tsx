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
    <div>
      <Button
        text={content[0].name}
        className="h-10 border px-2 mx-2"
        onClick={showDropdownHandler}
        icon={<Caret />}
      />
      {dropdownStatus && (
        <ul className="dropdown-list">
          {content.map((item) => (
            <li key={item.name}>
              <button onClick={() => dropdownHandler(item)}>{item.name}</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
