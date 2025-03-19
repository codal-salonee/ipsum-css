import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortBy() {
  return (
    <div className="my-8 flex items-center justify-between gap-4 lg:my-0">
      <h2 className="text-base font-semibold">Sort By:</h2>
      <Select>
        <SelectTrigger className="h-12 w-[180px] py-4">
          <SelectValue placeholder="Price: Hight to low" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Price: Hight to low</SelectItem>
          <SelectItem value="2">Price: Hight to low</SelectItem>
          <SelectItem value="3">Name: A to Z</SelectItem>
          <SelectItem value="4">Name: A to Z</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
