import Image from "next/image";
import { SITE_NAME } from "@/lib/config";

export function NewsletterSignup() {
  return (
    <div className="flex flex-col gap-4">
      {/* Magazine cover image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src="https://images.unsplash.com/photo-1586339949216-35c2747cc36d?w=400&h=500&fit=crop"
          alt="Magazine cover"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="text-center text-white">
            <p className="font-heading text-xl font-bold tracking-tight">{SITE_NAME}</p>
            <p className="text-[10px] uppercase tracking-[3px] opacity-80 mt-0.5">Innovations in FinTech</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div>
        <h3 className="font-heading text-base font-semibold tracking-tight text-center mb-4">
          Free Newsletter Subscription
        </h3>
        <form className="flex flex-col gap-3">
          <div>
            <label className="sr-only" htmlFor="newsletter-email">Email Address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email Address *"
              required
              className="h-10 w-full border border-border bg-background px-3 text-sm font-sans outline-none focus-visible:ring-2 focus-visible:ring-ring/50 placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="newsletter-first">First Name</label>
            <input
              id="newsletter-first"
              type="text"
              placeholder="First Name"
              className="h-10 w-full border border-border bg-background px-3 text-sm font-sans outline-none focus-visible:ring-2 focus-visible:ring-ring/50 placeholder:text-muted-foreground"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="newsletter-last">Last Name</label>
            <input
              id="newsletter-last"
              type="text"
              placeholder="Last Name"
              className="h-10 w-full border border-border bg-background px-3 text-sm font-sans outline-none focus-visible:ring-2 focus-visible:ring-ring/50 placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            className="h-10 w-full bg-accent text-sm font-sans font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
