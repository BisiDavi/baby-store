import Dropdown from "@/components/Dropdown";
import dropdownContent from "@/json/menu.json";

export default function TopHeader() {
  return (
    <div className="w-full border-b bg-green-800 text-white">
      <div className="container mx-auto h-12 flex items-center justify-between">
        <div className="left">
          <p>Free Shipping</p>
        </div>
        <div className="right flex items-center justify-between">
          <Dropdown content={dropdownContent.topHeader.currencyDropdown} />
        </div>
      </div>
    </div>
  );
}
