import logo from "@/assets/logosaas.png"
import {Facebook,Instagram,Linkedin,TwitterIcon,Youtube} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#bcbcbc] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative  before:content-[''] before:h-full before:w-full before:top-2 before:bottom-0 before:blur before:bg-gradient-to-tr from-blue-900 to-sky-300 before:absolute   ">
          <Image alt="Saas logo" className="relative" src={logo} width={40} />
        </div>
        <nav className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Features</Link>
          <Link href={"#"}>Help</Link>
          <Link href={"#"}>Reviews</Link>
        </nav>
        <div className="flex  justify-center gap-6 mt-6">
          <TwitterIcon />
          <Instagram />
          <Facebook />
          <Linkedin />
          <Youtube />
        </div>
        <p className="mt-6">&copy; 2025 Company , Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
