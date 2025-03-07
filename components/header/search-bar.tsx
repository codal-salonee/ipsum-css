import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <form className="flex h-10 items-center bg-white">
      <Input
        placeholder="Search by keyword, brand or SKU..."
        className="h-full border-0"
      />
      <button className="flex h-full items-center justify-center px-3">
        <Search className="stroke-black" size={18} />
      </button>
    </form>
  );
}
