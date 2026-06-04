"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full" style={{ maxWidth: 420 }}>
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/financial-it-logo.png"
                  alt="Financial IT"
                  width={180}
                  height={36}
                  className="h-9 w-auto mx-auto brightness-0 dark:brightness-100"
                  priority
                />
              </Link>
              <p className="text-sm text-muted-foreground">
                Sign in to your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="h-12 w-full border border-border bg-background px-4 font-sans text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-foreground"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="font-sans text-[11px] font-semibold uppercase tracking-[1.4px] text-foreground"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="font-sans text-[11px] font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="h-12 w-full border border-border bg-background px-4 font-sans text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground focus:ring-1 focus:ring-foreground"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-none font-sans text-[11px] font-semibold uppercase tracking-[1.4px]"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="text-center">
              <p className="font-sans text-sm text-muted-foreground">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-foreground hover:text-muted-foreground transition-colors underline underline-offset-4"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
