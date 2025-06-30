"use client";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-center items-center">
      <header className="flex justify-center px-4 md:px-5 items-center gap-20 border border-[#fefefe] rounded-full py-3 mt-1">
        <div>
          <Link href="/">
            <img
              src="/chaicode-icon.svg"
              width={100}
              height={100}
              alt="chaicode"
            />
          </Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex justify-center items-center gap-6">
            <li className="group relative">
              <Link href="#cohort" className="transition-colors">
                Cohorts{" "}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>

            <li className="group relative">
              <Link href="#udemy" className="transition-colors">
                Udemy{" "}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>

            <li className="group relative">
              <Link
                href="https://docs.chaicode.com/"
                className="transition-colors"
              >
                Docs{" "}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>

            <li className="group relative">
              <Link href="/" className="transition-colors">
                Reviews{" "}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button className="bg-[#f56e13] hover:bg-orange-600 cursor-pointer rounded-full px-6">
            Login
          </Button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
