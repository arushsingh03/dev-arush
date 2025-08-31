import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/app/components/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      "bg-black border border-white/10 shadow-[0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>

    <div className="relative z-20 flex flex-col gap-2 p-6 pb-20 transition-all duration-300 group-hover:-translate-y-6">
      <Icon className="h-12 w-12 origin-left text-blue-500 transition-all duration-700 ease-in-out group-hover:scale-90" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-neutral-300">{description}</p>
    </div>

    <div className="absolute bottom-6 left-5 right-0 z-30 flex translate-y-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button
        variant="default"
        asChild
        size="sm"
        className="pointer-events-auto text-black bg-gradient-to-r from-white to-blue-500"
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
