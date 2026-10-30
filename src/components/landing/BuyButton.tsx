import { toast } from "sonner";
import { ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/products";

/** Botão de compra individual. Cada produto usa o próprio priceId no checkout. */
export function BuyButton({
  productId,
  priceId,
  label = "COMPRAR E BAIXAR PDF",
  className,
}: {
  productId: string;
  priceId: string | null;
  label?: string;
  className?: string;
}) {
  const onClick = () => {
    if (!priceId) {
      toast.info("As vendas abrem em breve! Este livro ainda está sendo preparado para compra.");
      return;
    }
    track("begin_checkout", { productId });
    toast.info("Abrindo o pagamento seguro…");
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "sticker inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground",
        className,
      )}
    >
      <ShoppingBag className="h-4 w-4" aria-hidden />
      {label}
    </button>
  );
}
