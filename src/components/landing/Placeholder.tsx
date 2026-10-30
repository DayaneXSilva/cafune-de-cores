import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Espaço reservado para capas, prévias e o Cafu até os materiais originais chegarem. */
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`${label} (imagem em breve)`}
      className={cn(
        "flex flex-col items-center justify-center gap-2 border-2 border-dashed border-grafite/30 bg-card/70 p-4 text-center text-muted-foreground",
        className,
      )}
    >
      <ImageIcon className="h-7 w-7 opacity-60" aria-hidden />
      <span className="font-display text-sm font-semibold leading-tight">{label}</span>
      <span className="text-xs">imagem original em breve</span>
    </div>
  );
}
