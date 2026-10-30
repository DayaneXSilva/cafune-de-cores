import { describe, it, expect } from "vitest";
import { products, totalPages, kit } from "@/lib/products";

describe("catálogo", () => {
  it("tem seis volumes com ids únicos", () => {
    expect(products).toHaveLength(6);
    expect(new Set(products.map((p) => p.id)).size).toBe(6);
  });
  it("soma 273 páginas", () => {
    expect(totalPages).toBe(273);
  });
  it("kit fica oculto até o checkout estar configurado", () => {
    expect(kit.enabled && kit.priceId == null).toBe(false);
  });
});
