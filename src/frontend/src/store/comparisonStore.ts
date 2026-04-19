import type { ComparisonRecord } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ComparisonState {
  selectedIds: string[];
  history: ComparisonRecord[];
  addProduct: (id: string) => void;
  removeProduct: (id: string) => void;
  clearAll: () => void;
  saveToHistory: () => void;
  restoreFromHistory: (record: ComparisonRecord) => void;
  clearHistory: () => void;
}

export const useComparisonStore = create<ComparisonState>()(
  persist(
    (set, get) => ({
      selectedIds: [],
      history: [],
      addProduct: (id) =>
        set((state) => ({
          selectedIds: state.selectedIds.includes(id)
            ? state.selectedIds
            : [...state.selectedIds, id].slice(0, 4),
        })),
      removeProduct: (id) =>
        set((state) => ({
          selectedIds: state.selectedIds.filter((x) => x !== id),
        })),
      clearAll: () => set({ selectedIds: [] }),
      saveToHistory: () => {
        const { selectedIds, history } = get();
        if (selectedIds.length < 2) return;
        const record: ComparisonRecord = {
          id: `cmp-${Date.now()}`,
          productIds: [...selectedIds],
          timestamp: Date.now(),
        };
        set({
          history: [record, ...history].slice(0, 20),
        });
      },
      restoreFromHistory: (record: ComparisonRecord) => {
        set({ selectedIds: [...record.productIds] });
      },
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "pricewise_comparison",
    },
  ),
);
