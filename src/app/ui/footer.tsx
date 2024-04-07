import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="w-full font-medium text-md h-[40px] mt-3 overflow-hidden p-1">
      <Separator className="w-[80%] translate-x-[12%]" />
      <div className="flex items-center h-full translate-x-[20%]">
        <span>{new Date().getFullYear()} &copy; Welfi KHARROUBI, Inc</span>
      </div>
    </footer>
  );
};
