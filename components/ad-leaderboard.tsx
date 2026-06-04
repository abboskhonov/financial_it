export function AdLeaderboard({ empty = false }: { empty?: boolean }) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-4" style={{ viewTransitionName: "none" }}>
      {empty ? (
        <div className="h-[90px] w-full max-w-[728px] mx-auto" />
      ) : (
        <div className="flex items-center justify-center bg-muted/50 border border-dashed border-border rounded-sm h-[90px] w-full max-w-[728px] mx-auto">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
            Advertisement — 728 × 90
          </span>
        </div>
      )}
    </div>
  );
}
