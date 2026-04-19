import Map "mo:core/Map";
import Time "mo:core/Time";
import UserTypes "../types/users";
import UsersLib "../lib/users";

mixin (users : Map.Map<Principal, UserTypes.UserProfile>) {
  public shared ({ caller }) func getUserProfile() : async ?UserTypes.UserProfile {
    UsersLib.getUserProfile(users, caller)
  };

  public shared ({ caller }) func toggleFavorite(productId : Text, action : UserTypes.WishlistAction) : async Bool {
    UsersLib.updateWishlist(users, caller, productId, action);
    true
  };

  public shared ({ caller }) func getFavorites() : async [Text] {
    switch (UsersLib.getUserProfile(users, caller)) {
      case (?profile) profile.wishlist;
      case null [];
    }
  };

  public shared ({ caller }) func addToWishlist(productId : Text) : async Bool {
    UsersLib.updateWishlist(users, caller, productId, #Add);
    true
  };

  public shared ({ caller }) func removeFromWishlist(productId : Text) : async Bool {
    UsersLib.updateWishlist(users, caller, productId, #Remove);
    true
  };

  public shared ({ caller }) func getWishlist() : async [Text] {
    switch (UsersLib.getUserProfile(users, caller)) {
      case (?profile) profile.wishlist;
      case null [];
    }
  };

  public shared ({ caller }) func getComparisonHistory() : async [UserTypes.ComparisonRecord] {
    switch (UsersLib.getUserProfile(users, caller)) {
      case (?profile) profile.comparisonHistory;
      case null [];
    }
  };

  public shared ({ caller }) func addToComparisonHistory(productIds : [Text]) : async () {
    let record : UserTypes.ComparisonRecord = {
      id = debug_show(Time.now());
      productIds;
      timestamp = Time.now();
    };
    UsersLib.saveComparisonRecord(users, caller, record);
  };
};
