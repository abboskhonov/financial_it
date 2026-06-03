import { SITE_NAME } from "@/lib/config";

export function Footer() {
  return (
    <footer style={{ viewTransitionName: "persistent-footer" }} className="border-t border-border mt-16 bg-muted">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-sm text-muted-foreground">
          <p>{SITE_NAME} &copy; {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
