import { SiAndroid, SiFigma, SiJavascript, SiJira, SiN8N, SiNextdotjs, SiPostman, SiReact,  } from "react-icons/si";

export default function Skills() {
  return (
    <section
      aria-label="Skills"
      className="relative z-10 px-6 sm:px-12 lg:px-24 py-24 -mt-10"
    >
      <div
        className="pointer-events-none absolute -top-20 left-0 right-0 h-60"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 gap-y-16 items-center justify-items-center">
          <SiN8N className="text-white/50 size-15" />
          <SiReact className="text-white/50 size-15" />
          <SiFigma className="text-white/50 size-15" />
          <SiJira className="text-white/50 size-15" />
          <SiPostman className="text-white/50 size-15" />
          <SiNextdotjs className="text-white/50 size-15" />
          <SiAndroid className="text-white/50 size-15" />
          <SiJavascript className="text-white/50 size-15" />
        </div>
      </div>
    </section>
  );
}
