import Pagination from "../pagination";
import Product from "../product";
import { list } from "./data";

export default function ProductList() {
  return (
    <div className="lg:w-9/12">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        {list.map(({ id, brand, name, sku, price }) => (
          <Product key={id} brand={brand} name={name} sku={sku} price={price} />
        ))}
      </div>
      <div className="my-4 flex justify-center">
        <Pagination />
      </div>
    </div>
  );
}
