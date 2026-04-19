import { useCallback, useEffect, useState } from "react";
import { useAuth } from "./useAuth";

const WISHLIST_KEY = "pricewise_wishlist";

function getStoredWishlist(): string[] {
  try {
    const stored = localStorage.getItem(WISHLIST_KEY);
    return stored ? (JSON.parse(stored) as string[]) : [];
  } catch {
    return [];
  }
}

function setStoredWishlist(ids: string[]) {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));
}

export function useWishlist() {
  const { isAuthenticated } = useAuth();
  const [wishlist, setWishlist] = useState<string[]>(getStoredWishlist);

  useEffect(() => {
    setStoredWishlist(wishlist);
  }, [wishlist]);

  const addToWishlist = useCallback((productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev : [...prev, productId],
    );
  }, []);

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlist((prev) => prev.filter((id) => id !== productId));
  }, []);

  const toggleWishlist = useCallback(
    (productId: string) => {
      if (wishlist.includes(productId)) {
        removeFromWishlist(productId);
      } else {
        addToWishlist(productId);
      }
    },
    [wishlist, addToWishlist, removeFromWishlist],
  );

  const isInWishlist = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist],
  );

  return {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    isAuthenticated,
  };
}
