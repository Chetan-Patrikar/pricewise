import Map "mo:core/Map";
import Array "mo:core/Array";
import UserTypes "../types/users";

module {
  public type UserProfile = UserTypes.UserProfile;
  public type ComparisonRecord = UserTypes.ComparisonRecord;
  public type WishlistAction = UserTypes.WishlistAction;

  // Returns existing profile or creates a default one on first access
  func getOrCreate(users : Map.Map<Principal, UserProfile>, userId : Principal) : UserProfile {
    switch (users.get(userId)) {
      case (?profile) profile;
      case null {
        let newProfile : UserProfile = {
          userId;
          email = "";
          wishlist = [];
          comparisonHistory = [];
        };
        users.add(userId, newProfile);
        newProfile
      };
    }
  };

  public func getUserProfile(users : Map.Map<Principal, UserProfile>, userId : Principal) : ?UserProfile {
    switch (users.get(userId)) {
      case (?profile) ?profile;
      case null null;
    }
  };

  public func updateWishlist(users : Map.Map<Principal, UserProfile>, userId : Principal, productId : Text, action : WishlistAction) {
    let profile = getOrCreate(users, userId);
    let updated : UserProfile = switch (action) {
      case (#Add) {
        // Avoid duplicates
        let already = profile.wishlist.any(func(id : Text) : Bool { id == productId });
        if (already) profile
        else { { profile with wishlist = profile.wishlist.concat([productId]) } }
      };
      case (#Remove) {
        { profile with wishlist = profile.wishlist.filter(func(id : Text) : Bool { id != productId }) }
      };
    };
    users.add(userId, updated);
  };

  public func saveComparisonRecord(users : Map.Map<Principal, UserProfile>, userId : Principal, record : ComparisonRecord) {
    let profile = getOrCreate(users, userId);
    // Prepend new record, keep at most 10
    let existing = profile.comparisonHistory;
    let newHistory : [ComparisonRecord] = if (existing.size() >= 10) {
      [record].concat(existing.sliceToArray(0, 9))
    } else {
      [record].concat(existing)
    };
    let updated : UserProfile = { profile with comparisonHistory = newHistory };
    users.add(userId, updated);
  };
};
