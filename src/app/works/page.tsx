"use client";
import React from "react";
import Image from "next/image";

import {
  GlobeIcon,
  MobileIcon,
  DesktopIcon,
  GearIcon,
} from "@radix-ui/react-icons";
import Nav from "../components/Nav";
import { Timeline } from "../components/timeline";
import { BentoCard, BentoGrid } from "../components/bento-grid";

export default function WorksPage() {
   const timelineData = [
      {
        title: "Web App's",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Built and launched multiple full-stack applications including an
              e-commerce platform and AI-powered chat application with modern tech
              stack
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/projects/planzit1.png"
                alt="Productivity & Time Management Tool"
                width={500}
                height={300}
                className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/projects/planzit2.png"
                alt="AI Creative Tool"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/projects/planzit3.png"
                alt="Collaborative Productivity Tool"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/projects/planzit4.png"
                alt="Mobile application"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Mobile App's",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Focused on building data-driven applications and improving my
              backend development skills with various databases and APIs
            </p>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              During this period, I worked extensively with React ecosystem,
              Node.js, and modern deployment strategies. Here are some key
              projects from this year.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80"
                alt="Mobile app UI 1"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80"
                alt="Mobile app UI 2"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Mobile app UI 3"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=880?auto=format&fit=crop&w=1200&q=80"
                alt="Mobile app UI 4"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "AI Tool's",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Launched several key projects this year including personal portfolio
              and learning management system
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                Personal Portfolio with Next.js
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                Recipe Sharing Mobile App
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                Real-time Chat Application
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                E-learning Platform
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                Expense Tracking Dashboard
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1746286721981-f4bb5be91cf5?q=80&w=1170?auto=format&fit=crop&w=1200&q=80"
                alt="Portfolio website"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1712002641387-be6d0b888a93?q=80&w=1170?auto=format&fit=crop&w=1200&q=80"
                alt="Recipe sharing app"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1712002641157-02b4f7a030aa?q=80&w=1170?auto=format&fit=crop&w=1200&q=80"
                alt="Chat platform"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1737641624486-7846df8528dc?q=80&w=687?auto=format&fit=crop&w=1200&q=80"
                alt="Learning management system"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "Workflow",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-4">
              Started my development journey with foundational projects and
              learning core technologies
            </p>
            <div className="mb-8">
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                First React application
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                JavaScript fundamentals mastered
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                CSS animations and responsive design
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                Git version control workflow
              </div>
              <div className="flex gap-2 items-center text-neutral-300 text-xs md:text-sm">
                First deployed project to production
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1171?auto=format&fit=crop&w=1200&q=80"
                alt="First React application"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://images.unsplash.com/photo-1661882217431-b64b303fb1d0?q=80&w=1332?auto=format&fit=crop&w=1200&q=80"
                alt="CSS animations project"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://plus.unsplash.com/premium_photo-1682144827510-bbe3cd636253?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Todo application"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Calculator application"
                width={500}
                height={300}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
    ];

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
    <main className="min-h-screen bg-black text-white relative">
      <Nav />

      <div className="px-6 sm:px-12 lg:px-24 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 font-exulta tracking-wider mt-12">
          Works
        </h1>
        <p className="max-w-2xl text-balance text-white/80 text-lg">
          A comprehensive showcase of my projects, from web applications to
          mobile solutions, demonstrating my journey and expertise in modern
          development.
        </p>
      </div>

      <section className="w-full">
        <Timeline data={timelineData} />
      </section>

      <section className="min-h-screen bg-black text-white p-8 mt-20">
        <div className="max-w-6xl mx-auto relative">
          <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="transform -rotate-90 whitespace-nowrap">
                <h1 className="text-white text-4xl lg:text-8xl font-bold tracking-wider font-exulta">
                  I LIKE TO <br />{" "}
                  <span className="text-blue-500">WORK ON</span>
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
      </section>
    </main>
  );
}
