import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus } from "lucide-react";
import Badge from "./badge";
import { filterData } from "./data";

export default function Filter({ mobile }: { mobile?: boolean }) {
  return (
    <aside className={`${!mobile && "hidden"} w-full lg:block lg:w-3/12`}>
      <div className="mr-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Active Filters</h4>
          <button className="text-red text-sm">Clear All</button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge title="Lube-Tech" />
          <Badge title="Hydraulic Fluid" />
          <Badge title="16 Gal Keg" />
        </div>
        <Accordion
          type="multiple"
          className="mt-4"
          defaultValue={["Brand", "Viscosity", "Size"]}
        >
          {filterData.map(({ title, subItems }) => (
            <AccordionItem key={title} value={title}>
              <AccordionTrigger asChild>
                <p className="semi-bold">
                  {title}
                  <Minus className="text-green size-4" />
                </p>
              </AccordionTrigger>
              <AccordionContent>
                <ul>
                  {subItems.map((filterName) => (
                    <li
                      key={filterName}
                      className="border-light-gray border-t p-3"
                    >
                      {filterName}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}
