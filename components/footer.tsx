import Link from "next/link";
import Image from "next/image";
import { IconBrandLinkedin, IconBrandX, IconBrandYoutube } from "@tabler/icons-react";

const footerLinks = [
  {
    title: "About",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Advertising", href: "/advertising" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Sections",
    links: [
      { label: "News", href: "/news" },
      { label: "Intelligence", href: "/intelligence" },
      { label: "Multimedia", href: "/multimedia" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Style Guide", href: "/style-guide" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{ viewTransitionName: "persistent-footer" }}
      className="border-t border-border bg-muted/30"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-12">
        {/* Top row — logo + tagline */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-border">
          <Link href="/" className="block">
            <Image
              src="/financial-it-logo.png"
              alt="Financial IT"
              width={160}
              height={32}
              className="h-8 w-auto brightness-0 dark:brightness-100"
              priority
            />
          </Link>
          <p className="font-body text-sm text-muted-foreground max-w-sm">
            The leading media platform for fintech professionals, executives, and investors.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-10">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-muted-foreground">
            Financial IT &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <IconBrandLinkedin size={16} stroke={1.5} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <IconBrandX size={16} stroke={1.5} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
            >
              <IconBrandYoutube size={16} stroke={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
