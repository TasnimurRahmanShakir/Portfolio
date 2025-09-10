import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Code, Folder, Mail } from "lucide-react";

const navItems = [
  { name: "Home", link: "#hero", icon: Home },
  { name: "About", link: "#about", icon: User },
  { name: "Skills", link: "#skills", icon: Code },
  { name: "Projects", link: "#projects", icon: Folder },
  { name: "Contact", link: "#contact", icon: Mail },
];
export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      setIsScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top navbar */}
      <nav
        className={cn(
          "fixed w-[calc(100vw-5vw)]  transition-all duration-300 z-50",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold text-primary flex items-center"
          >
            <span className="relative z-50 ml-5">Tasnim.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile bottom nav (separate from top nav) */}
      <div
        className="fixed bottom-5 left-1/2 transform -translate-x-1/2 w-full max-w-[400px] 
        bg-background/95 backdrop-blur-md border rounded-md flex justify-around items-center py-2 
        md:hidden z-50 transition-opacity duration-300 opacity-80"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.link}
              className="flex flex-col items-center text-foreground/70 transition-all duration-200
              hover:-translate-y-1 hover:bg-primary/80 hover:rounded-full
              active:-translate-y-1 active:bg-primary/20 px-3 py-1"
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
};
