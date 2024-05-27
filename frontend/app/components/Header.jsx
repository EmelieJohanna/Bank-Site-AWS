"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { MdPersonOutline } from "react-icons/md";
import ThemeBtn from "./ThemeBtn";
import Logo from "./Logo";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close nav if click outside of nav
  useEffect(() => {
    const closeNav = (event) => {
      if (isNavOpen && !event.target.closest(".nav-container")) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", closeNav);
    return () => document.removeEventListener("click", closeNav);
  }, [isNavOpen]);

  return (
    <div className="flex bg-accent justify-between items-center p-4">
      <Logo />
      <nav className="hidden sm:flex p-2 space-x-4 items-center text-slate-100">
        <Link href="/" className="hover:text-accent">
          Home
        </Link>
        <Link href="/login" className="hover:text-accent">
          Login
        </Link>
        <Link href="/signup" className="hover:text-accent">
          Sign up
        </Link>
      </nav>

      <div className="flex items-center space-x-2 sm:hidden z-50">
        {isNavOpen ? (
          ""
        ) : (
          <MdPersonOutline size="28px" className="text-white" />
        )}
        <button onClick={toggleNav} className="nav-container font-extrabold">
          {isNavOpen ? (
            <RxCross1 />
          ) : (
            <MdMenu size="28px" className="text-white" />
          )}
        </button>
      </div>

      <div
        className={`${isNavOpen ? "translate-x-0" : "translate-x-full"}
                    fixed inset-y-0 right-0 w-64 transition-transform bg-white p-5
                    flex flex-col space-y-3 sm:hidden z-40`}
      >
        <Link href="/" className="hover:text-accent" onClick={toggleNav}>
          Home
        </Link>
        <Link href="/login" className="hover:text-accent" onClick={toggleNav}>
          Login
        </Link>
        <Link href="/signup" className="hover:text-accent" onClick={toggleNav}>
          Sign up
        </Link>
        <ThemeBtn />
      </div>
    </div>
  );
}
