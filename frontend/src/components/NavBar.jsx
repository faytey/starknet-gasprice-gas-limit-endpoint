"use client";
import React, { useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwitcher";

function NavBar() {
  const pathname = usePathname();
  
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <header>
      <nav className="flex justify-around items-center h-[86px] dark:bg-[#0D0D0D] bg-[#FFFFFF]">
        <h1 className="text-[20px] font-semibold leading-[24.2px] text-[#0C0D4F] dark:text-[#B0B1F3]">
          GasWatch
        </h1>
        <ul className="flex items-center gap-[90px] text-[16px] dark:text-white">
          <Link className={pathname === "/" ? "font-semibold" : ""} href="/">
            Home
          </Link>
          <Link
            href="/About"
            className={pathname === "/About" ? "font-semibold" : ""}
          >
            About
          </Link>
        </ul>
        <ThemeSwitch />
      </nav>
      <nav className="bg-gray-50 fixed w-full top-0 md:hidden z-[999] font-Montserrat">
        <div className="relative bg-[#FFFFFF] dark:bg-[#0D0D0D] shadow-md">
          <div className="px-6 md:px-12 container mx-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex justify-center bg-transparent pt-2 z-[1000]">
                <a href="/">
                  <div className="flex items-center">
                    <h1 className="text-[20px] font-semibold leading-[24.2px] text-[#0C0D4F] dark:text-[#B0B1F3]">
                      GasWatch
                    </h1>
                  </div>
                </a>
              </div>
              <div className="flex items-center justify-end">
                <input
                  type="checkbox"
                  name="hamburger"
                  id="hamburger"
                  className="peer"
                  hidden
                  checked={open}
                  onChange={toggleNavbar}
                />
                <label
                  htmlFor="hamburger"
                  className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer xl:hidden"
                >
                  <div
                    aria-hidden="true"
                    className="m-auto h-0.5 w-6 rounded bg-[black] dark:bg-white transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-[black] dark:bg-white transition duration-300"
                  ></div>
                </label>
                <div
                  className={`${
                    open
                      ? "peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] dark:bg-[#0D0D0D] bg-[#FFFFFF] z-[999] shadow-xl transition duration-300 lg:w-auto lg:static xl:shadow-none xl:translate-x-0"
                      : "fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-[#FFFFFF] dark:bg-[#0D0D0D] z-[999] shadow-xl transition duration-300 lg:w-auto lg:static xl:shadow-none xl:translate-x-0"
                  }`}
                >
                  <div className="flex flex-col h-full justify-between xl:items-center dark:text-white xl:flex-row">
                    <ul className="px-6 pt-32 space-y-8 md:px-12 xl:space-y-0 xl:flex xl:space-x-12 xl:pt-0">
                      <li>
                        <Link
                          onClick={closeNavbar}
                          className={
                            pathname === "/"
                              ? "font-semibold text-[#B0B1F3]"
                              : ""
                          }
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={closeNavbar}
                          className={
                            pathname === "/About"
                              ? "font-semibold text-[#B0B1F3]"
                              : ""
                          }
                          href="/About"
                        >
                          About
                        </Link>
                      </li>
                    </ul>
                    <div className="py-8 px-6 md:px-12 md:py-16 lg:py-0 lg:pr-0 lg:pl-6">
                      <ThemeSwitch />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
