import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm md:text-base tracking-[0.2em] uppercase font-medium">
          CONTACT ME
        </p>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 tracking-tight leading-none">
          GET IN
        </h1>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 leading-none relative font-exulta">
          TOUCH
          <Link href="/contact">
            <span className="absolute top-0 right-[-20]  translate-x-8 -translate-y-4 text-white text-4xl md:text-6xl">
              <CircleArrowOutUpRight className="text-blue-500 size-10 " />
            </span>
          </Link>
        </h1>
      </div>

      <div className="flex items-center">
        <Link href="/contact">
          <button className="group bg-white text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-gradient-to-r from-white to-blue-500 transition-colors duration-300 flex items-center gap-3 cursor-pointer">
            CONTACT
            <div className="w-15 h-15 bg-black rounded-full flex items-center justify-center">
              <CircleArrowOutUpRight className="size-10 text-blue-500 transition-colors duration-300 group-hover:text-white" />
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
