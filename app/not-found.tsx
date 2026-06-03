import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1200px] px-4 sm:px-6 py-24 text-center">
        <h1 className="font-heading text-6xl font-semibold tracking-tight mb-4">
          404
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded border border-border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
        >
          Go back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
