import Image from "next/image";
import { Button } from "../ui/button";

export interface IProduct {
  brand: string;
  name: string;
  sku: string;
  price: number;
}

export default function Product({ brand, name, sku, price }: IProduct) {
  return (
    <div className="border-light-gray flex max-w-sm flex-col border px-4 py-6">
      <div className="relative order-2 aspect-3/2 w-full md:order-1">
        <Image
          src="/product-placeholder.png"
          alt="Products"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>
      <div className="order-1 md:order-2">
        <p className="my-3 text-sm font-semibold">{brand}</p>
        <h2 className="mb-12 line-clamp-1 font-semibold lg:text-2xl lg:font-bold">
          {name}
        </h2>
      </div>
      <div className="order-3">
        <div className="mb-4 items-center text-sm lg:flex lg:text-base">
          <p className="text-gray">{sku}</p>
          <p className="text-green">Multiple Sizes Available</p>
        </div>
        <p className="lg:text-lg">From</p>
        <p className="text-xl font-semibold md:text-3xl">${price}</p>
        <Button className="my-2 w-full">
          View <span className="hidden md:block">Product</span>
        </Button>
      </div>
    </div>
  );
}
