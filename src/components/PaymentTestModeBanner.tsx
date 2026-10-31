import { getPaddleEnvironment } from "@/lib/paddle";

export function PaymentTestModeBanner() {
  if (getPaddleEnvironment() !== "sandbox") return null;
  return (
    <div className="w-full border-b border-caramelo bg-caramelo/20 px-4 py-2 text-center text-sm">
      Pagamentos na pré-visualização estão em modo de teste.{" "}
      <a href="https://docs.lovable.dev/features/payments#test-and-live-environments" target="_blank" rel="noopener noreferrer" className="font-bold underline">
        Saiba mais
      </a>
    </div>
  );
}
