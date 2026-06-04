"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";
import { SITE_NAME } from "@/lib/config";
import {
  IconMenu2,
  IconSearch,
  IconX,
  IconSun,
  IconMoon,
  IconBuildingBank,
  IconCreditCard,
  IconTrendingUp,
  IconShieldCheck,
  IconCurrencyBitcoin,
  IconUmbrella,
  IconCoins,
  IconFileText,
  IconChartBar,
  IconChartLine,
  IconVideo,
  IconHeadphones,
  IconDeviceDesktop,
  IconBuilding,
  IconLayoutGrid,
  IconBook,
  IconMap,
} from "@tabler/icons-react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const navItems = [
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Banking", href: "/banking", icon: IconBuildingBank },
      { label: "Payments", href: "/payments", icon: IconCreditCard },
      { label: "Fintech", href: "/fintech", icon: IconTrendingUp },
      { label: "Regtech", href: "/regtech", icon: IconShieldCheck },
      { label: "Crypto", href: "/crypto", icon: IconCurrencyBitcoin },
      { label: "Insurance", href: "/insurance", icon: IconUmbrella },
      { label: "Lending", href: "/lending", icon: IconCoins },
    ],
  },
  {
    label: "Intelligence",
    href: "/intelligence",
    children: [
      { label: "Reports", href: "/reports", icon: IconFileText },
      { label: "Analysis", href: "/analysis", icon: IconChartBar },
      { label: "Market Data", href: "/market-data", icon: IconChartLine },
    ],
  },
  {
    label: "Multimedia",
    href: "/multimedia",
    children: [
      { label: "Videos", href: "/videos", icon: IconVideo },
      { label: "Podcasts", href: "/podcasts", icon: IconHeadphones },
      { label: "Webinars", href: "/webinars", icon: IconDeviceDesktop },
    ],
  },
  {
    label: "Solution Directories",
    href: "/solution-directories",
    children: [
      { label: "Providers", href: "/providers", icon: IconBuilding },
      { label: "Platforms", href: "/platforms", icon: IconLayoutGrid },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Magazine", href: "/magazine" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Whitepapers", href: "/whitepapers", icon: IconFileText },
      { label: "Guides", href: "/guides", icon: IconBook },
    ],
  },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideMainBar, setHideMainBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const mainBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [mainBarHeight, setMainBarHeight] = useState(56);
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const updateHeight = () => {
      if (mainBarRef.current) {
        setMainBarHeight(mainBarRef.current.offsetHeight);
      }
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHideMainBar(true);
      } else {
        setHideMainBar(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background overflow-hidden transition-all duration-300 ease-out"
        style={{
          viewTransitionName: 'site-header',
          height: hideMainBar ? Math.max(0, headerHeight - mainBarHeight) : headerHeight,
        }}
      >
      {/* Main header bar: logo + search + login + theme */}
      <div
        ref={mainBarRef}
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{ transform: hideMainBar ? `translateY(-${mainBarHeight}px)` : "translateY(0)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex items-center justify-between py-3">
            {/* Left: Logo */}
            <Link
              href="/"
              className="block"
            >
              <Image
                src="/financial-it-logo.png"
                alt="Financial IT"
                width={150}
                height={30}
                className={`h-[30px] w-auto ${mounted && resolvedTheme === "light" ? "brightness-0" : ""}`}
                priority
              />
            </Link>

            {/* Right: search + login + theme */}
            <div className="flex items-center gap-4">
              <Link
                href="/search"
                aria-label="Search"
                className="p-1 hover:text-muted-foreground transition-colors"
              >
                <IconSearch size={20} stroke={1.5} />
              </Link>

              <Link
                href="/login"
                className="hidden sm:inline-flex items-center border border-border px-3 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.55px] text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors whitespace-nowrap"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="hidden sm:inline-flex items-center bg-accent px-3 py-1.5 text-[11px] font-sans font-semibold uppercase tracking-[0.55px] text-accent-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Sign Up
              </Link>

              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <IconSun size={18} stroke={1.5} />
                ) : (
                  <IconMoon size={18} stroke={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section nav bar */}
      <div
        className={`hidden lg:block border-b border-border bg-background transition-transform duration-300 ease-out will-change-transform ${hideMainBar ? "shadow-sm" : ""}`}
        style={{ transform: hideMainBar ? `translateY(-${mainBarHeight}px)` : "translateY(0)" }}
      >
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <NavigationMenu>
            <NavigationMenuList className="gap-0">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="relative font-sans text-[11px] font-semibold uppercase tracking-[1.4px] rounded-none bg-transparent hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-popup-open:bg-transparent px-3 py-1.5 after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-foreground after:transition-all after:duration-200 hover:after:w-4/5 data-open:after:w-4/5">
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[220px] p-2">
                          {item.children.map((child) => {
                            const ChildIcon = child.icon;
                            return (
                              <NavigationMenuLink
                                key={child.label}
                                render={
                                  <Link
                                    href={child.href}
                                    className="flex items-center gap-3 px-4 py-2.5 font-sans text-sm transition-colors hover:text-accent hover:bg-accent/10 rounded-none"
                                  />
                                }
                              >
                                {ChildIcon && <ChildIcon size={18} stroke={1.5} className="text-muted-foreground" />}
                                {child.label}
                              </NavigationMenuLink>
                            );
                          })}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      render={
                        <Link
                          href={item.href}
                          className="relative inline-flex h-7 items-center justify-center px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[1.4px] transition-colors hover:text-foreground rounded-none after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-foreground after:transition-all after:duration-200 hover:after:w-4/5"
                        />
                      }
                    >
                      {item.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className="lg:hidden">
        <Drawer open={open} onOpenChange={setOpen} direction="left">
          <DrawerTrigger asChild>
            <button
              aria-label="Open menu"
              className="absolute top-3 left-4 sm:left-6 z-50 p-1 hover:text-muted-foreground transition-colors"
            >
              <IconMenu2 size={22} stroke={1.5} />
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
              <h3 className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-muted-foreground mb-3">
                Sections
              </h3>
              <ul className="flex flex-col gap-0 mb-6">
                {navItems.map((item) => (
                  <li key={item.label} className="border-b border-border">
                    <DrawerClose asChild>
                      <Link
                        href={item.href}
                        className="block py-3 font-sans text-base font-medium hover:text-muted-foreground transition-colors"
                      >
                        {item.label}
                      </Link>
                    </DrawerClose>
                    {item.children && (
                      <ul className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <DrawerClose asChild>
                              <Link
                                href={child.href}
                                className="block py-2 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {child.label}
                              </Link>
                            </DrawerClose>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      </header>
      <div aria-hidden="true" style={{ height: hideMainBar ? headerHeight - mainBarHeight : headerHeight }} />
    </>
  );
}
