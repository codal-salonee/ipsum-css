import { X } from "lucide-react";

export default function Badge({ title }: { title: string }) {
  return (
    <span className="bg-light-gray mt-2 inline-flex items-center gap-1 px-2 py-2 text-sm lg:text-base">
      {title}
      <X size={18} />
    </span>
  );
}
