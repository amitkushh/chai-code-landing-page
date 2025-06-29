"use client"
import Image from "next/image";
import ChaicodeIcon from "../../public/chaicode-icon.svg";
import { Button } from "./ui/button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-center items-center">
    <header className="flex justify-between px-4 md:px-5 md:justify-center items-center gap-20 border border-[var(--white)] rounded-full py-3 mt-1 ">
      <div>
        <a href="/">
          <Image src={ChaicodeIcon} width={100} height={100} alt="chaicode" />
        </a>
      </div>
      <nav className="hidden md:flex">
        <ul className="flex justify-center items-center gap-6">
          <Link href="/">
            <li>Cohorts</li>
          </Link>
          <Link href="/">
            {" "}
            <li>Udemy</li>
          </Link>
          <Link href="/">
            <li>Docs</li>
          </Link>
          <Link href="/">
            <li>Reviews</li>
          </Link>
        </ul>
      </nav>
      <div>
        <Button className="bg-[var(--primary-orange)] hover:bg-orange-600 cursor-pointer rounded-full px-6">
          Login
        </Button>
      </div>
    </header>
    </div>
  );
}

export default Navbar;
