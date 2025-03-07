import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FilterIcon } from "lucide-react";
import Filter from ".";
import SortBy from "../sort-by";

export default function MobileFilter() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <p className="flex items-center lg:hidden">
          <FilterIcon size={16} />
          <span className="ml-3 text-sm font-semibold uppercase">
            Filter (0)
          </span>
        </p>
      </SheetTrigger>
      <SheetContent side="left" className="w-full">
        <SheetHeader>
          <SheetTitle className="font-semibold uppercase">
            Sort & Filters
          </SheetTitle>
          <SheetDescription className="sr-only">
            Sorting and Filtering options
          </SheetDescription>
          <SortBy />
          <Filter mobile />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
