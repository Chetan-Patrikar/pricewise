import { SAMPLE_PRODUCTS } from "@/types";
import type { Product, SearchQuery } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Since backend.d.ts is a stub, we use sample data with backend-compatible interface
export function useProducts() {
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      // Simulate network delay for realistic UX
      await new Promise((r) => setTimeout(r, 400));
      return SAMPLE_PRODUCTS;
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useSearchProducts(query: SearchQuery) {
  return useQuery<Product[]>({
    queryKey: ["products", "search", query],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      let results = [...SAMPLE_PRODUCTS];

      if (query.searchTerm) {
        const term = query.searchTerm.toLowerCase();
        results = results.filter(
          (p) =>
            p.title.toLowerCase().includes(term) ||
            p.brand.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.tags.some((t) => t.toLowerCase().includes(term)),
        );
      }
      if (query.category) {
        results = results.filter((p) => p.category === query.category);
      }
      if (query.brand) {
        results = results.filter((p) =>
          p.brand.toLowerCase().includes(query.brand!.toLowerCase()),
        );
      }
      if (query.minPrice !== undefined) {
        results = results.filter((p) =>
          p.platforms.some((pl) => pl.price >= query.minPrice!),
        );
      }
      if (query.maxPrice !== undefined) {
        results = results.filter((p) =>
          p.platforms.some((pl) => pl.price <= query.maxPrice!),
        );
      }
      if (query.minRating !== undefined) {
        results = results.filter((p) => p.averageRating >= query.minRating!);
      }
      return results;
    },
    staleTime: 60 * 1000,
  });
}

export function useProduct(id: string) {
  return useQuery<Product | undefined>({
    queryKey: ["products", id],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      return SAMPLE_PRODUCTS.find((p) => p.id === id);
    },
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
}

export function useSearchSuggestions(term: string) {
  return useQuery<string[]>({
    queryKey: ["suggestions", term],
    queryFn: async () => {
      if (!term || term.length < 2) return [];
      const lower = term.toLowerCase();
      const matches = new Set<string>();
      for (const p of SAMPLE_PRODUCTS) {
        if (p.title.toLowerCase().includes(lower)) matches.add(p.title);
        if (p.brand.toLowerCase().includes(lower)) matches.add(p.brand);
        for (const t of p.tags) {
          if (t.toLowerCase().includes(lower)) matches.add(t);
        }
      }
      return Array.from(matches).slice(0, 6);
    },
    staleTime: 30 * 1000,
    enabled: term.length >= 2,
  });
}
