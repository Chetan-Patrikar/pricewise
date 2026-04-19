module {
  public type Platform = {
    #Amazon;
    #Flipkart;
    #eBay;
    #Other : Text;
  };

  public type PlatformPrice = {
    platform : Platform;
    price : Float;
    originalPrice : Float;
    discount : Float;
    buyNowUrl : Text;
    inStock : Bool;
  };

  public type Product = {
    id : Text;
    title : Text;
    description : Text;
    category : Text;
    brand : Text;
    imageUrl : Text;
    platforms : [PlatformPrice];
    averageRating : Float;
    reviewCount : Nat;
    tags : [Text];
  };

  public type SearchQuery = {
    searchTerm : ?Text;
    category : ?Text;
    brand : ?Text;
    minPrice : ?Float;
    maxPrice : ?Float;
    minRating : ?Float;
  };
};
