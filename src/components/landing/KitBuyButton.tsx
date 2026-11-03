import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { kit, track } from "@/lib/products";

/** Botão único de compra: leva ao checkout do kit completo (Hotmart). */
export function KitBuyButton({ label = "QUERO O KIT COMPLETO", className }: { label?: string; className?: string }) {
  const cls = cn(
    "sticker inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display font-semibold tracking-wide text-primary-foreground",
    className,
  );
  if (kit.checkoutUrl) {
    return (
      <a href={kit.checkoutUrl} target="_blank" rel="noopener noreferrer" className={cls} onClick={() => track("begin_checkout", { productId: kit.id })}>
        <ShoppingBag className="h-4 w-4" aria-hidden /> {label}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={() => toast.info("As vendas abrem em breve!")}>
      <ShoppingBag className="h-4 w-4" aria-hidden /> {label}
    </button>
  );
}
