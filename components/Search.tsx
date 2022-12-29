import Button from "@/components/Button";
import SearchIcon from "@/public/icon/SearchIcon";

export default function Search() {
  return (
    <form className="flex w-1/2">
      <input
        placeholder="Search"
        className="bg-white px-4 border w-full py-1 rounded-l-lg"
      />
      <Button
        className="text-white bg-blue-500 hover:opacity-50 px-4 py-1.5 rounded-r-lg"
        icon={<SearchIcon />}
        text=""
      /> </form>
  );
}
