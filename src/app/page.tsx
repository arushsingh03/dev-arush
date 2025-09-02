import Nav from "./components/Nav";
import Work from "./components/Work";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 z-50 bg-black text-white w-full">
        <Nav />
      </div>

      <main className="relative bg-black text-white overflow-hidden">
        <div
          className="absolute inset-0 z-20 h-[110svh]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)",
          }}
        >
          <Spline
            scene="https://prod.spline.design/MVnxpGQCnpeHQJw3/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <section className="relative z-10 h-[100svh] flex sm:items-center items-start pt-20 sm:pt-0">
          <div className="px-6 sm:px-12 lg:px-24">
            <p className="text-xs sm:text-sm tracking-[0.3em] text-white/80 mb-4 sm:mb-6 font-semibold">
              I build scalable web & mobile apps.
            </p>
            <h1 className="text-[20vw] sm:text-[18vw] leading-none font-grovant select-none z-10 relative">
              ARUSH
            </h1>
          </div>
        </section>
        <div className="relative z-20 -mt-24 h-40 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/80 to-black/100" />
        </div>

        <Skills />

        <section
          id="about"
          className="relative z-10 px-6 sm:px-12 lg:px-24 py-24"
        >
          <About />
        </section>

        <section
          id="works"
          className="relative z-10 px-6 sm:px-12 lg:px-24 py-24"
        >
          <Work />
        </section>

        <Stats />

        <section
          id="contact"
          className="relative z-10 px-6"
        >
          <Contact />
        </section>
      </main>
    </>
  );
}
