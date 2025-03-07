"use client";

import { ChevronDown, Menu, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./data";
import SearchBar from "./search-bar";

export default function Header() {
  const [currentNav, setCurrentNav] = useState<number>(0);

  return (
    <>
      <header className="bg-primary">
        <div className="container">
          <div className="flex items-center justify-between py-2 text-white lg:py-0">
            <Menu className="block lg:hidden" />
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-extrabold">
                IPSUM
              </Link>
              <nav className="hidden lg:block">
                <ul className="mx-4 flex">
                  {navItems.map(({ title, href }, index) => (
                    <li
                      key={title}
                      className={`px-4 py-4 ${
                        currentNav === index && "bg-primary-light"
                      }`}
                    >
                      <button
                        onClick={() => setCurrentNav(index)}
                        className="m-0"
                      >
                        <Link
                          href={href}
                          className="flex items-center text-sm font-semibold"
                        >
                          {title}
                          <ChevronDown className="ml-1.5 w-4 stroke-1" />
                        </Link>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-14">
              <div className="hidden lg:block">
                <SearchBar />
              </div>
              <div className="flex items-center gap-4">
                <button>
                  <User size={20} strokeWidth={3} />
                </button>
                <button>
                  <ShoppingCart size={20} strokeWidth={3} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-primary-light block px-4 py-1 lg:hidden">
        <SearchBar />
      </div>
      <div className="bg-primary-light hidden py-4 text-sm text-white lg:block">
        <ul className="container flex items-center">
          {navItems[currentNav].subMenu.map((subTitle) => (
            <li className="pr-8" key={subTitle}>
              {subTitle}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
