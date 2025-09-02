import Link from "next/link";
import { SiGithub, SiInstagram, SiLinkedin, SiX } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 lg:px-24 py-10 border-t border-white/10 text-white/80 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold tracking-wide mb-4">ARUSH.</h3>
          <div className="flex items-center gap-4 mb-4">
            <Link href="https://www.linkedin.com/in/arushsingh03/">
              <SiLinkedin className="size-5 text-white hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="https://github.com/arushsingh03">
              <SiGithub className="size-5 text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/arushsingh03/">
              <SiInstagram className="size-5 text-white hover:text-pink-400 transition-colors" />
            </Link>
            <Link href="https://x.com/arush_singh03">
              <SiX className="size-5 text-white hover:text-blue-300 transition-colors" />
            </Link>
          </div>
          <p>
            Making the web less boring, <br /> One project at a time.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="uppercase text-xs tracking-[0.3em] mb-4 text-white/60">
            Quick Links
          </h4>
          <ul className="space-y-3">
            <li>
              <Link className="hover:text-white transition-colors" href="/">
                Home
              </Link>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="/works">
                Works
              </a>
            </li>
            <li>
              <a className="hover:text-white transition-colors" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="uppercase text-xs tracking-[0.3em] mb-4 text-white/60">
            Contact Me
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="size-4 text-white/60" />
              <a
                href="mailto:your.email@example.com"
                className="hover:text-white transition-colors text-sm"
              >
                arushsingh1803@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="size-4 text-white/60" />
              <a
                href="tel:+91XXXXXXXXXX"
                className="hover:text-white transition-colors text-sm"
              >
                +91 9369326968
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="size-4 text-white/60 mt-0.5" />
              <address className="text-sm not-italic leading-relaxed">
                House No 204,
                <br />
                Kanpur, Uttar Pradesh
                <br />
                India
              </address>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-10 border-white/10" />
      <p className="text-sm flex items-center justify-center">
        © 2025 ARUSH. All Rights Reserved.
      </p>
    </footer>
  );
}
