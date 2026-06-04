export function AdMPU({ empty = false }: { empty?: boolean }) {
  return (
    <div className="flex items-center justify-center shrink-0">
      {empty ? (
        <div className="h-[250px] w-[300px]" />
      ) : (
        <div className="flex items-center justify-center bg-muted/50 border border-dashed border-border rounded-sm h-[250px] w-[300px]">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[1.4px] text-muted-foreground text-center">
            Advertisement<br />300 × 250
          </span>
        </div>
      )}
    </div>
  );
}
