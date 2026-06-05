export function AdInline({ empty = false }: { empty?: boolean }) {
  return (
    <div className="w-full" style={{ viewTransitionName: "none" }}>
      {empty ? (
        <div className="h-[90px] w-full" />
      ) : (
        <div className="flex items-center justify-center bg-muted/50 border border-dashed border-border rounded-sm h-[90px] w-full">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-muted-foreground">
            Advertisement — 728 × 90
          </span>
        </div>
      )}
    </div>
  );
}
