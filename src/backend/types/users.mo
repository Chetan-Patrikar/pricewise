module {
  public type ComparisonRecord = {
    id : Text;
    productIds : [Text];
    timestamp : Int;
  };

  public type UserProfile = {
    userId : Principal;
    email : Text;
    wishlist : [Text];
    comparisonHistory : [ComparisonRecord];
  };

  public type WishlistAction = {
    #Add;
    #Remove;
  };
};
