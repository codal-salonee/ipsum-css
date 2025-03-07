import Breadcrumbs from "@/components/home/breadcrumbs";
import Filter from "@/components/home/filter";
import MobileFilter from "@/components/home/filter/mobile-filter";
import HeaderContent from "@/components/home/header-content";
import Pagination from "@/components/home/pagination";
import ProductList from "@/components/home/product-list";
import SortBy from "@/components/home/sort-by";

export default function Home() {
  return (
    <>
      <section>
        <div className="container">
          <Breadcrumbs />
          <HeaderContent />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="my-8 flex items-center justify-between">
            <h2 className="hidden text-lg font-semibold lg:block lg:w-3/12">
              Filters
            </h2>
            <div className="flex w-full items-center justify-between gap-4 lg:w-9/12">
              <p>
                Showing <b>1 - 12</b> of 856
              </p>
              <MobileFilter />
              <div className="hidden items-center gap-4 lg:flex">
                <SortBy />
                <Pagination />
              </div>
            </div>
          </div>
          <div className="lg:flex">
            <Filter />
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
}
