import Dropdown from "./Dropdown";
import dropdownContent from "@/json/menu.json";

export default function TopHeader() {
  return (
    <div>
      <div className="left">
        <p>Free Shipping Over $120</p>
      </div>
      <div className="right">
        <Dropdown content={dropdownContent.topHeader.currencyDropdown} />
        <Dropdown content={dropdownContent.topHeader.languageDropdown} />
      </div>
    </div>
  );
}
