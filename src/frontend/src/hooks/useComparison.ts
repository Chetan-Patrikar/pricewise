import { useComparisonStore } from "@/store/comparisonStore";
import type { ComparisonRecord, Product } from "@/types";
import { useCallback } from "react";

const MAX_COMPARE = 4;

export function useComparison() {
  const {
    selectedIds,
    history,
    addProduct,
    removeProduct,
    clearAll,
    saveToHistory,
    restoreFromHistory,
    clearHistory,
  } = useComparisonStore();

  const toggleComparison = useCallback(
    (product: Product) => {
      if (selectedIds.includes(product.id)) {
        removeProduct(product.id);
      } else if (selectedIds.length < MAX_COMPARE) {
        addProduct(product.id);
      }
    },
    [selectedIds, addProduct, removeProduct],
  );

  const isSelected = useCallback(
    (productId: string) => selectedIds.includes(productId),
    [selectedIds],
  );

  const canAdd = selectedIds.length < MAX_COMPARE;

  const handleClearAll = useCallback(() => {
    // Save to history before clearing if 2+ products
    if (selectedIds.length >= 2) {
      saveToHistory();
    }
    clearAll();
  }, [selectedIds, saveToHistory, clearAll]);

  const restoreComparison = useCallback(
    (record: ComparisonRecord) => {
      restoreFromHistory(record);
    },
    [restoreFromHistory],
  );

  return {
    selectedIds,
    history,
    toggleComparison,
    isSelected,
    removeProduct,
    clearAll: handleClearAll,
    clearHistory,
    saveToHistory,
    restoreComparison,
    canAdd,
    count: selectedIds.length,
    maxCompare: MAX_COMPARE,
  };
}
