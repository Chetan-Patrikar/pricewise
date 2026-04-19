import List "mo:core/List";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Float "mo:core/Float";
import ProductTypes "../types/products";

module {
  public type Product = ProductTypes.Product;
  public type SearchQuery = ProductTypes.SearchQuery;
  public type PlatformPrice = ProductTypes.PlatformPrice;

  public func getAllProducts(products : List.List<Product>) : [Product] {
    products.toArray()
  };

  public func searchProducts(products : List.List<Product>, q : SearchQuery) : [Product] {
    let filtered = products.filter(func(p : Product) : Bool {
      // Text search on title, brand, tags
      let matchesTerm = switch (q.searchTerm) {
        case null true;
        case (?term) {
          let t = term.toLower();
          p.title.toLower().contains(#text t) or
          p.brand.toLower().contains(#text t) or
          p.tags.any(func(tag : Text) : Bool { tag.toLower().contains(#text t) })
        };
      };

      // Category filter
      let matchesCategory = switch (q.category) {
        case null true;
        case (?cat) { p.category.toLower() == cat.toLower() };
      };

      // Brand filter
      let matchesBrand = switch (q.brand) {
        case null true;
        case (?b) { p.brand.toLower() == b.toLower() };
      };

      // Rating filter
      let matchesRating = switch (q.minRating) {
        case null true;
        case (?minR) { p.averageRating >= minR };
      };

      // Price range filter — check if any platform price falls within range
      let matchesPrice = switch (q.minPrice, q.maxPrice) {
        case (null, null) true;
        case (minP, maxP) {
          p.platforms.any(func(pp : PlatformPrice) : Bool {
            let aboveMin = switch (minP) {
              case null true;
              case (?mn) { pp.price >= mn };
            };
            let belowMax = switch (maxP) {
              case null true;
              case (?mx) { pp.price <= mx };
            };
            aboveMin and belowMax
          })
        };
      };

      matchesTerm and matchesCategory and matchesBrand and matchesRating and matchesPrice
    });
    filtered.toArray()
  };

  public func getProductById(products : List.List<Product>, id : Text) : ?Product {
    products.find(func(p : Product) : Bool { p.id == id })
  };

  public func seedProducts(products : List.List<Product>) {
    // ── Electronics ──────────────────────────────────────────────────────────
    products.add({
      id = "p001"; title = "Samsung Galaxy S24 Ultra"; description = "Flagship smartphone with 200MP camera, S Pen, and 12GB RAM.";
      category = "Electronics"; brand = "Samsung"; imageUrl = "https://picsum.photos/seed/p001/400/300";
      platforms = [
        { platform = #Amazon; price = 1199.99; originalPrice = 1299.99; discount = 7.7; buyNowUrl = "https://amazon.com/dp/samsung-s24-ultra"; inStock = true },
        { platform = #Flipkart; price = 1149.00; originalPrice = 1299.99; discount = 11.5; buyNowUrl = "https://flipkart.com/samsung-s24-ultra"; inStock = true },
        { platform = #eBay; price = 1099.00; originalPrice = 1299.99; discount = 15.5; buyNowUrl = "https://ebay.com/samsung-s24-ultra"; inStock = false },
        { platform = #Other "Best Buy"; price = 1199.99; originalPrice = 1299.99; discount = 7.7; buyNowUrl = "https://bestbuy.com/samsung-s24-ultra"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 4892; tags = ["smartphone", "5G", "android", "camera"]
    });

    products.add({
      id = "p002"; title = "Apple iPhone 15 Pro Max"; description = "Apple's most powerful iPhone with A17 Pro chip and titanium design.";
      category = "Electronics"; brand = "Apple"; imageUrl = "https://picsum.photos/seed/p002/400/300";
      platforms = [
        { platform = #Amazon; price = 1299.00; originalPrice = 1399.00; discount = 7.1; buyNowUrl = "https://amazon.com/dp/iphone-15-pro-max"; inStock = true },
        { platform = #Flipkart; price = 1279.00; originalPrice = 1399.00; discount = 8.6; buyNowUrl = "https://flipkart.com/iphone-15-pro-max"; inStock = true },
        { platform = #eBay; price = 1250.00; originalPrice = 1399.00; discount = 10.6; buyNowUrl = "https://ebay.com/iphone-15-pro-max"; inStock = true },
        { platform = #Other "Apple Store"; price = 1399.00; originalPrice = 1399.00; discount = 0.0; buyNowUrl = "https://apple.com/iphone-15-pro-max"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 7210; tags = ["smartphone", "iOS", "5G", "camera", "premium"]
    });

    products.add({
      id = "p003"; title = "Sony WH-1000XM5 Headphones"; description = "Industry-leading noise cancellation with 30-hour battery life.";
      category = "Electronics"; brand = "Sony"; imageUrl = "https://picsum.photos/seed/p003/400/300";
      platforms = [
        { platform = #Amazon; price = 279.99; originalPrice = 399.99; discount = 30.0; buyNowUrl = "https://amazon.com/dp/sony-wh1000xm5"; inStock = true },
        { platform = #Flipkart; price = 289.00; originalPrice = 399.99; discount = 27.5; buyNowUrl = "https://flipkart.com/sony-wh1000xm5"; inStock = true },
        { platform = #eBay; price = 259.00; originalPrice = 399.99; discount = 35.2; buyNowUrl = "https://ebay.com/sony-wh1000xm5"; inStock = true },
        { platform = #Other "Walmart"; price = 299.00; originalPrice = 399.99; discount = 25.2; buyNowUrl = "https://walmart.com/sony-wh1000xm5"; inStock = false }
      ];
      averageRating = 4.6; reviewCount = 3241; tags = ["headphones", "noise-cancelling", "wireless", "audio"]
    });

    products.add({
      id = "p004"; title = "Dell XPS 15 Laptop"; description = "15.6-inch OLED display, Intel Core i9, 32GB RAM, RTX 4060.";
      category = "Electronics"; brand = "Dell"; imageUrl = "https://picsum.photos/seed/p004/400/300";
      platforms = [
        { platform = #Amazon; price = 1899.99; originalPrice = 2199.99; discount = 13.6; buyNowUrl = "https://amazon.com/dp/dell-xps-15"; inStock = true },
        { platform = #Flipkart; price = 1849.00; originalPrice = 2199.99; discount = 15.9; buyNowUrl = "https://flipkart.com/dell-xps-15"; inStock = false },
        { platform = #eBay; price = 1799.00; originalPrice = 2199.99; discount = 18.2; buyNowUrl = "https://ebay.com/dell-xps-15"; inStock = true },
        { platform = #Other "Dell Store"; price = 2199.99; originalPrice = 2199.99; discount = 0.0; buyNowUrl = "https://dell.com/xps-15"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 1823; tags = ["laptop", "windows", "gaming", "OLED", "professional"]
    });

    products.add({
      id = "p005"; title = "Apple MacBook Pro 14-inch M3"; description = "14-inch MacBook Pro with M3 Pro chip, 18GB unified memory.";
      category = "Electronics"; brand = "Apple"; imageUrl = "https://picsum.photos/seed/p005/400/300";
      platforms = [
        { platform = #Amazon; price = 1899.00; originalPrice = 1999.00; discount = 5.0; buyNowUrl = "https://amazon.com/dp/macbook-pro-14-m3"; inStock = true },
        { platform = #Flipkart; price = 1879.00; originalPrice = 1999.00; discount = 6.0; buyNowUrl = "https://flipkart.com/macbook-pro-14-m3"; inStock = true },
        { platform = #eBay; price = 1849.00; originalPrice = 1999.00; discount = 7.5; buyNowUrl = "https://ebay.com/macbook-pro-14-m3"; inStock = true },
        { platform = #Other "Apple Store"; price = 1999.00; originalPrice = 1999.00; discount = 0.0; buyNowUrl = "https://apple.com/macbook-pro-14"; inStock = true }
      ];
      averageRating = 4.9; reviewCount = 2980; tags = ["laptop", "macOS", "M3", "professional"]
    });

    products.add({
      id = "p006"; title = "iPad Pro 12.9-inch M2"; description = "Apple M2 chip, Liquid Retina XDR display, Thunderbolt connectivity.";
      category = "Electronics"; brand = "Apple"; imageUrl = "https://picsum.photos/seed/p006/400/300";
      platforms = [
        { platform = #Amazon; price = 999.00; originalPrice = 1099.00; discount = 9.1; buyNowUrl = "https://amazon.com/dp/ipad-pro-m2"; inStock = true },
        { platform = #Flipkart; price = 979.00; originalPrice = 1099.00; discount = 10.9; buyNowUrl = "https://flipkart.com/ipad-pro-m2"; inStock = true },
        { platform = #eBay; price = 949.00; originalPrice = 1099.00; discount = 13.6; buyNowUrl = "https://ebay.com/ipad-pro-m2"; inStock = false },
        { platform = #Other "Apple Store"; price = 1099.00; originalPrice = 1099.00; discount = 0.0; buyNowUrl = "https://apple.com/ipad-pro"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 2105; tags = ["tablet", "iOS", "M2", "creative"]
    });

    products.add({
      id = "p007"; title = "Samsung 65\" QLED 4K TV"; description = "Quantum dot technology, 120Hz, HDR10+, built-in Alexa.";
      category = "Electronics"; brand = "Samsung"; imageUrl = "https://picsum.photos/seed/p007/400/300";
      platforms = [
        { platform = #Amazon; price = 849.99; originalPrice = 1199.99; discount = 29.2; buyNowUrl = "https://amazon.com/dp/samsung-qled-65"; inStock = true },
        { platform = #Flipkart; price = 829.00; originalPrice = 1199.99; discount = 30.8; buyNowUrl = "https://flipkart.com/samsung-qled-65"; inStock = true },
        { platform = #eBay; price = 799.00; originalPrice = 1199.99; discount = 33.3; buyNowUrl = "https://ebay.com/samsung-qled-65"; inStock = true },
        { platform = #Other "Best Buy"; price = 899.99; originalPrice = 1199.99; discount = 25.0; buyNowUrl = "https://bestbuy.com/samsung-qled-65"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 3400; tags = ["TV", "4K", "QLED", "smart TV"]
    });

    products.add({
      id = "p008"; title = "Nintendo Switch OLED"; description = "7-inch OLED screen, 64GB storage, enhanced audio for home and portable play.";
      category = "Electronics"; brand = "Nintendo"; imageUrl = "https://picsum.photos/seed/p008/400/300";
      platforms = [
        { platform = #Amazon; price = 319.99; originalPrice = 349.99; discount = 8.6; buyNowUrl = "https://amazon.com/dp/nintendo-switch-oled"; inStock = true },
        { platform = #Flipkart; price = 309.00; originalPrice = 349.99; discount = 11.7; buyNowUrl = "https://flipkart.com/nintendo-switch-oled"; inStock = false },
        { platform = #eBay; price = 299.00; originalPrice = 349.99; discount = 14.6; buyNowUrl = "https://ebay.com/nintendo-switch-oled"; inStock = true },
        { platform = #Other "GameStop"; price = 349.99; originalPrice = 349.99; discount = 0.0; buyNowUrl = "https://gamestop.com/nintendo-switch-oled"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 5600; tags = ["gaming", "console", "portable", "OLED"]
    });

    products.add({
      id = "p009"; title = "Canon EOS R6 Mark II"; description = "Full-frame mirrorless camera, 40fps burst, 4K60p video, IBIS.";
      category = "Electronics"; brand = "Canon"; imageUrl = "https://picsum.photos/seed/p009/400/300";
      platforms = [
        { platform = #Amazon; price = 2499.00; originalPrice = 2699.00; discount = 7.4; buyNowUrl = "https://amazon.com/dp/canon-eos-r6-ii"; inStock = true },
        { platform = #Flipkart; price = 2449.00; originalPrice = 2699.00; discount = 9.3; buyNowUrl = "https://flipkart.com/canon-eos-r6-ii"; inStock = true },
        { platform = #eBay; price = 2350.00; originalPrice = 2699.00; discount = 12.9; buyNowUrl = "https://ebay.com/canon-eos-r6-ii"; inStock = true },
        { platform = #Other "B&H Photo"; price = 2499.00; originalPrice = 2699.00; discount = 7.4; buyNowUrl = "https://bhphotovideo.com/canon-eos-r6-ii"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 892; tags = ["camera", "mirrorless", "photography", "video"]
    });

    products.add({
      id = "p010"; title = "Apple Watch Series 9"; description = "S9 chip, double tap gesture, always-on Retina display, carbon neutral.";
      category = "Electronics"; brand = "Apple"; imageUrl = "https://picsum.photos/seed/p010/400/300";
      platforms = [
        { platform = #Amazon; price = 349.00; originalPrice = 399.00; discount = 12.5; buyNowUrl = "https://amazon.com/dp/apple-watch-s9"; inStock = true },
        { platform = #Flipkart; price = 339.00; originalPrice = 399.00; discount = 15.0; buyNowUrl = "https://flipkart.com/apple-watch-s9"; inStock = true },
        { platform = #eBay; price = 329.00; originalPrice = 399.00; discount = 17.5; buyNowUrl = "https://ebay.com/apple-watch-s9"; inStock = true },
        { platform = #Other "Apple Store"; price = 399.00; originalPrice = 399.00; discount = 0.0; buyNowUrl = "https://apple.com/apple-watch-series-9"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 4100; tags = ["smartwatch", "wearable", "fitness", "iOS"]
    });

    // ── Clothing ──────────────────────────────────────────────────────────────
    products.add({
      id = "p011"; title = "Levi's 501 Original Jeans"; description = "Classic straight-fit jeans in authentic blue denim, 100% cotton.";
      category = "Clothing"; brand = "Levi's"; imageUrl = "https://picsum.photos/seed/p011/400/300";
      platforms = [
        { platform = #Amazon; price = 59.99; originalPrice = 79.99; discount = 25.0; buyNowUrl = "https://amazon.com/dp/levis-501"; inStock = true },
        { platform = #Flipkart; price = 54.99; originalPrice = 79.99; discount = 31.3; buyNowUrl = "https://flipkart.com/levis-501"; inStock = true },
        { platform = #eBay; price = 49.99; originalPrice = 79.99; discount = 37.5; buyNowUrl = "https://ebay.com/levis-501"; inStock = true },
        { platform = #Other "Levi's Store"; price = 79.99; originalPrice = 79.99; discount = 0.0; buyNowUrl = "https://levi.com/501-jeans"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 12000; tags = ["jeans", "denim", "casual", "men"]
    });

    products.add({
      id = "p012"; title = "Nike Air Max 270"; description = "Lifestyle sneaker with large Air unit for all-day cushioning.";
      category = "Clothing"; brand = "Nike"; imageUrl = "https://picsum.photos/seed/p012/400/300";
      platforms = [
        { platform = #Amazon; price = 89.99; originalPrice = 130.00; discount = 30.8; buyNowUrl = "https://amazon.com/dp/nike-air-max-270"; inStock = true },
        { platform = #Flipkart; price = 84.99; originalPrice = 130.00; discount = 34.6; buyNowUrl = "https://flipkart.com/nike-air-max-270"; inStock = true },
        { platform = #eBay; price = 79.99; originalPrice = 130.00; discount = 38.5; buyNowUrl = "https://ebay.com/nike-air-max-270"; inStock = false },
        { platform = #Other "Nike Store"; price = 130.00; originalPrice = 130.00; discount = 0.0; buyNowUrl = "https://nike.com/air-max-270"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 8900; tags = ["shoes", "sneakers", "running", "sport"]
    });

    products.add({
      id = "p013"; title = "Adidas Ultraboost 23"; description = "Responsive running shoe with BOOST midsole and Primeknit upper.";
      category = "Clothing"; brand = "Adidas"; imageUrl = "https://picsum.photos/seed/p013/400/300";
      platforms = [
        { platform = #Amazon; price = 139.99; originalPrice = 190.00; discount = 26.3; buyNowUrl = "https://amazon.com/dp/adidas-ultraboost-23"; inStock = true },
        { platform = #Flipkart; price = 134.99; originalPrice = 190.00; discount = 29.0; buyNowUrl = "https://flipkart.com/adidas-ultraboost-23"; inStock = true },
        { platform = #eBay; price = 124.99; originalPrice = 190.00; discount = 34.2; buyNowUrl = "https://ebay.com/adidas-ultraboost-23"; inStock = true },
        { platform = #Other "Adidas Store"; price = 190.00; originalPrice = 190.00; discount = 0.0; buyNowUrl = "https://adidas.com/ultraboost-23"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 6700; tags = ["shoes", "running", "sport", "boost"]
    });

    products.add({
      id = "p014"; title = "The North Face Thermoball Jacket"; description = "Lightweight insulated jacket with ThermoBall Eco insulation, packable.";
      category = "Clothing"; brand = "The North Face"; imageUrl = "https://picsum.photos/seed/p014/400/300";
      platforms = [
        { platform = #Amazon; price = 149.99; originalPrice = 220.00; discount = 31.8; buyNowUrl = "https://amazon.com/dp/tnf-thermoball"; inStock = true },
        { platform = #Flipkart; price = 144.99; originalPrice = 220.00; discount = 34.1; buyNowUrl = "https://flipkart.com/tnf-thermoball"; inStock = false },
        { platform = #eBay; price = 135.00; originalPrice = 220.00; discount = 38.6; buyNowUrl = "https://ebay.com/tnf-thermoball"; inStock = true },
        { platform = #Other "TNF Store"; price = 220.00; originalPrice = 220.00; discount = 0.0; buyNowUrl = "https://thenorthface.com/thermoball-jacket"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 3200; tags = ["jacket", "outdoor", "winter", "insulated"]
    });

    products.add({
      id = "p015"; title = "Ralph Lauren Classic Fit Polo"; description = "Iconic polo shirt in premium cotton pique, soft collar.";
      category = "Clothing"; brand = "Ralph Lauren"; imageUrl = "https://picsum.photos/seed/p015/400/300";
      platforms = [
        { platform = #Amazon; price = 49.99; originalPrice = 98.00; discount = 49.0; buyNowUrl = "https://amazon.com/dp/ralph-lauren-polo"; inStock = true },
        { platform = #Flipkart; price = 47.99; originalPrice = 98.00; discount = 51.0; buyNowUrl = "https://flipkart.com/ralph-lauren-polo"; inStock = true },
        { platform = #eBay; price = 42.99; originalPrice = 98.00; discount = 56.1; buyNowUrl = "https://ebay.com/ralph-lauren-polo"; inStock = true },
        { platform = #Other "RL Store"; price = 98.00; originalPrice = 98.00; discount = 0.0; buyNowUrl = "https://ralphlauren.com/polo-shirt"; inStock = true }
      ];
      averageRating = 4.3; reviewCount = 5500; tags = ["polo", "shirt", "casual", "classic", "men"]
    });

    products.add({
      id = "p016"; title = "Zara Oversized Blazer"; description = "Relaxed-fit blazer in textured fabric, modern cut for casual or formal wear.";
      category = "Clothing"; brand = "Zara"; imageUrl = "https://picsum.photos/seed/p016/400/300";
      platforms = [
        { platform = #Amazon; price = 79.99; originalPrice = 129.00; discount = 38.0; buyNowUrl = "https://amazon.com/dp/zara-blazer"; inStock = true },
        { platform = #Flipkart; price = 74.99; originalPrice = 129.00; discount = 41.9; buyNowUrl = "https://flipkart.com/zara-blazer"; inStock = true },
        { platform = #eBay; price = 69.99; originalPrice = 129.00; discount = 45.7; buyNowUrl = "https://ebay.com/zara-blazer"; inStock = false },
        { platform = #Other "Zara Store"; price = 129.00; originalPrice = 129.00; discount = 0.0; buyNowUrl = "https://zara.com/oversized-blazer"; inStock = true }
      ];
      averageRating = 4.2; reviewCount = 2100; tags = ["blazer", "formal", "fashion", "women"]
    });

    products.add({
      id = "p017"; title = "Under Armour UA RUSH Hoodie"; description = "Performance hoodie with UA RUSH fabric that recycles body energy.";
      category = "Clothing"; brand = "Under Armour"; imageUrl = "https://picsum.photos/seed/p017/400/300";
      platforms = [
        { platform = #Amazon; price = 64.99; originalPrice = 90.00; discount = 27.8; buyNowUrl = "https://amazon.com/dp/ua-rush-hoodie"; inStock = true },
        { platform = #Flipkart; price = 59.99; originalPrice = 90.00; discount = 33.3; buyNowUrl = "https://flipkart.com/ua-rush-hoodie"; inStock = true },
        { platform = #eBay; price = 54.99; originalPrice = 90.00; discount = 38.9; buyNowUrl = "https://ebay.com/ua-rush-hoodie"; inStock = true },
        { platform = #Other "UA Store"; price = 90.00; originalPrice = 90.00; discount = 0.0; buyNowUrl = "https://underarmour.com/ua-rush-hoodie"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 3800; tags = ["hoodie", "sport", "gym", "performance"]
    });

    // ── Home & Kitchen ────────────────────────────────────────────────────────
    products.add({
      id = "p018"; title = "Instant Pot Duo 7-in-1"; description = "Multi-use pressure cooker: pressure cook, slow cook, rice cooker, steamer, sauté, yogurt maker, warmer.";
      category = "Home & Kitchen"; brand = "Instant Pot"; imageUrl = "https://picsum.photos/seed/p018/400/300";
      platforms = [
        { platform = #Amazon; price = 79.95; originalPrice = 99.95; discount = 20.0; buyNowUrl = "https://amazon.com/dp/instant-pot-duo-7"; inStock = true },
        { platform = #Flipkart; price = 74.99; originalPrice = 99.95; discount = 25.0; buyNowUrl = "https://flipkart.com/instant-pot-duo-7"; inStock = true },
        { platform = #eBay; price = 69.99; originalPrice = 99.95; discount = 30.0; buyNowUrl = "https://ebay.com/instant-pot-duo-7"; inStock = true },
        { platform = #Other "Walmart"; price = 89.00; originalPrice = 99.95; discount = 10.9; buyNowUrl = "https://walmart.com/instant-pot-duo-7"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 25000; tags = ["kitchen", "cooking", "pressure cooker", "appliance"]
    });

    products.add({
      id = "p019"; title = "Dyson V15 Detect Vacuum"; description = "Powerful cordless vacuum with laser dust detection and LCD display.";
      category = "Home & Kitchen"; brand = "Dyson"; imageUrl = "https://picsum.photos/seed/p019/400/300";
      platforms = [
        { platform = #Amazon; price = 599.99; originalPrice = 749.99; discount = 20.0; buyNowUrl = "https://amazon.com/dp/dyson-v15"; inStock = true },
        { platform = #Flipkart; price = 579.99; originalPrice = 749.99; discount = 22.7; buyNowUrl = "https://flipkart.com/dyson-v15"; inStock = false },
        { platform = #eBay; price = 549.99; originalPrice = 749.99; discount = 26.7; buyNowUrl = "https://ebay.com/dyson-v15"; inStock = true },
        { platform = #Other "Dyson Store"; price = 749.99; originalPrice = 749.99; discount = 0.0; buyNowUrl = "https://dyson.com/v15-detect"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 4500; tags = ["vacuum", "cordless", "cleaning", "home"]
    });

    products.add({
      id = "p020"; title = "KitchenAid Artisan Stand Mixer"; description = "5-quart tilt-head stand mixer with 10 speeds and 59-point planetary mixing.";
      category = "Home & Kitchen"; brand = "KitchenAid"; imageUrl = "https://picsum.photos/seed/p020/400/300";
      platforms = [
        { platform = #Amazon; price = 329.99; originalPrice = 449.99; discount = 26.7; buyNowUrl = "https://amazon.com/dp/kitchenaid-artisan"; inStock = true },
        { platform = #Flipkart; price = 319.99; originalPrice = 449.99; discount = 28.9; buyNowUrl = "https://flipkart.com/kitchenaid-artisan"; inStock = true },
        { platform = #eBay; price = 299.99; originalPrice = 449.99; discount = 33.3; buyNowUrl = "https://ebay.com/kitchenaid-artisan"; inStock = true },
        { platform = #Other "Williams Sonoma"; price = 449.99; originalPrice = 449.99; discount = 0.0; buyNowUrl = "https://williams-sonoma.com/kitchenaid-artisan"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 18000; tags = ["mixer", "baking", "kitchen", "cooking"]
    });

    products.add({
      id = "p021"; title = "Nespresso Vertuo Next Coffee Machine"; description = "Brew 5 cup sizes with centrifusion technology, includes Aeroccino milk frother.";
      category = "Home & Kitchen"; brand = "Nespresso"; imageUrl = "https://picsum.photos/seed/p021/400/300";
      platforms = [
        { platform = #Amazon; price = 129.00; originalPrice = 179.00; discount = 27.9; buyNowUrl = "https://amazon.com/dp/nespresso-vertuo-next"; inStock = true },
        { platform = #Flipkart; price = 119.99; originalPrice = 179.00; discount = 33.0; buyNowUrl = "https://flipkart.com/nespresso-vertuo-next"; inStock = true },
        { platform = #eBay; price = 109.99; originalPrice = 179.00; discount = 38.5; buyNowUrl = "https://ebay.com/nespresso-vertuo-next"; inStock = true },
        { platform = #Other "Nespresso Store"; price = 179.00; originalPrice = 179.00; discount = 0.0; buyNowUrl = "https://nespresso.com/vertuo-next"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 7200; tags = ["coffee", "espresso", "kitchen", "appliance"]
    });

    products.add({
      id = "p022"; title = "Philips Hue Smart Bulb Starter Kit"; description = "4 white and color ambiance A19 bulbs with Hue Bridge, 16 million colors.";
      category = "Home & Kitchen"; brand = "Philips"; imageUrl = "https://picsum.photos/seed/p022/400/300";
      platforms = [
        { platform = #Amazon; price = 119.99; originalPrice = 199.99; discount = 40.0; buyNowUrl = "https://amazon.com/dp/philips-hue-starter"; inStock = true },
        { platform = #Flipkart; price = 114.99; originalPrice = 199.99; discount = 42.5; buyNowUrl = "https://flipkart.com/philips-hue-starter"; inStock = true },
        { platform = #eBay; price = 99.99; originalPrice = 199.99; discount = 50.0; buyNowUrl = "https://ebay.com/philips-hue-starter"; inStock = true },
        { platform = #Other "Home Depot"; price = 149.99; originalPrice = 199.99; discount = 25.0; buyNowUrl = "https://homedepot.com/philips-hue-starter"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 9800; tags = ["smart home", "lighting", "IoT", "Alexa", "color"]
    });

    products.add({
      id = "p023"; title = "iRobot Roomba i7+"; description = "Robot vacuum with automatic dirt disposal, smart mapping, and Alexa/Google support.";
      category = "Home & Kitchen"; brand = "iRobot"; imageUrl = "https://picsum.photos/seed/p023/400/300";
      platforms = [
        { platform = #Amazon; price = 499.99; originalPrice = 799.99; discount = 37.5; buyNowUrl = "https://amazon.com/dp/roomba-i7-plus"; inStock = true },
        { platform = #Flipkart; price = 479.99; originalPrice = 799.99; discount = 40.0; buyNowUrl = "https://flipkart.com/roomba-i7-plus"; inStock = true },
        { platform = #eBay; price = 449.99; originalPrice = 799.99; discount = 43.8; buyNowUrl = "https://ebay.com/roomba-i7-plus"; inStock = false },
        { platform = #Other "Best Buy"; price = 549.99; originalPrice = 799.99; discount = 31.3; buyNowUrl = "https://bestbuy.com/roomba-i7-plus"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 5600; tags = ["robot vacuum", "smart home", "cleaning", "IoT"]
    });

    products.add({
      id = "p024"; title = "Cuisinart 12-Piece Cookware Set"; description = "Multiclad Pro triple-ply stainless steel, oven-safe to 550°F.";
      category = "Home & Kitchen"; brand = "Cuisinart"; imageUrl = "https://picsum.photos/seed/p024/400/300";
      platforms = [
        { platform = #Amazon; price = 219.99; originalPrice = 350.00; discount = 37.1; buyNowUrl = "https://amazon.com/dp/cuisinart-12pc"; inStock = true },
        { platform = #Flipkart; price = 209.99; originalPrice = 350.00; discount = 40.0; buyNowUrl = "https://flipkart.com/cuisinart-12pc"; inStock = true },
        { platform = #eBay; price = 199.99; originalPrice = 350.00; discount = 42.9; buyNowUrl = "https://ebay.com/cuisinart-12pc"; inStock = true },
        { platform = #Other "Bed Bath Beyond"; price = 279.99; originalPrice = 350.00; discount = 20.0; buyNowUrl = "https://bedbathandbeyond.com/cuisinart-12pc"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 8900; tags = ["cookware", "kitchen", "stainless steel", "cooking"]
    });

    // ── Sports ───────────────────────────────────────────────────────────────
    products.add({
      id = "p025"; title = "Peloton Bike+"; description = "Smart exercise bike with rotating 23.8\" HD touchscreen, auto-follow resistance.";
      category = "Sports"; brand = "Peloton"; imageUrl = "https://picsum.photos/seed/p025/400/300";
      platforms = [
        { platform = #Amazon; price = 2495.00; originalPrice = 2495.00; discount = 0.0; buyNowUrl = "https://amazon.com/dp/peloton-bike-plus"; inStock = true },
        { platform = #Flipkart; price = 2395.00; originalPrice = 2495.00; discount = 4.0; buyNowUrl = "https://flipkart.com/peloton-bike-plus"; inStock = false },
        { platform = #eBay; price = 2199.00; originalPrice = 2495.00; discount = 11.9; buyNowUrl = "https://ebay.com/peloton-bike-plus"; inStock = true },
        { platform = #Other "Peloton Store"; price = 2495.00; originalPrice = 2495.00; discount = 0.0; buyNowUrl = "https://onepeloton.com/bike-plus"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 2300; tags = ["fitness", "bike", "cycling", "exercise"]
    });

    products.add({
      id = "p026"; title = "Bowflex SelectTech 552 Dumbbells"; description = "Adjustable dumbbells from 5 to 52.5 lbs, replaces 15 sets of weights.";
      category = "Sports"; brand = "Bowflex"; imageUrl = "https://picsum.photos/seed/p026/400/300";
      platforms = [
        { platform = #Amazon; price = 349.00; originalPrice = 429.00; discount = 18.6; buyNowUrl = "https://amazon.com/dp/bowflex-552"; inStock = true },
        { platform = #Flipkart; price = 329.99; originalPrice = 429.00; discount = 23.1; buyNowUrl = "https://flipkart.com/bowflex-552"; inStock = true },
        { platform = #eBay; price = 309.99; originalPrice = 429.00; discount = 27.7; buyNowUrl = "https://ebay.com/bowflex-552"; inStock = true },
        { platform = #Other "Dick's Sporting"; price = 399.99; originalPrice = 429.00; discount = 6.8; buyNowUrl = "https://dickssportinggoods.com/bowflex-552"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 7800; tags = ["dumbbell", "fitness", "gym", "weight training"]
    });

    products.add({
      id = "p027"; title = "Garmin Forerunner 955 Solar"; description = "GPS running watch with solar charging, triathlon mode, and advanced training metrics.";
      category = "Sports"; brand = "Garmin"; imageUrl = "https://picsum.photos/seed/p027/400/300";
      platforms = [
        { platform = #Amazon; price = 499.99; originalPrice = 599.99; discount = 16.7; buyNowUrl = "https://amazon.com/dp/garmin-fr955-solar"; inStock = true },
        { platform = #Flipkart; price = 479.99; originalPrice = 599.99; discount = 20.0; buyNowUrl = "https://flipkart.com/garmin-fr955-solar"; inStock = true },
        { platform = #eBay; price = 449.99; originalPrice = 599.99; discount = 25.0; buyNowUrl = "https://ebay.com/garmin-fr955-solar"; inStock = true },
        { platform = #Other "REI"; price = 549.99; originalPrice = 599.99; discount = 8.3; buyNowUrl = "https://rei.com/garmin-fr955-solar"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 1900; tags = ["watch", "GPS", "running", "triathlon", "sports"]
    });

    products.add({
      id = "p028"; title = "Wilson Pro Staff RF97 Tennis Racket"; description = "Roger Federer signature racket, 97 sq.in., braided graphite and basalt fibers.";
      category = "Sports"; brand = "Wilson"; imageUrl = "https://picsum.photos/seed/p028/400/300";
      platforms = [
        { platform = #Amazon; price = 199.99; originalPrice = 249.99; discount = 20.0; buyNowUrl = "https://amazon.com/dp/wilson-rf97"; inStock = true },
        { platform = #Flipkart; price = 189.99; originalPrice = 249.99; discount = 24.0; buyNowUrl = "https://flipkart.com/wilson-rf97"; inStock = true },
        { platform = #eBay; price = 174.99; originalPrice = 249.99; discount = 30.0; buyNowUrl = "https://ebay.com/wilson-rf97"; inStock = true },
        { platform = #Other "Tennis Warehouse"; price = 229.99; originalPrice = 249.99; discount = 8.0; buyNowUrl = "https://tennis-warehouse.com/wilson-rf97"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 1200; tags = ["tennis", "racket", "sport", "Wilson"]
    });

    products.add({
      id = "p029"; title = "TRX All-in-One Suspension Trainer"; description = "Full-body workout system, anchors to any door or overhead beam, includes workouts.";
      category = "Sports"; brand = "TRX"; imageUrl = "https://picsum.photos/seed/p029/400/300";
      platforms = [
        { platform = #Amazon; price = 159.95; originalPrice = 199.95; discount = 20.0; buyNowUrl = "https://amazon.com/dp/trx-all-in-one"; inStock = true },
        { platform = #Flipkart; price = 149.99; originalPrice = 199.95; discount = 25.0; buyNowUrl = "https://flipkart.com/trx-all-in-one"; inStock = true },
        { platform = #eBay; price = 139.99; originalPrice = 199.95; discount = 30.0; buyNowUrl = "https://ebay.com/trx-all-in-one"; inStock = true },
        { platform = #Other "TRX Store"; price = 199.95; originalPrice = 199.95; discount = 0.0; buyNowUrl = "https://trxtraining.com/all-in-one"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 6400; tags = ["suspension trainer", "fitness", "body weight", "gym"]
    });

    products.add({
      id = "p030"; title = "Yeti Rambler 20 oz Tumbler"; description = "Stainless steel insulated tumbler with MagSlider lid, keeps drinks cold or hot for hours.";
      category = "Sports"; brand = "Yeti"; imageUrl = "https://picsum.photos/seed/p030/400/300";
      platforms = [
        { platform = #Amazon; price = 29.98; originalPrice = 35.00; discount = 14.3; buyNowUrl = "https://amazon.com/dp/yeti-rambler-20oz"; inStock = true },
        { platform = #Flipkart; price = 27.99; originalPrice = 35.00; discount = 20.0; buyNowUrl = "https://flipkart.com/yeti-rambler-20oz"; inStock = true },
        { platform = #eBay; price = 24.99; originalPrice = 35.00; discount = 28.6; buyNowUrl = "https://ebay.com/yeti-rambler-20oz"; inStock = true },
        { platform = #Other "REI"; price = 35.00; originalPrice = 35.00; discount = 0.0; buyNowUrl = "https://rei.com/yeti-rambler-20oz"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 22000; tags = ["tumbler", "hydration", "outdoor", "insulated"]
    });

    products.add({
      id = "p031"; title = "Fitbit Charge 6"; description = "Advanced fitness tracker with built-in GPS, heart rate monitoring, and 7-day battery.";
      category = "Sports"; brand = "Fitbit"; imageUrl = "https://picsum.photos/seed/p031/400/300";
      platforms = [
        { platform = #Amazon; price = 129.95; originalPrice = 159.95; discount = 18.8; buyNowUrl = "https://amazon.com/dp/fitbit-charge-6"; inStock = true },
        { platform = #Flipkart; price = 119.99; originalPrice = 159.95; discount = 25.0; buyNowUrl = "https://flipkart.com/fitbit-charge-6"; inStock = true },
        { platform = #eBay; price = 109.99; originalPrice = 159.95; discount = 31.2; buyNowUrl = "https://ebay.com/fitbit-charge-6"; inStock = true },
        { platform = #Other "Google Store"; price = 159.95; originalPrice = 159.95; discount = 0.0; buyNowUrl = "https://store.google.com/fitbit-charge-6"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 4700; tags = ["fitness tracker", "wearable", "health", "GPS"]
    });

    // ── Books ─────────────────────────────────────────────────────────────────
    products.add({
      id = "p032"; title = "Atomic Habits by James Clear"; description = "Bestselling guide to building good habits and breaking bad ones with proven frameworks.";
      category = "Books"; brand = "Penguin"; imageUrl = "https://picsum.photos/seed/p032/400/300";
      platforms = [
        { platform = #Amazon; price = 13.99; originalPrice = 27.00; discount = 48.2; buyNowUrl = "https://amazon.com/dp/atomic-habits"; inStock = true },
        { platform = #Flipkart; price = 12.99; originalPrice = 27.00; discount = 51.9; buyNowUrl = "https://flipkart.com/atomic-habits"; inStock = true },
        { platform = #eBay; price = 10.99; originalPrice = 27.00; discount = 59.3; buyNowUrl = "https://ebay.com/atomic-habits"; inStock = true },
        { platform = #Other "Barnes Noble"; price = 22.00; originalPrice = 27.00; discount = 18.5; buyNowUrl = "https://barnesandnoble.com/atomic-habits"; inStock = true }
      ];
      averageRating = 4.9; reviewCount = 95000; tags = ["self-help", "habits", "productivity", "bestseller"]
    });

    products.add({
      id = "p033"; title = "The Psychology of Money"; description = "Morgan Housel's timeless lessons on wealth, greed, and happiness.";
      category = "Books"; brand = "Harriman House"; imageUrl = "https://picsum.photos/seed/p033/400/300";
      platforms = [
        { platform = #Amazon; price = 14.29; originalPrice = 25.00; discount = 42.8; buyNowUrl = "https://amazon.com/dp/psychology-of-money"; inStock = true },
        { platform = #Flipkart; price = 13.49; originalPrice = 25.00; discount = 46.0; buyNowUrl = "https://flipkart.com/psychology-of-money"; inStock = true },
        { platform = #eBay; price = 11.99; originalPrice = 25.00; discount = 52.0; buyNowUrl = "https://ebay.com/psychology-of-money"; inStock = true },
        { platform = #Other "Bookshop"; price = 22.00; originalPrice = 25.00; discount = 12.0; buyNowUrl = "https://bookshop.org/psychology-of-money"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 42000; tags = ["finance", "investing", "money", "bestseller"]
    });

    products.add({
      id = "p034"; title = "Deep Work by Cal Newport"; description = "Rules for focused success in a distracted world — how to cultivate deep concentration.";
      category = "Books"; brand = "Grand Central"; imageUrl = "https://picsum.photos/seed/p034/400/300";
      platforms = [
        { platform = #Amazon; price = 14.99; originalPrice = 28.00; discount = 46.5; buyNowUrl = "https://amazon.com/dp/deep-work-newport"; inStock = true },
        { platform = #Flipkart; price = 13.99; originalPrice = 28.00; discount = 50.0; buyNowUrl = "https://flipkart.com/deep-work-newport"; inStock = true },
        { platform = #eBay; price = 11.50; originalPrice = 28.00; discount = 58.9; buyNowUrl = "https://ebay.com/deep-work-newport"; inStock = true },
        { platform = #Other "Barnes Noble"; price = 24.00; originalPrice = 28.00; discount = 14.3; buyNowUrl = "https://barnesandnoble.com/deep-work"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 28000; tags = ["productivity", "focus", "work", "self-help"]
    });

    products.add({
      id = "p035"; title = "Sapiens: A Brief History of Humankind"; description = "Yuval Noah Harari's acclaimed account of the human species and civilization.";
      category = "Books"; brand = "Harper Perennial"; imageUrl = "https://picsum.photos/seed/p035/400/300";
      platforms = [
        { platform = #Amazon; price = 13.49; originalPrice = 22.99; discount = 41.3; buyNowUrl = "https://amazon.com/dp/sapiens-harari"; inStock = true },
        { platform = #Flipkart; price = 12.99; originalPrice = 22.99; discount = 43.5; buyNowUrl = "https://flipkart.com/sapiens-harari"; inStock = true },
        { platform = #eBay; price = 10.49; originalPrice = 22.99; discount = 54.4; buyNowUrl = "https://ebay.com/sapiens-harari"; inStock = true },
        { platform = #Other "Bookshop"; price = 19.99; originalPrice = 22.99; discount = 13.0; buyNowUrl = "https://bookshop.org/sapiens"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 68000; tags = ["history", "anthropology", "science", "bestseller"]
    });

    products.add({
      id = "p036"; title = "Zero to One by Peter Thiel"; description = "Notes on startups, how to build the future, and creating monopolies that matter.";
      category = "Books"; brand = "Crown Business"; imageUrl = "https://picsum.photos/seed/p036/400/300";
      platforms = [
        { platform = #Amazon; price = 15.99; originalPrice = 27.00; discount = 40.7; buyNowUrl = "https://amazon.com/dp/zero-to-one"; inStock = true },
        { platform = #Flipkart; price = 14.99; originalPrice = 27.00; discount = 44.5; buyNowUrl = "https://flipkart.com/zero-to-one"; inStock = true },
        { platform = #eBay; price = 12.99; originalPrice = 27.00; discount = 51.9; buyNowUrl = "https://ebay.com/zero-to-one"; inStock = true },
        { platform = #Other "Barnes Noble"; price = 23.00; originalPrice = 27.00; discount = 14.8; buyNowUrl = "https://barnesandnoble.com/zero-to-one"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 35000; tags = ["business", "startup", "entrepreneurship", "tech"]
    });

    products.add({
      id = "p037"; title = "The Lean Startup by Eric Ries"; description = "How today's entrepreneurs use continuous innovation to create successful businesses.";
      category = "Books"; brand = "Crown Business"; imageUrl = "https://picsum.photos/seed/p037/400/300";
      platforms = [
        { platform = #Amazon; price = 16.99; originalPrice = 28.00; discount = 39.3; buyNowUrl = "https://amazon.com/dp/lean-startup"; inStock = true },
        { platform = #Flipkart; price = 15.49; originalPrice = 28.00; discount = 44.7; buyNowUrl = "https://flipkart.com/lean-startup"; inStock = true },
        { platform = #eBay; price = 12.50; originalPrice = 28.00; discount = 55.4; buyNowUrl = "https://ebay.com/lean-startup"; inStock = true },
        { platform = #Other "Bookshop"; price = 24.00; originalPrice = 28.00; discount = 14.3; buyNowUrl = "https://bookshop.org/lean-startup"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 22000; tags = ["business", "startup", "agile", "innovation"]
    });

    products.add({
      id = "p038"; title = "Thinking, Fast and Slow"; description = "Daniel Kahneman's exploration of the two systems that drive the way we think.";
      category = "Books"; brand = "Farrar Straus"; imageUrl = "https://picsum.photos/seed/p038/400/300";
      platforms = [
        { platform = #Amazon; price = 14.49; originalPrice = 30.00; discount = 51.7; buyNowUrl = "https://amazon.com/dp/thinking-fast-slow"; inStock = true },
        { platform = #Flipkart; price = 13.49; originalPrice = 30.00; discount = 55.0; buyNowUrl = "https://flipkart.com/thinking-fast-slow"; inStock = true },
        { platform = #eBay; price = 11.99; originalPrice = 30.00; discount = 60.0; buyNowUrl = "https://ebay.com/thinking-fast-slow"; inStock = true },
        { platform = #Other "Barnes Noble"; price = 26.00; originalPrice = 30.00; discount = 13.3; buyNowUrl = "https://barnesandnoble.com/thinking-fast-slow"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 51000; tags = ["psychology", "thinking", "decision making", "science"]
    });

    // ── Beauty ────────────────────────────────────────────────────────────────
    products.add({
      id = "p039"; title = "Dyson Airwrap Multi-Styler"; description = "Curl, wave, smooth, and dry with no extreme heat damage. Multiple attachments included.";
      category = "Beauty"; brand = "Dyson"; imageUrl = "https://picsum.photos/seed/p039/400/300";
      platforms = [
        { platform = #Amazon; price = 479.99; originalPrice = 599.99; discount = 20.0; buyNowUrl = "https://amazon.com/dp/dyson-airwrap"; inStock = true },
        { platform = #Flipkart; price = 459.99; originalPrice = 599.99; discount = 23.3; buyNowUrl = "https://flipkart.com/dyson-airwrap"; inStock = true },
        { platform = #eBay; price = 429.99; originalPrice = 599.99; discount = 28.3; buyNowUrl = "https://ebay.com/dyson-airwrap"; inStock = false },
        { platform = #Other "Sephora"; price = 599.99; originalPrice = 599.99; discount = 0.0; buyNowUrl = "https://sephora.com/dyson-airwrap"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 8900; tags = ["hair", "styling", "beauty", "Dyson"]
    });

    products.add({
      id = "p040"; title = "La Mer Crème de la Mer Moisturizing Cream"; description = "Legendary moisturizer with Miracle Broth, heals and transforms skin.";
      category = "Beauty"; brand = "La Mer"; imageUrl = "https://picsum.photos/seed/p040/400/300";
      platforms = [
        { platform = #Amazon; price = 195.00; originalPrice = 215.00; discount = 9.3; buyNowUrl = "https://amazon.com/dp/la-mer-creme"; inStock = true },
        { platform = #Flipkart; price = 185.00; originalPrice = 215.00; discount = 14.0; buyNowUrl = "https://flipkart.com/la-mer-creme"; inStock = true },
        { platform = #eBay; price = 175.00; originalPrice = 215.00; discount = 18.6; buyNowUrl = "https://ebay.com/la-mer-creme"; inStock = true },
        { platform = #Other "Nordstrom"; price = 215.00; originalPrice = 215.00; discount = 0.0; buyNowUrl = "https://nordstrom.com/la-mer-creme"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 6200; tags = ["skincare", "moisturizer", "luxury", "beauty"]
    });

    products.add({
      id = "p041"; title = "Charlotte Tilbury Flawless Filter Primer"; description = "Complexion booster for a glowing, filtered finish. Wear alone or under makeup.";
      category = "Beauty"; brand = "Charlotte Tilbury"; imageUrl = "https://picsum.photos/seed/p041/400/300";
      platforms = [
        { platform = #Amazon; price = 42.00; originalPrice = 49.00; discount = 14.3; buyNowUrl = "https://amazon.com/dp/ct-flawless-filter"; inStock = true },
        { platform = #Flipkart; price = 39.99; originalPrice = 49.00; discount = 18.4; buyNowUrl = "https://flipkart.com/ct-flawless-filter"; inStock = true },
        { platform = #eBay; price = 36.99; originalPrice = 49.00; discount = 24.5; buyNowUrl = "https://ebay.com/ct-flawless-filter"; inStock = true },
        { platform = #Other "Sephora"; price = 49.00; originalPrice = 49.00; discount = 0.0; buyNowUrl = "https://sephora.com/ct-flawless-filter"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 14000; tags = ["makeup", "primer", "glow", "beauty"]
    });

    products.add({
      id = "p042"; title = "Olaplex No.3 Hair Perfector"; description = "At-home treatment that reduces breakage and visibly strengthens hair.";
      category = "Beauty"; brand = "Olaplex"; imageUrl = "https://picsum.photos/seed/p042/400/300";
      platforms = [
        { platform = #Amazon; price = 28.00; originalPrice = 30.00; discount = 6.7; buyNowUrl = "https://amazon.com/dp/olaplex-no3"; inStock = true },
        { platform = #Flipkart; price = 26.99; originalPrice = 30.00; discount = 10.0; buyNowUrl = "https://flipkart.com/olaplex-no3"; inStock = true },
        { platform = #eBay; price = 24.99; originalPrice = 30.00; discount = 16.7; buyNowUrl = "https://ebay.com/olaplex-no3"; inStock = true },
        { platform = #Other "Ulta"; price = 30.00; originalPrice = 30.00; discount = 0.0; buyNowUrl = "https://ulta.com/olaplex-no3"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 31000; tags = ["hair care", "treatment", "bond repair", "beauty"]
    });

    products.add({
      id = "p043"; title = "Tatcha The Water Cream"; description = "Oil-free moisturizer with Japanese botanicals that visibly refines pores.";
      category = "Beauty"; brand = "Tatcha"; imageUrl = "https://picsum.photos/seed/p043/400/300";
      platforms = [
        { platform = #Amazon; price = 68.00; originalPrice = 72.00; discount = 5.6; buyNowUrl = "https://amazon.com/dp/tatcha-water-cream"; inStock = true },
        { platform = #Flipkart; price = 64.99; originalPrice = 72.00; discount = 9.7; buyNowUrl = "https://flipkart.com/tatcha-water-cream"; inStock = true },
        { platform = #eBay; price = 59.99; originalPrice = 72.00; discount = 16.7; buyNowUrl = "https://ebay.com/tatcha-water-cream"; inStock = true },
        { platform = #Other "Sephora"; price = 72.00; originalPrice = 72.00; discount = 0.0; buyNowUrl = "https://sephora.com/tatcha-water-cream"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 9700; tags = ["skincare", "moisturizer", "pores", "beauty"]
    });

    products.add({
      id = "p044"; title = "Foreo Luna 4 Face Massager"; description = "Sonic facial cleanser and massager with 16 intensity levels and app-enabled routines.";
      category = "Beauty"; brand = "Foreo"; imageUrl = "https://picsum.photos/seed/p044/400/300";
      platforms = [
        { platform = #Amazon; price = 149.00; originalPrice = 219.00; discount = 32.0; buyNowUrl = "https://amazon.com/dp/foreo-luna-4"; inStock = true },
        { platform = #Flipkart; price = 139.00; originalPrice = 219.00; discount = 36.5; buyNowUrl = "https://flipkart.com/foreo-luna-4"; inStock = true },
        { platform = #eBay; price = 129.00; originalPrice = 219.00; discount = 41.1; buyNowUrl = "https://ebay.com/foreo-luna-4"; inStock = false },
        { platform = #Other "Sephora"; price = 219.00; originalPrice = 219.00; discount = 0.0; buyNowUrl = "https://sephora.com/foreo-luna-4"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 5300; tags = ["skincare", "cleansing", "facial", "device", "beauty"]
    });

    // ── More Electronics ──────────────────────────────────────────────────────
    products.add({
      id = "p045"; title = "Bose QuietComfort 45 Headphones"; description = "Quiet comfort mode and aware mode, 24-hour battery, premium audio quality.";
      category = "Electronics"; brand = "Bose"; imageUrl = "https://picsum.photos/seed/p045/400/300";
      platforms = [
        { platform = #Amazon; price = 249.00; originalPrice = 329.00; discount = 24.3; buyNowUrl = "https://amazon.com/dp/bose-qc45"; inStock = true },
        { platform = #Flipkart; price = 239.00; originalPrice = 329.00; discount = 27.4; buyNowUrl = "https://flipkart.com/bose-qc45"; inStock = true },
        { platform = #eBay; price = 219.00; originalPrice = 329.00; discount = 33.4; buyNowUrl = "https://ebay.com/bose-qc45"; inStock = true },
        { platform = #Other "Best Buy"; price = 279.00; originalPrice = 329.00; discount = 15.2; buyNowUrl = "https://bestbuy.com/bose-qc45"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 5400; tags = ["headphones", "noise-cancelling", "wireless", "audio", "Bose"]
    });

    products.add({
      id = "p046"; title = "Google Pixel 8 Pro"; description = "Google's flagship with Tensor G3, 50MP triple camera, 7 years of OS updates.";
      category = "Electronics"; brand = "Google"; imageUrl = "https://picsum.photos/seed/p046/400/300";
      platforms = [
        { platform = #Amazon; price = 899.00; originalPrice = 999.00; discount = 10.0; buyNowUrl = "https://amazon.com/dp/google-pixel-8-pro"; inStock = true },
        { platform = #Flipkart; price = 879.00; originalPrice = 999.00; discount = 12.0; buyNowUrl = "https://flipkart.com/google-pixel-8-pro"; inStock = true },
        { platform = #eBay; price = 849.00; originalPrice = 999.00; discount = 15.0; buyNowUrl = "https://ebay.com/google-pixel-8-pro"; inStock = true },
        { platform = #Other "Google Store"; price = 999.00; originalPrice = 999.00; discount = 0.0; buyNowUrl = "https://store.google.com/pixel-8-pro"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 3800; tags = ["smartphone", "Android", "5G", "AI", "camera"]
    });

    products.add({
      id = "p047"; title = "LG C3 55\" OLED TV"; description = "Self-lit OLED pixels, NVIDIA G-Sync, Dolby Vision IQ, perfect blacks.";
      category = "Electronics"; brand = "LG"; imageUrl = "https://picsum.photos/seed/p047/400/300";
      platforms = [
        { platform = #Amazon; price = 999.99; originalPrice = 1499.99; discount = 33.3; buyNowUrl = "https://amazon.com/dp/lg-c3-oled-55"; inStock = true },
        { platform = #Flipkart; price = 969.99; originalPrice = 1499.99; discount = 35.3; buyNowUrl = "https://flipkart.com/lg-c3-oled-55"; inStock = true },
        { platform = #eBay; price = 939.99; originalPrice = 1499.99; discount = 37.3; buyNowUrl = "https://ebay.com/lg-c3-oled-55"; inStock = false },
        { platform = #Other "Best Buy"; price = 1099.99; originalPrice = 1499.99; discount = 26.7; buyNowUrl = "https://bestbuy.com/lg-c3-oled-55"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 6100; tags = ["TV", "OLED", "4K", "gaming", "smart TV"]
    });

    products.add({
      id = "p048"; title = "Kindle Paperwhite 11th Gen"; description = "6.8-inch glare-free display, 300 ppi, IPX8 waterproof, 10-week battery.";
      category = "Electronics"; brand = "Amazon"; imageUrl = "https://picsum.photos/seed/p048/400/300";
      platforms = [
        { platform = #Amazon; price = 99.99; originalPrice = 139.99; discount = 28.6; buyNowUrl = "https://amazon.com/dp/kindle-paperwhite-11"; inStock = true },
        { platform = #Flipkart; price = 94.99; originalPrice = 139.99; discount = 32.1; buyNowUrl = "https://flipkart.com/kindle-paperwhite-11"; inStock = true },
        { platform = #eBay; price = 84.99; originalPrice = 139.99; discount = 39.3; buyNowUrl = "https://ebay.com/kindle-paperwhite-11"; inStock = true },
        { platform = #Other "Walmart"; price = 114.99; originalPrice = 139.99; discount = 17.9; buyNowUrl = "https://walmart.com/kindle-paperwhite-11"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 29000; tags = ["ebook", "reader", "Kindle", "waterproof"]
    });

    products.add({
      id = "p049"; title = "Ring Video Doorbell Pro 2"; description = "HD 1536p video, 3D motion detection, dual-band Wi-Fi, built-in Alexa.";
      category = "Electronics"; brand = "Ring"; imageUrl = "https://picsum.photos/seed/p049/400/300";
      platforms = [
        { platform = #Amazon; price = 149.99; originalPrice = 249.99; discount = 40.0; buyNowUrl = "https://amazon.com/dp/ring-doorbell-pro2"; inStock = true },
        { platform = #Flipkart; price = 139.99; originalPrice = 249.99; discount = 44.0; buyNowUrl = "https://flipkart.com/ring-doorbell-pro2"; inStock = true },
        { platform = #eBay; price = 129.99; originalPrice = 249.99; discount = 48.0; buyNowUrl = "https://ebay.com/ring-doorbell-pro2"; inStock = true },
        { platform = #Other "Home Depot"; price = 199.99; originalPrice = 249.99; discount = 20.0; buyNowUrl = "https://homedepot.com/ring-doorbell-pro2"; inStock = true }
      ];
      averageRating = 4.5; reviewCount = 11000; tags = ["smart home", "doorbell", "security", "camera", "IoT"]
    });

    products.add({
      id = "p050"; title = "Anker 737 Power Bank (PowerCore 24K)"; description = "24,000mAh with 140W max output, charges MacBook Pro in 1.5 hours.";
      category = "Electronics"; brand = "Anker"; imageUrl = "https://picsum.photos/seed/p050/400/300";
      platforms = [
        { platform = #Amazon; price = 99.99; originalPrice = 139.99; discount = 28.6; buyNowUrl = "https://amazon.com/dp/anker-737-powercore"; inStock = true },
        { platform = #Flipkart; price = 94.99; originalPrice = 139.99; discount = 32.1; buyNowUrl = "https://flipkart.com/anker-737-powercore"; inStock = true },
        { platform = #eBay; price = 84.99; originalPrice = 139.99; discount = 39.3; buyNowUrl = "https://ebay.com/anker-737-powercore"; inStock = true },
        { platform = #Other "Anker Store"; price = 139.99; originalPrice = 139.99; discount = 0.0; buyNowUrl = "https://anker.com/737-powercore"; inStock = true }
      ];
      averageRating = 4.7; reviewCount = 8700; tags = ["power bank", "charging", "portable", "fast charge"]
    });

    products.add({
      id = "p051"; title = "Sony PlayStation 5 Console"; description = "Next-gen gaming with ultra-high speed SSD, DualSense haptic feedback, 4K gaming.";
      category = "Electronics"; brand = "Sony"; imageUrl = "https://picsum.photos/seed/p051/400/300";
      platforms = [
        { platform = #Amazon; price = 499.99; originalPrice = 499.99; discount = 0.0; buyNowUrl = "https://amazon.com/dp/sony-ps5"; inStock = true },
        { platform = #Flipkart; price = 489.99; originalPrice = 499.99; discount = 2.0; buyNowUrl = "https://flipkart.com/sony-ps5"; inStock = false },
        { platform = #eBay; price = 479.00; originalPrice = 499.99; discount = 4.2; buyNowUrl = "https://ebay.com/sony-ps5"; inStock = true },
        { platform = #Other "GameStop"; price = 499.99; originalPrice = 499.99; discount = 0.0; buyNowUrl = "https://gamestop.com/sony-ps5"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 34000; tags = ["gaming", "console", "PS5", "4K"]
    });

    products.add({
      id = "p052"; title = "GoPro Hero 12 Black"; description = "5.3K video, HyperSmooth 6.0, waterproof to 33ft, Enduro battery for extended use.";
      category = "Electronics"; brand = "GoPro"; imageUrl = "https://picsum.photos/seed/p052/400/300";
      platforms = [
        { platform = #Amazon; price = 349.99; originalPrice = 399.99; discount = 12.5; buyNowUrl = "https://amazon.com/dp/gopro-hero12"; inStock = true },
        { platform = #Flipkart; price = 329.99; originalPrice = 399.99; discount = 17.5; buyNowUrl = "https://flipkart.com/gopro-hero12"; inStock = true },
        { platform = #eBay; price = 309.99; originalPrice = 399.99; discount = 22.5; buyNowUrl = "https://ebay.com/gopro-hero12"; inStock = true },
        { platform = #Other "GoPro Store"; price = 399.99; originalPrice = 399.99; discount = 0.0; buyNowUrl = "https://gopro.com/hero12-black"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 3200; tags = ["camera", "action camera", "video", "waterproof", "outdoor"]
    });

    products.add({
      id = "p053"; title = "Asus ROG Strix G16 Gaming Laptop"; description = "Intel Core i9-13980HX, RTX 4080, 240Hz QHD display, 32GB DDR5.";
      category = "Electronics"; brand = "Asus"; imageUrl = "https://picsum.photos/seed/p053/400/300";
      platforms = [
        { platform = #Amazon; price = 2199.99; originalPrice = 2699.99; discount = 18.5; buyNowUrl = "https://amazon.com/dp/asus-rog-g16"; inStock = true },
        { platform = #Flipkart; price = 2149.99; originalPrice = 2699.99; discount = 20.4; buyNowUrl = "https://flipkart.com/asus-rog-g16"; inStock = true },
        { platform = #eBay; price = 2049.99; originalPrice = 2699.99; discount = 24.1; buyNowUrl = "https://ebay.com/asus-rog-g16"; inStock = false },
        { platform = #Other "Newegg"; price = 2299.99; originalPrice = 2699.99; discount = 14.8; buyNowUrl = "https://newegg.com/asus-rog-g16"; inStock = true }
      ];
      averageRating = 4.6; reviewCount = 1400; tags = ["gaming laptop", "RTX", "high performance", "ROG"]
    });

    products.add({
      id = "p054"; title = "Amazon Echo Show 10"; description = "10.1\" HD smart display with Alexa, motion tracking, and stereo sound.";
      category = "Electronics"; brand = "Amazon"; imageUrl = "https://picsum.photos/seed/p054/400/300";
      platforms = [
        { platform = #Amazon; price = 199.99; originalPrice = 249.99; discount = 20.0; buyNowUrl = "https://amazon.com/dp/echo-show-10"; inStock = true },
        { platform = #Flipkart; price = 189.99; originalPrice = 249.99; discount = 24.0; buyNowUrl = "https://flipkart.com/echo-show-10"; inStock = true },
        { platform = #eBay; price = 174.99; originalPrice = 249.99; discount = 30.0; buyNowUrl = "https://ebay.com/echo-show-10"; inStock = true },
        { platform = #Other "Best Buy"; price = 214.99; originalPrice = 249.99; discount = 14.0; buyNowUrl = "https://bestbuy.com/echo-show-10"; inStock = true }
      ];
      averageRating = 4.4; reviewCount = 7800; tags = ["smart display", "Alexa", "smart home", "Echo"]
    });

    products.add({
      id = "p055"; title = "Logitech MX Master 3S Mouse"; description = "8K DPI sensor, MagSpeed electromagnetic scroll, USB-C charging, silent clicks.";
      category = "Electronics"; brand = "Logitech"; imageUrl = "https://picsum.photos/seed/p055/400/300";
      platforms = [
        { platform = #Amazon; price = 79.99; originalPrice = 99.99; discount = 20.0; buyNowUrl = "https://amazon.com/dp/logitech-mx-master-3s"; inStock = true },
        { platform = #Flipkart; price = 74.99; originalPrice = 99.99; discount = 25.0; buyNowUrl = "https://flipkart.com/logitech-mx-master-3s"; inStock = true },
        { platform = #eBay; price = 69.99; originalPrice = 99.99; discount = 30.0; buyNowUrl = "https://ebay.com/logitech-mx-master-3s"; inStock = true },
        { platform = #Other "Logitech Store"; price = 99.99; originalPrice = 99.99; discount = 0.0; buyNowUrl = "https://logitech.com/mx-master-3s"; inStock = true }
      ];
      averageRating = 4.8; reviewCount = 14500; tags = ["mouse", "productivity", "wireless", "ergonomic"]
    })
  }
};
