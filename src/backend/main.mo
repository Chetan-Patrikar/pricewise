import List "mo:core/List";
import Map "mo:core/Map";
import ProductTypes "types/products";
import UserTypes "types/users";
import ProductsMixin "mixins/products-api";
import UsersMixin "mixins/users-api";
import ProductsLib "lib/products";

actor {
  let products = List.empty<ProductTypes.Product>();
  let users = Map.empty<Principal, UserTypes.UserProfile>();

  // Seed catalog on canister initialization
  ProductsLib.seedProducts(products);

  include ProductsMixin(products);
  include UsersMixin(users);
};
