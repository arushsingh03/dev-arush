import React from "react";
import Image from "next/image";
import Nav from "@/app/components/Nav";
import Contact from "@/app/components/Contact";
import Spline from "@splinetool/react-spline/next";
import { CountingStats } from "@/app/components/Stats";
import {
  AnimatedCard,
  ClaudeLogo,
  CopilotLogo,
  GeminiLogo,
  MetaIconOutline,
  OpenAILogo,
} from "../components/AnimatedCard";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Nav />

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 mt-4 sm:mt-6 md:mt-8 lg:mt-12 xl:mt-22">
            <div className="flex justify-center lg:justify-end w-full lg:order-2">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 w-48 h-56 sm:w-56 sm:h-64 md:w-72 md:h-80 lg:w-96 lg:h-104 xl:w-120 xl:h-130 flex items-center justify-center shadow-lg">
                <Image
                  src="/arushavatar.png"
                  alt="Arush Avatar"
                  width={400}
                  height={400}
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>

            <div className="text-center lg:text-left w-full lg:order-1">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-medium tracking-wider mb-2 sm:mb-3 md:mb-4">
                GET TO KNOW
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-wider leading-tight font-exulta">
                ABOUT
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                I specialize in creating visually captivating designs that
                transform your ideas into stunning visuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-8 sm:mb-12 md:mb-16">
            <div className="text-center lg:text-left w-full">
              <h2 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white font-medium tracking-wider mb-2 sm:mb-3 md:mb-4">
                Behind the Code
              </h2>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold text-white mb-4 sm:mb-6 md:mb-8 tracking-tight leading-tight">
                Code. <br />
                <span className="text-blue-500">Create.</span> <br /> Connect.
              </h1>
            </div>
            <div className="text-center lg:text-right w-full lg:pt-4 xl:pt-8 2xl:pt-16">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 lg:ml-auto">
                I&apos;m Arush, a developer and designer who loves speed and
                creativity in every form from riding bikes and watching F1 to
                gaming. I enjoy building UIs and coding projects that feel just
                as smooth and exciting as the experiences I enjoy outside of
                tech.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[rgba(255,255,255,0.10)]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  Who I am
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  I&apos;m Arush, a full-stack developer who loves building
                  things on the internet. I focus on creating digital
                  experiences that are not only functional but also a joy to
                  use. My passion lies in building web and mobile apps and
                  experimenting with AI to make life easier and cooler.
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[rgba(255,255,255,0.10)]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  What I do
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  For me, coding is about creating little digital worlds where
                  design meets logic. I have a soft spot for clean UIs and
                  smooth user experiences. I also have a tiny obsession with
                  automating anything that looks repetitive. I love working on
                  projects that solve problems and bring a smile to
                  people&apos;s faces.
                </p>
              </div>

              <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-[rgba(255,255,255,0.10)]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                  What I believe in
                </h3>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  I believe that technology should serve humanity, not the other
                  way around. Every line of code should have a purpose, every
                  design should tell a story, and every solution should make
                  someone&apos;s life better. I&apos;m committed to building
                  with empathy, creativity, and a relentless focus on quality.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full">
              <AnimatedCard
                title="AI Tools"
                description="The AI resources that power my coding and creativity."
                icons={[
                  {
                    icon: <ClaudeLogo className="h-4 w-4" />,
                    size: "sm",
                  },
                  {
                    icon: <CopilotLogo className="h-6 w-6 dark:text-white" />,
                    size: "md",
                  },
                  {
                    icon: <OpenAILogo className="h-8 w-8 dark:text-white" />,
                    size: "lg",
                  },
                  {
                    icon: <MetaIconOutline className="h-6 w-6" />,
                    size: "md",
                  },
                  {
                    icon: <GeminiLogo className="h-4 w-4" />,
                    size: "sm",
                  },
                ]}
              />

              <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8">
                <div className="text-center">
                  <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-70 mb-3 sm:mb-4 md:mb-6 rounded-lg sm:rounded-xl overflow-hidden">
                    <Spline
                      scene="https://prod.spline.design/yBVa-QPrrN9QgiId/scene.splinecode"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                  <p className="text-white text-xs sm:text-sm mr-13">
                    Hello world I&apos;m Arush.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 sm:py-16 lg:py-20">
        <CountingStats />
      </div>

      <Contact />
    </main>
  );
}
