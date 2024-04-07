"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../button";
import { useAnimate, motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";

export const Navbar = () => {
  const pathname = usePathname();
  const [refLogo, animate] = useAnimate();
  const [refProfile] = useAnimate();
  const [refNav] = useAnimate();
  const { scrolled } = useScroll();

  React.useEffect(() => {
    animate(
      refLogo.current,
      {
        opacity: scrolled ? 1 : 0,
        x: scrolled ? -30 : -60,
      },
      { duration: 0.3 }
    );
    animate(
      refProfile.current,
      {
        opacity: scrolled ? 1 : 0,
        x: scrolled ? 80 : 100,
      },
      { duration: 0.3 }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  return (
    <header className="animate-in fade-in slide-in-from-top-2 sticky top-0 z-50 w-full duration-500">
      <div className="relative transition-all duration-300 pl-8">
        <div>
          <Link
            href={"/"}
            suppressHydrationWarning
            className={cn(
              "absolute pointer-events-auto transition-all duration-300",
              {
                "translate-x-[-10px] opacity-0 hover:opacity-0 pointer-events-none":
                  scrolled,
              }
            )}
          >
            <Image
              src={"/dish-logo.png"}
              alt="logo"
              loading="lazy"
              width={80}
              height={80}
            />
          </Link>
        </div>
      </div>
      <div
        className={cn(
          "pointer-events-auto absolute left-1/2 top-1/2 mr-8 translate-x-[-50%] translate-y-[50%] rounded-full bg-gray-300/0 px-5 py-[6px] backdrop-blur-md transition-all duration-300 lg:block py-2 min-h-[40px]",
          {
            "bg-gray-800/70 shadow-md": scrolled,
          }
        )}
      >
        <div className="overflow-hidden">
          <div
            suppressHydrationWarning
            className={cn("relative transition-all duration-300", {
              "ml-[30px] mr-[80px]": scrolled,
            })}
          >
            <motion.div
              ref={refLogo}
              className="absolute"
              initial={{ x: -40, opacity: 0, y: 0 }}
            >
              <Link href="/">
                <Image
                  src={"/dish-logo.png"}
                  alt="logo"
                  loading="lazy"
                  width={27}
                  height={27}
                  className="aspect-[auto 30 / 30] object-cover"
                />
              </Link>
            </motion.div>
            <Link
              href={"/discover"}
              className={`relative group text-[#e1e7ef] hover:text-white hover:delay-100 hover:duration-300 text-center ml-4 mr-3`}
            >
              Recipes
            </Link>
            <motion.div
              ref={refProfile}
              className="absolute right-0"
              initial={{ x: 0, opacity: 0, y: -25 }}
            >
              <Button variant={"secondary"} className="h-[25px] rounded-full">
                Profile
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "absolute pointer-events-auto transition-all duration-300 space-x-4 right-[50px] top-4",
          {
            "translate-x-[-10px] opacity-0 hover:opacity-0 pointer-events-none":
              scrolled,
          }
        )}
      >
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </header>
  );
};
