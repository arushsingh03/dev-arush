import React from "react";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/app/components/bento-grid";
import {
  GlobeIcon,
  MobileIcon,
  DesktopIcon,
  GearIcon,
} from "@radix-ui/react-icons";

const About = () => {
  const skills = [
    {
      Icon: GlobeIcon,
      name: "FULLSTACK WEB DEV",
      description:
        "Blending full-stack expertise with the limitless power of AI, I build web and mobile solutions that are more than just functional they're intelligent, scalable, and future-ready. From intuitive user experiences to robust backend systems, my work bridges technology and creativity to deliver applications that not only perform seamlessly today but also evolve with tomorrow's needs.",
      href: "#",
      cta: "View Projects",
      background: (
        <div className="mx-auto mt-5 flex items-center justify-center">
          <Image
            src="/web.png"
            alt="Fullstack"
            width={320}
            height={200}
            className="object-fill rounded-xl"
          />
        </div>
      ),
      className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
      Icon: DesktopIcon,
      name: "UI/UX",
      description:
        "Before coding intelligent apps, I shaped meaningful experiences in Figma where every pixel had a purpose and every design told a story.",
      href: "#",
      cta: "View Designs",
      background: <></>,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: MobileIcon,
      name: "MOBILE APP DEV",
      description:
        "Building beyond screens, I design and develop mobile applications that are not only fast and intuitive, but also architected to scale seamlessly as user needs grow. My goal is to create experiences that feel natural, reliable, and engaging bringing digital solutions closer to users everywhere, transforming the way they connect, interact, and live in a mobile-first world.",
      href: "#",
      cta: "View Apps",
      background: (
        <div className="mx-auto mt-5 flex items-center justify-center">
          <Image
            src="/uiux.png"
            alt="Mobile"
            width={320}
            height={180}
            className="object-fill rounded-xl"
          />
        </div>
      ),
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: GearIcon,
      name: "AI & AUTOMATION",
      description:
        "From AI intelligence to no-code automation, I craft scalable n8n workflows that make systems faster, smarter, and more connected",
      href: "#",
      cta: "Learn More",
      background: <></>,
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto relative">
        <div className="block lg:hidden text-center mb-8">
          <h1 className="text-white text-3xl font-bold tracking-wider font-exulta">
            I LIKE TO <br /> <span className="text-blue-500">WORK ON</span>
          </h1>
        </div>

        <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3 relative">
          <div className="absolute inset-0 hidden lg:flex items-center justify-center z-30 pointer-events-none">
            <div className="transform -rotate-90 whitespace-nowrap">
              <h1 className="text-white text-8xl font-bold tracking-wider font-exulta">
                I LIKE TO <br /> <span className="text-blue-500">WORK ON</span>
              </h1>
            </div>
          </div>

          {skills.map((skill) => (
            <BentoCard key={skill.name} {...skill} />
          ))}
        </BentoGrid>

        <div className="text-center mt-16">
          <h3 className="text-white text-lg font-medium tracking-wider font-exulta">
            HOW I BUILD
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
