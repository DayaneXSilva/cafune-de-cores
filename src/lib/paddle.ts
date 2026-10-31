import { resolvePaddlePrice } from "@/utils/payments.functions";

const clientToken = import.meta.env["VITE_PAYMENTS_CLIENT_TOKEN"] as string | undefined;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Paddle: any;
  }
}

export function getPaddleEnvironment(): "sandbox" | "live" {
  return clientToken?.startsWith("test_") ? "sandbox" : "live";
}

let ready: Promise<void> | null = null;

export function initializePaddle() {
  if (ready) return ready;
  if (!clientToken) return Promise.reject(new Error("VITE_PAYMENTS_CLIENT_TOKEN is not set"));
  ready = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.onload = () => {
      window.Paddle.Environment.set(getPaddleEnvironment() === "sandbox" ? "sandbox" : "production");
      window.Paddle.Initialize({
        token: clientToken,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        eventCallback: (ev: any) => {
          if (ev?.name === "checkout.completed" && ev.data?.transaction_id) {
            const produto = ev.data?.custom_data?.productId ?? "";
            setTimeout(() => {
              window.location.href = `/obrigado?produto=${encodeURIComponent(produto)}&pedido=${encodeURIComponent(ev.data.transaction_id)}`;
            }, 1500);
          }
        },
      });
      resolve();
    };
    script.onerror = () => { ready = null; reject(new Error("Falha ao carregar o pagamento")); };
    document.head.appendChild(script);
  });
  return ready;
}

export async function getPaddlePriceId(priceId: string): Promise<string> {
  return resolvePaddlePrice({ data: { priceId, environment: getPaddleEnvironment() } });
}

export async function openCheckout(priceId: string, productId: string) {
  await initializePaddle();
  const paddlePriceId = await getPaddlePriceId(priceId);
  window.Paddle.Checkout.open({
    items: [{ priceId: paddlePriceId, quantity: 1 }],
    customData: { productId },
    settings: {
      displayMode: "overlay",
      locale: "pt",
      allowLogout: false,
      variant: "one-page",
    },
  });
}
