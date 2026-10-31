import { useState } from "react";
import { toast } from "sonner";
import { Loader2, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { track } from "@/lib/products";
import { openCheckout } from "@/lib/paddle";

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
  const [loading, setLoading] = useState(false);
  const onClick = async () => {
    if (!priceId) {
      toast.info("As vendas deste item abrem em breve!");
      return;
    }
    track("begin_checkout", { productId });
    setLoading(true);
    try {
      await openCheckout(priceId, productId);
    } catch (e) {
      console.error(e);
      toast.error("Não foi possível abrir o pagamento agora. Tente novamente em instantes.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={loading}
      className={cn(
        "sticker inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-display text-sm font-semibold tracking-wide text-primary-foreground disabled:opacity-70",
        className,
      )}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <ShoppingBag className="h-4 w-4" aria-hidden />}
      {label}
    </button>
  );
}
