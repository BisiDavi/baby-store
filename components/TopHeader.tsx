import CurrencyDropdown from "@/components/CurrencyDropdown";
import dropdownContent from "@/json/menu.json";
import type { currencyType } from "@/types";

export default function TopHeader() {
  const currencyDropdown: Array<currencyType["currency"]> | any =
    dropdownContent.topHeader.currencyDropdown;
  return (
    <div className="w-full border-b bg-green-800 text-white">
      <div className="container mx-auto h-12 flex items-center justify-between">
        <div className="left">
          <p>Free Shipping for $1000</p>
        </div>
        <div className="right flex items-center justify-between">
          <CurrencyDropdown content={currencyDropdown} />
        </div>
      </div>
    </div>
  );
}
