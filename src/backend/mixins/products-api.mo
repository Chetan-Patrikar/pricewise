import List "mo:core/List";
import ProductTypes "../types/products";
import ProductsLib "../lib/products";

mixin (products : List.List<ProductTypes.Product>) {
  public query func getAllProducts() : async [ProductTypes.Product] {
    ProductsLib.getAllProducts(products)
  };

  public query func searchProducts(q : ProductTypes.SearchQuery) : async [ProductTypes.Product] {
    ProductsLib.searchProducts(products, q)
  };

  public query func getProductById(id : Text) : async ?ProductTypes.Product {
    ProductsLib.getProductById(products, id)
  };
};
