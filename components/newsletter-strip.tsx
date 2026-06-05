import { SITE_NAME } from "@/lib/config";

export function NewsletterStrip() {
  return (
    <section className="mt-14 bg-muted/30 border-y border-border py-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 flex flex-col sm:flex-row items-center gap-6">
        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-heading text-lg font-semibold tracking-tight">
            Stay ahead in fintech
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-1">
            Get the latest news and analysis from {SITE_NAME} delivered to your inbox.
          </p>
        </div>
        <form className="flex items-center gap-3 w-full sm:w-auto">
          <label className="sr-only" htmlFor="newsletter-strip-email">Email</label>
          <input
            id="newsletter-strip-email"
            type="email"
            placeholder="Enter your email"
            required
            className="h-10 w-full sm:w-64 border border-border bg-background px-3 text-sm font-sans outline-none focus-visible:ring-2 focus-visible:ring-ring/50 placeholder:text-muted-foreground"
          />
          <button
            type="submit"
            className="h-10 px-5 bg-accent text-sm font-sans font-semibold text-accent-foreground hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
