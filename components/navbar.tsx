"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SITE_NAME } from "@/lib/config";
import {
  IconMenu2,
  IconSearch,
  IconX,
  IconBrandFacebook,
  IconBrandX,
  IconBrandInstagram,
  IconBrandYoutube,
  IconHeart,
  IconSun,
  IconMoon,
} from "@tabler/icons-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Technology", href: "/technology" },
  { label: "Politics", href: "/politics" },
  { label: "Science", href: "/science" },
  { label: "Health", href: "/health" },
  { label: "Travel", href: "/travel" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [open, setOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowCategories(false);
      } else {
        setShowCategories(true);
      }
      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = theme === "dark" ? "light" : "dark";
    root.classList.remove("light", "dark");
    root.classList.add(next);
    setTheme(next);
  };

  return (
    <header
      style={{ viewTransitionName: "persistent-nav" }}
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      {/* Top bar */}
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex items-center justify-between py-3">
          {/* Left: hamburger + search */}
          <div className="flex items-center gap-3">
            <Drawer open={open} onOpenChange={setOpen} direction="left">
              <DrawerTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="relative p-1 hover:text-muted-foreground transition-colors"
                >
                  <IconMenu2 size={22} stroke={1.5} />
                  <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#c41e3a] ring-2 ring-background" />
                </button>
              </DrawerTrigger>
              <DrawerContent className="inset-y-0 left-0 w-full max-w-sm rounded-r-xl border-r border-border bg-background shadow-xl p-0 overflow-y-auto">
                <DrawerHeader className="flex items-center justify-between px-4 py-3 border-b border-border">
                  <DrawerTitle className="font-heading text-xl italic">
                    {SITE_NAME}
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <button
                      aria-label="Close menu"
                      className="p-1 hover:text-muted-foreground transition-colors"
                    >
                      <IconX size={24} stroke={1.5} />
                    </button>
                  </DrawerClose>
                </DrawerHeader>

                <div className="px-4 py-4">
                  {/* Nav links */}
                  <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                    Sections
                  </h3>
                  <ul className="flex flex-col gap-0 mb-6">
                    {navLinks.map((link) => (
                      <li key={link.href} className="border-b border-border">
                        <DrawerClose asChild>
                          <Link
                            href={link.href}
                            className="block py-3 font-sans text-base font-medium hover:text-muted-foreground transition-colors"
                          >
                            {link.label}
                          </Link>
                        </DrawerClose>
                      </li>
                    ))}
                  </ul>

                  {/* Socials */}
                  <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <IconBrandFacebook size={20} stroke={1.5} />
                    <IconBrandX size={20} stroke={1.5} />
                    <IconBrandInstagram size={20} stroke={1.5} />
                    <IconBrandYoutube size={20} stroke={1.5} />
                    <IconHeart size={20} stroke={1.5} />
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

            <Link
              href="/search"
              transitionTypes={["nav-forward"]}
              aria-label="Search"
              className="p-1 hover:text-muted-foreground transition-colors"
            >
              <IconSearch size={20} stroke={1.5} />
            </Link>
          </div>

          {/* Center: Logo */}
          <Link
            href="/"
            className="font-heading text-2xl sm:text-3xl italic tracking-tight"
          >
            {SITE_NAME}
          </Link>

          {/* Right: CTA + theme + socials */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#"
              className="hidden sm:inline-flex items-center bg-accent px-3 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.55px] text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Subscribe
            </a>
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              {theme === "dark" ? (
                <IconSun size={18} stroke={1.5} />
              ) : (
                <IconMoon size={18} stroke={1.5} />
              )}
            </button>
            <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
              <IconBrandFacebook size={16} stroke={1.5} />
              <IconBrandX size={16} stroke={1.5} />
              <IconBrandInstagram size={16} stroke={1.5} />
              <IconBrandYoutube size={16} stroke={1.5} />
              <IconHeart size={16} stroke={1.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Secondary nav - categories */}
      <nav
        className={`hidden md:block border-t border-border overflow-hidden transition-all duration-300 ease-out ${
          showCategories ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <ul className="flex items-center justify-center gap-5 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[1.4px]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
