import Image from "next/image";
import { Button } from "../button";
import { RecipeCards } from "./recipe-cards";

export const HeroBanner = () => {
  return (
    <div className="container mt-[100px] text-primary-foreground pb-10 animate-in fade-in slide-in-from-top-2 duration-1000">
      <div className="flex justify-center font-title">
        <div className="flex">
          <h1 className="text-5xl font-bold text-primary-foreground">
            Discover the best
          </h1>
          <span className="word-animation text-5xl font-bold ml-3">
            recipes
          </span>
        </div>
      </div>
      <div className="flex justify-center font-title">
        <div className="flex">
          <h1 className="text-5xl font-bold text-primary-foreground">
            From all over the
          </h1>
          <span className="word-animation text-5xl font-bold ml-3 animate-delay-1">
            world
          </span>
        </div>
      </div>
      <div className="flex justify-center text-[24px] mt-8">
        <h2>
          Welcome foodies! Search, create, share recipes and all kind of
          flavors.
        </h2>
      </div>
      <div className="flex justify-center gap-20 mt-10">
        <Button variant={"outline"}>Get Started</Button>
        <Button variant={"secondary"}>Learn More</Button>
      </div>
      <div className="mt-10">
        <div className="flex w-full justify-center">
          <Image
            src={"/chef-bubble.png"}
            alt="image from pngtree.com"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <RecipeCards />
      </div>
    </div>
  );
};
