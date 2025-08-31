"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./timeline";
import plazit1 from "../../../public/projects/planzit1.png";
import plazit2 from "../../../public/projects/planzit2.png";
import plazit3 from "../../../public/projects/planzit3.png";
import plazit4 from "../../../public/projects/planzit4.png";

const Work = () => {
  const data = [
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
              src={plazit1}
              alt="Productivity & Time Management Tool"
              width={500}
              height={300}
              className="rounded-xl object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={plazit2}
              alt="AI Creative Tool"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={plazit3}
              alt="Collaborative Productivity Tool"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src={plazit4}
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
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Task+Management"
              alt="Task management system"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Weather+Analytics"
              alt="Weather analytics dashboard"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=API+Dashboard"
              alt="API management dashboard"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Social+Platform"
              alt="Social media platform"
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
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Portfolio+Site"
              alt="Portfolio website"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Recipe+App"
              alt="Recipe sharing app"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Chat+Platform"
              alt="Chat platform"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Learning+Platform"
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
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=First+React+App"
              alt="First React application"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=CSS+Animations"
              alt="CSS animations project"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Todo+App"
              alt="Todo application"
              width={500}
              height={300}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://via.placeholder.com/500x300/1f2937/ffffff?text=Calculator+App"
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

  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
};

export default Work;
