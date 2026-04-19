import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface SearchQuery {
    minRating?: number;
    maxPrice?: number;
    searchTerm?: string;
    category?: string;
    brand?: string;
    minPrice?: number;
}
export interface PlatformPrice {
    inStock: boolean;
    originalPrice: number;
    platform: Platform;
    discount: number;
    price: number;
    buyNowUrl: string;
}
export type Platform = {
    __kind__: "Amazon";
    Amazon: null;
} | {
    __kind__: "eBay";
    eBay: null;
} | {
    __kind__: "Other";
    Other: string;
} | {
    __kind__: "Flipkart";
    Flipkart: null;
};
export interface ComparisonRecord {
    id: string;
    productIds: Array<string>;
    timestamp: bigint;
}
export interface Product {
    id: string;
    title: string;
    tags: Array<string>;
    description: string;
    averageRating: number;
    imageUrl: string;
    platforms: Array<PlatformPrice>;
    category: string;
    brand: string;
    reviewCount: bigint;
}
export interface UserProfile {
    userId: Principal;
    email: string;
    wishlist: Array<string>;
    comparisonHistory: Array<ComparisonRecord>;
}
export enum WishlistAction {
    Add = "Add",
    Remove = "Remove"
}
export interface backendInterface {
    addToComparisonHistory(productIds: Array<string>): Promise<void>;
    addToWishlist(productId: string): Promise<boolean>;
    getAllProducts(): Promise<Array<Product>>;
    getComparisonHistory(): Promise<Array<ComparisonRecord>>;
    getFavorites(): Promise<Array<string>>;
    getProductById(id: string): Promise<Product | null>;
    getUserProfile(): Promise<UserProfile | null>;
    getWishlist(): Promise<Array<string>>;
    removeFromWishlist(productId: string): Promise<boolean>;
    searchProducts(q: SearchQuery): Promise<Array<Product>>;
    toggleFavorite(productId: string, action: WishlistAction): Promise<boolean>;
}
