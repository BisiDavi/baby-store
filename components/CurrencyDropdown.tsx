import { useState } from "react";

import Caret from "@/public/icon/Caret";
import Button from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { updateCurrency } from "@/redux/currency-slice";
import type { currencyType } from "@/types";

interface Props {
  content: Array<{ name: string; value: string; code: string }>;
}
export default function CurrencyDropdown({ content }: Props) {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  const dispatch = useAppDispatch();
  const { currency } = useAppSelector((state) => state.currency);

  function showDropdownHandler() {
    return setDropdownStatus(!dropdownStatus);
  }

  function dropdownHandler(item: currencyType["currency"]) {
    dispatch(updateCurrency(item));
    setDropdownStatus(false);
  }

  return (
    <div className="relative">
      <Button
        text={currency.name}
        className="h-10  px-2 mx-2 flex items-center"
        onClick={showDropdownHandler}
        icon={<Caret className="w-4 mr-2" />}
      />
      {dropdownStatus && (
        <ul className="dropdown-list w-52 bg-white absolute z-20 top-10 text-black py-1 rounded-md shadow">
          {content.map((item) => (
            <li
              key={item.name}
              className="border-b w-full px-3 py-1 last:border-b-0 hover:bg-gray-300 hover:text-white"
            >
              <button
                className="w-full text-left"
                onClick={() => dropdownHandler(item)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
