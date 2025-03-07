"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  Plus,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "./data";
import Subscribe from "./subscribe";

export default function Footer() {
  const [currentNav, setCurrentNav] = useState<null | number>(null);

  return (
    <footer className="bg-primary text-white">
      <div className="container">
        <Subscribe />
        <hr className="bg-white" />
        <div className="gap-20 py-14 md:flex">
          <div className="mb-8 md:mt-0">
            <Link href="/" className="text-2xl font-extrabold">
              IPSUM
            </Link>
            <p className="mt-4">
              Delivering unique and complete solutions for your business.
            </p>
          </div>
          <div className="w-full gap-14 md:grid md:grid-cols-4">
            {navItems.map(({ id, title, subItems }) => (
              <ul key={id}>
                <div
                  className="my-5 flex items-center justify-between md:my-0"
                  onClick={() =>
                    setCurrentNav((prevId) => (prevId === id ? null : id))
                  }
                >
                  <h3 className="mb-2 text-xl font-bold md:text-sm">{title}</h3>
                  <Plus size={20} className="block md:hidden" />
                </div>
                {subItems.map((item) => (
                  <li
                    key={item}
                    className={`mb-2 ${currentNav === id ? "block md:hidden" : "hidden md:block"}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <hr className="bg-white" />
        <div className="text-lighter-gray items-center px-4 py-8 text-center md:flex md:justify-between md:px-0">
          <p>© 2024 Ipsum Industries. All rights reserved.</p>
          <ul className="mt-4 flex justify-center gap-5 md:mt-2">
            <li>
              <Link href="/">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Youtube />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Linkedin />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Instagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
