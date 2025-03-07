import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination() {
  return (
    <div className="flex items-center text-sm">
      <button className="border-light-gray border border-r-0 px-3 py-3.5">
        <ChevronLeft size={20} />
      </button>
      <span className="border-light-gray border px-3 py-3.5">Page 1 of 12</span>
      <button className="border-light-gray border border-l-0 px-3 py-3.5">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
