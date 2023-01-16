import CurrencyDropdown from "@/components/CurrencyDropdown";
import dropdownContent from "@/json/menu.json";
import type { currencyType } from "@/types";

export default function TopHeader() {
  const currencyDropdown: Array<currencyType["currency"]> | any =
    dropdownContent.topHeader.currencyDropdown;
  return (
    <div className="w-full border-b bg-green-800 text-white">
      <div className="container px-4 lg:px-0 mx-auto h-12 flex items-center justify-between">
        <p className="text-sm lg:text-base font-bold">Free Shipping for $1000</p>
        <CurrencyDropdown content={currencyDropdown} />
      </div>
    </div>
  );
}
