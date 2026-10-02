import { Product, Story, UserProfile, Order } from '../types';

// ============================================
// STORIES
// ============================================
export const STORIES_DATA: Story[] = [
  {
    id: 'story-men',
    title: "Men's",
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1618001789159-ffffe6f96ef2?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    storyImage: 'https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    subtitle: 'Tailored Italian Silhouettes & Structured Linens',
    featuredProductCount: 24,
  },
  {
    id: 'story-women',
    title: "Women's",
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    storyImage: 'https://images.unsplash.com/photo-1513094735237-8f2714d57c13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    subtitle: 'Fluid Mulberry Silks & Plissé Evening Cocktail Gowns',
    featuredProductCount: 38,
  },
  {
    id: 'story-coffee-cup',
    title: 'Mug',
    category: 'cup',
    imageUrl: 'https://www.octavius.in/cdn/shop/files/Ideal_for_stylish_gifting.png?v=1759148786&width=1100',
    storyImage: 'https://m.media-amazon.com/images/I/51DOu9skaCL._AC_UF894,1000_QL80_.jpg',
    subtitle: 'Artisan Ceramics & Handcrafted Morning Rituals',
    featuredProductCount: 12,
  }
];

// ============================================
// PRODUCTS
// ============================================
export const PRODUCTS_DATA: Product[] = [

  // ═════════════════════════════════════════
  // MEN'S WEAR
  // ═════════════════════════════════════════

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 1: DEELMO CASUAL SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-deelmo-cotton-blend-shirt',
    brand: 'DEELMO',
    name: "Men's Stylish Cotton Blend Casual Shirt",
    price: 495,
    originalPrice: 2599,
    discountPercent: 81,
    rating: 4.5,
    reviewCount: 1621,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91CXtpIx2WL._SX679_.jpg',
    altText: "Men's stylish cotton blend casual shirt with dual flap pockets in brown colorway",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Men's Stylish Cotton Blend Casual Shirt featuring a full-sleeve button-down design with dual flap pockets. Designed for a comfortable casual look with breathable cotton-blend fabric. Suitable for everyday styling, casual outings, office-casual looks, travel and regular wear.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Casual Fit',
    garmentCare: 'Follow the care instructions on product label',
    innerLining: 'Not specified',
    colors: [
      { name: 'Brown', hex: '#7a4b2a', imageUrl: 'https://m.media-amazon.com/images/I/71example-brown.jpg' },
      { name: 'Mustard Yellow', hex: '#d4af37', imageUrl: 'https://m.media-amazon.com/images/I/71example-mustard.jpg' },
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/71example-black.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/91K154fzhUL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/91lYIcpEeOL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81E+jcrJhUL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/81uEdahDB2L._SX679_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FXRS9K9D?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 2: HIGHLANDER BLACK POLO
  // ─────────────────────────────────────────
  {
    id: 'prod-highlander-men-tshirt',
    brand: 'HIGHLANDER',
    name: "Highlander Men's Striped Polo T-Shirt",
    price: 659,
    originalPrice: 2199,
    discountPercent: 70,
    rating: 4.3,
    reviewCount: 370,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1DwUQOUmeL._SX679_.jpg',
    altText: 'Highlander men striped polo t-shirt in black colorway',
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: 'Highlander Men T-Shirt featuring classic stripe design with polo collar. Comfortable fit suitable for everyday casual wear, outings, and travel.',
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1DwUQOUmeL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1DwUQOUmeL._SX679_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/711aDjrhSHL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/813MCi1z+oL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81BxJKTBfvL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H6MSH94K?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 3: THE INDIAN GARAGE CHECKED SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-indian-garage-checked-shirt',
    brand: 'THE INDIAN GARAGE',
    name: "THE INDIAN GARAGE Men's Cotton Blend Checked Shirt",
    price: 454,
    originalPrice: 1749,
    discountPercent: 74,
    rating: 3.9,
    reviewCount: 1896,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81AF+ZMR2ZL._SX679_.jpg',
    altText: 'The Indian Garage men checked shirt in green and white colorway',
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "THE INDIAN GARAGE Men's Cotton Blend Checked Shirt with classic check pattern. Slim fit design suitable for casual and everyday wear.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Slim Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Green & White', hex: '#4a7c59', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81AF+ZMR2ZL._SX679_.jpg' },
      { name: 'Cream', hex: '#f5f5dc', imageUrl: 'https://m.media-amazon.com/images/I/71+jFg6QiwL._SY550_.jpg' },
      { name: 'Teal', hex: '#008080', imageUrl: 'https://m.media-amazon.com/images/I/71UKr+uR1ZL._SY550_.jpg' },
      { name: 'White & Navy', hex: '#001f3f', imageUrl: 'https://m.media-amazon.com/images/I/916TYamy-aL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71IriIJTidL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71zK+mZb2NL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61xRumyHSXL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71zcfWQdvPL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0BXLMFN4R?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 4: DEELMO PREMIUM CHECKED SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-deelmo-premium-checked-shirt',
    brand: 'DEELMO',
    name: "DEELMO Men's Premium Cotton Blend Printed Checkered Shirt",
    price: 499,
    originalPrice: 2499,
    discountPercent: 80,
    rating: 4.2,
    reviewCount: 158,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1nqSI4J4LL._SX679_.jpg',
    altText: 'DEELMO premium cotton blend checked shirt in green colorway',
    tag: '#1 BEST SELLER',
    isPrime: true,
    description: "DEELMO Men's Premium Cotton Blend Printed Checkered Shirt with full sleeve design. Soft and comfortable regular fit suitable for office, travel, and everyday wear.",
    fabricBlend: 'Premium Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Green', hex: '#2d5016', imageUrl: 'https://m.media-amazon.com/images/I/A1nqSI4J4LL._SX679_.jpg' },
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/A1K15NAR6pL._SX679_.jpg' },
      { name: 'Orange', hex: '#e67e22', imageUrl: 'https://m.media-amazon.com/images/I/71pXSLHjHSL._SX522_.jpg' },
      { name: 'Sky Blue', hex: '#87ceeb', imageUrl: 'https://m.media-amazon.com/images/I/A1oyiliWC1L._SX679_.jpg' },
    ],
    sizes: ['M', 'L', 'XL', '2XL', '3XL', '4XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61eSP+Bk7IL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71xHDk3cA7L._SX425_.jpg',
      'https://m.media-amazon.com/images/I/51GyvnVdlvL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/6160BtO24AL._SX425_.jpg',
    ],
    amazonUrl: 'https://link.amazon/B02M4UEcM',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 5: MASACIO KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-masacio-mandarin-kurta',
    brand: 'THE MASACIO STORE',
    name: "Masacio Men's Mandarin Collar Kurta",
    price: 499,
    originalPrice: 1499,
    discountPercent: 67,
    rating: 4.3,
    reviewCount: 247,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61f8LfLmFrL._SX569_.jpg',
    altText: "Masacio men's maroon mandarin collar kurta in cotton blend",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Masacio Men's Stylish Mandarin Collar Kurta with comfortable cotton blend fabric. Casual ethnic fusion shirt with full sleeves, perfect for daily wear, party, travel, and casual occasions.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Comfort Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Maroon', hex: '#800020', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61f8LfLmFrL._SX569_.jpg' },
      { name: 'White', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/61Vf+vcw0YL._SX569_.jpg' },
      { name: 'Golden', hex: '#d4af37', imageUrl: 'https://m.media-amazon.com/images/I/61oYUfxE3FL._SX569_.jpg' },
      { name: 'Peach', hex: '#ffcba4', imageUrl: 'https://m.media-amazon.com/images/I/81gYf9BjkIL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61eL+Ky5EHL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/61V2mMGk0RL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/61N8fJ8JBBL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/61LMLsm8e+L._SX522_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FFT9ZWWH?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 6: LONDON HILLS STRIPED POLO
  // ─────────────────────────────────────────
  {
    id: 'prod-london-hills-striped-polo',
    brand: 'LONDON HILLS',
    name: "London Hills Men's Loose Fit Striped Polo T-Shirt",
    price: 369,
    originalPrice: 1299,
    discountPercent: 72,
    rating: 4.2,
    reviewCount: 480,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81mhqLwaepL._SX679_.jpg',
    altText: "London Hills men's striped polo t-shirt with zipper collar",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "London Hills Men's Loose Fit Half Sleeve Vertical Striped Polo T-Shirt with Zip Collar. Premium polyester fabric, perfect for casual wear and travel.",
    fabricBlend: 'Premium Polyester Fabric',
    silhouettes: 'Loose Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: '1_Teal', hex: '#008080', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81mhqLwaepL._SX679_.jpg' },
      { name: '1_Jeans', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/I/81bIErd9j6L._SX679_.jpg' },
      { name: '1_Grey', hex: '#808080', imageUrl: 'https://m.media-amazon.com/images/I/81sptyOdIYL._SX679_.jpg' },
      { name: '1_Mustard', hex: '#d4af37', imageUrl: 'https://m.media-amazon.com/images/I/81Vkj0FEUzL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/712WDqNjtrL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/718DVF0UVXL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71948wOp62L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71R4jE1vMcL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GMWYFLDD?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 7: FAHME PREMIUM KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-fahme-premium-kurta',
    brand: 'FAHME',
    name: "FAHME Men's Premium Cotton Blend Kurta",
    price: 439,
    originalPrice: 1599,
    discountPercent: 73,
    rating: 4.2,
    reviewCount: 47,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/51LS8xiQSIL._SY500_.jpg',
    altText: "FAHME men's premium cotton blend green kurta with mandarin collar",
    tag: 'TOPVENT PICK',
    isPrime: false,
    description: "FAHME Men's Premium Cotton Blend Self Design Printed Casual Short Kurta with Long Sleeve Mandarin Collar. Stylish kurta shirt for men.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Green', hex: '#2d5016', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/51LS8xiQSIL._SY500_.jpg' },
      { name: 'Navy Blue', hex: '#0a1929', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/51AOwwzdxHL._SY500_.jpg' },
      { name: 'Maroon', hex: '#800020', imageUrl: 'https://m.media-amazon.com/images/I/51deBfkKfLL._SY500_.jpg' },
      { name: 'White', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/51tSWbcZ9XL._SY500_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51sppqah-iL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/71xw1jGs6GL._SX569_.jpg',
      'https://m.media-amazon.com/images/I/51ZqWI-o+3L._SY500_.jpg',
      'https://m.media-amazon.com/images/I/51XUaBLVR7L._SX522_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GK8YB7H1?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 8: ZOMBOM KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-zombom-casual-kurta',
    brand: 'ZOMBOM',
    name: "Zombom Men's Casual Short Kurta",
    price: 499,
    originalPrice: 1699,
    discountPercent: 71,
    rating: 4.1,
    reviewCount: 3458,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91eoxiGem+L._SX679_.jpg',
    altText: "Zombom men's sky blue casual short kurta with mandarin collar",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Zombom Cotton Polyester Blend Solid Casual Regular Fit Mandarin/Chinese Collar Short Kurta for Men. Comfortable and stylish for daily wear.",
    fabricBlend: 'Cotton Polyester Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Sky Blue', hex: '#87ceeb', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91eoxiGem+L._SX679_.jpg' },
      { name: 'Navy Blue', hex: '#0a1929', imageUrl: 'https://m.media-amazon.com/images/I/81p3N8D7jSL._SX679_.jpg' },
      { name: 'White', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/91yCzLf2TLL._SX679_.jpg' },
      { name: 'Brown', hex: '#7a4b2a', imageUrl: 'https://m.media-amazon.com/images/I/919DwKunsuL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61k0aqUJbOL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/718oBgWLd0L._SX466_.jpg',
      'https://m.media-amazon.com/images/I/61t0wdQaZOL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61PYdmD-EbL._SX425_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0D3XJHFJK?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 9: MAJESTIC MAN KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-majestic-man-kurta',
    brand: 'MAJESTIC MAN',
    name: "Majestic Man Men's Cotton Regular Fit Kurta",
    price: 699,
    originalPrice: 2499,
    discountPercent: 72,
    rating: 4.3,
    reviewCount: 1621,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91CuXBmilbL._SX679_.jpg',
    altText: "Majestic Man men's navy blue ethnic motifs printed long regular kurta",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Majestic Man Men's Cotton Regular Fit Casual Mandarin Collar Ethnic Motifs Printed Long Regular Kurta. Perfect for casual occasions.",
    fabricBlend: 'Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Navy Blue', hex: '#0a1929', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91CuXBmilbL._SX679_.jpg' },
      { name: 'Beige', hex: '#f5f5dc', imageUrl: 'https://m.media-amazon.com/images/I/919sZPhc-EL._SX679_.jpg' },
      { name: 'Yellow', hex: '#d4af37', imageUrl: 'https://m.media-amazon.com/images/I/91SrOoBUz3L._SX679_.jpg' },
      { name: 'Dark Green', hex: '#013220', imageUrl: 'https://m.media-amazon.com/images/I/91rojDTTa3L._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61T3NgtKL5L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61kMKglzQ-L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61mglcU5avL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71DFHrCmvgL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0CQ4HT57L?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 10: ABHANZA COTTON KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-abhanza-cotton-kurta',
    brand: 'ABHANZA',
    name: "ABHANZA Men's Printed Cotton Kurta",
    price: 799,
    originalPrice: 2500,
    discountPercent: 69,
    rating: 4.2,
    reviewCount: 156,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71rXWobJ6UL._SX679_.jpg',
    altText: "ABHANZA men's printed cotton kurta with mandarin collar",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "ABHANZA Men Printed Cotton Kurta with Mandarin Collar, Straight Fit Ethnic Wear Kurta. Full sleeve traditional kurta for festive and casual occasions.",
    fabricBlend: 'Cotton',
    silhouettes: 'Straight Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Multi Color', hex: '#8b4513', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71rXWobJ6UL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71rXWobJ6UL._SX679_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71YyPQ3EjpL._SX522_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71XRcAMnVML._SX522_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71XP39o5UAL._SX522_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H9XF1GC6?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 11: SMOWKLY SHIRT JACKET
  // ─────────────────────────────────────────
  {
    id: 'prod-smowkly-shirt-jacket',
    brand: 'SMOWKLY',
    name: "SMOWKLY Men's Casual Shirt Jacket",
    price: 743,
    originalPrice: 4499,
    discountPercent: 85,
    rating: 4.3,
    reviewCount: 133,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/818zmMf1guL._SX679_.jpg',
    altText: "SMOWKLY men's cream casual shirt jacket with full sleeve button down",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "SMOWKLY Men's Casual Shirt Jacket for Men with lightweight 100% cotton overshirt. Utility shacket with pockets, stylish for everyday wear. Full sleeve button down shirt.",
    fabricBlend: '100% Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Cream', hex: '#fffdd0', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/818zmMf1guL._SX679_.jpg' },
      { name: 'Olive Green', hex: '#556b2f', imageUrl: 'https://m.media-amazon.com/images/I/71RZaZphDrL._SX679_.jpg' },
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/71AFvcdJ2AL._SX679_.jpg' },
      { name: 'Grey', hex: '#808080', imageUrl: 'https://m.media-amazon.com/images/I/81iUblBHhiL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61X5XxCYUuL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51vtvg3BakL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61clZ1zc2xL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51daL184OpL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0G2HDSRW4?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 12: HIGHLANDER GREEN POLO
  // ─────────────────────────────────────────
  {
    id: 'prod-highlander-green-polo',
    brand: 'HIGHLANDER',
    name: "Highlander Men's Striped Polo T-Shirt (Green)",
    price: 659,
    originalPrice: 2199,
    discountPercent: 70,
    rating: 4.3,
    reviewCount: 370,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1y2bTjdoYL._SX679_.jpg',
    altText: "Highlander men's green striped polo t-shirt",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Highlander Men T-Shirt with classic vertical striped design in green colorway. Polo collar with short sleeves. Comfortable regular fit.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash Cold',
    innerLining: 'Not specified',
    colors: [
      { name: 'Green', hex: '#4a7c59', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1y2bTjdoYL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1y2bTjdoYL._SX679_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71+kGdVjHCL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/8177l4KSgWL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/917DYWNfkXL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H6MV622T?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 13: STILE-VITA POLO
  // ─────────────────────────────────────────
  {
    id: 'prod-eagle-line-stile-vita-polo',
    brand: 'STILE-VITA',
    name: "STILE-VITA Men's Solid Premium Polo T-Shirt",
    price: 799,
    originalPrice: 1999,
    discountPercent: 33,
    rating: 4.1,
    reviewCount: 3,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61NymQUMf6L._SX522_.jpg',
    altText: "STILE-VITA men's off-white solid premium polo t-shirt",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "STILE-VITA Men's Solid Premium Polo T-Shirt in cotton blend fabric. Elegant off-white color with classic polo collar and short sleeves.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Off White', hex: '#f5f5dc', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61NymQUMf6L._SX522_.jpg' },
      { name: 'Red', hex: '#c0392b', imageUrl: 'https://m.media-amazon.com/images/I/61laXvSkn+L._SX522_.jpg' },
      { name: 'Blue', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/I/61vWic+imxL._SX522_.jpg' },
      { name: 'Navy Blue', hex: '#0a1929', imageUrl: 'https://m.media-amazon.com/images/I/61ppJLTus3L._SX522_.jpg' },
    ],
    sizes: ['M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71ATzWMegTL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81Lk5PoxAsL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61pTu+MckHL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/51X4JlOjzqL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H3VKSN1V?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 14: LERIYA FASHION CREW NECK TEE
  // ─────────────────────────────────────────
  {
    id: 'prod-leriya-fashion-crew-neck-tee',
    brand: 'LERIYA FASHION',
    name: "Leriya Fashion Men's Crew Neck T-Shirt",
    price: 399,
    originalPrice: 1999,
    discountPercent: 80,
    rating: 4.2,
    reviewCount: 2954,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81AQLKsa4rL._SX679_.jpg',
    altText: "Leriya Fashion men's yellow crew neck breathable t-shirt",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Leriya Fashion Men's T-Shirt with soft breathable fabric. Regular fit half sleeve crew neck tee for summer casual wear.",
    fabricBlend: 'Soft Breathable Fabric',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Yellow', hex: '#ffd700', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81AQLKsa4rL._SX679_.jpg' },
      { name: 'Burgundy', hex: '#800020', imageUrl: 'https://m.media-amazon.com/images/I/81tJWtSOGvL._SX679_.jpg' },
      { name: 'White', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/91Kv5JwlQbL._SX679_.jpg' },
      { name: 'Pink', hex: '#ffb6c1', imageUrl: 'https://m.media-amazon.com/images/I/81kADAVVdsL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81AQLKsa4rL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/71shbRovmeL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71H2ripBJJL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71zj6TuF09L._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FT14GYML?tag=topvent-21',
  },
  
  // ─────────────────────────────────────────
  // MEN'S PRODUCT 15: NITE FLITE EBONY NIGHTWEAR
  // ─────────────────────────────────────────
  {
    id: 'prod-nite-flite-ebony',
    brand: 'NITE FLITE',
    name: "Ebony Men's 100% Cotton Nightwear",
    price: 1503,
    originalPrice: 1599,
    discountPercent: 6,
    rating: 3.5,
    reviewCount: 44,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/81hsWYRUKUL._SX679_.jpg',
    altText: "NITE FLITE Ebony Men's 100% Cotton Nightwear",
    tag: 'Fulfilled',
    isPrime: true,
    description: "NITE FLITE Ebony Men's 100% Cotton Nightwear. Comfortable and breathable cotton fabric, perfect for a good night's sleep.",
    fabricBlend: '100% Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/81hsWYRUKUL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51UE5COA1fL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/51CWTi5yE0L._SX522_.jpg',
      'https://m.media-amazon.com/images/I/61USAMXklHL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/61g-3I0GelL._SX522_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B09JZMGPZ1?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 16: NITE FLITE PICASSO NIGHTWEAR
  // ─────────────────────────────────────────
  {
    id: 'prod-nite-flite-picasso',
    brand: 'NITE FLITE',
    name: "Picasso Blue Men's Cotton Nightwear",
    price: 1503,
    originalPrice: 1599,
    discountPercent: 6,
    rating: 3.7,
    reviewCount: 23,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/717y21jZaYL._SX679_.jpg',
    altText: "NITE FLITE Picasso Blue Men's Cotton Nightwear",
    tag: 'Fulfilled',
    isPrime: true,
    description: "NITE FLITE Picasso Blue Men's Cotton Nightwear. Soft and comfortable cotton material for relaxed nights.",
    fabricBlend: 'Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Dark Blue', hex: '#000080', imageUrl: 'https://m.media-amazon.com/images/I/717y21jZaYL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51rVzKKKpCL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/51wOr9rqSdL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/51tbhpOfCaL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/817fAFE+yiL._SX522_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0CBK1BG6D?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 17: NITE FLITE SANGRIA NIGHTWEAR
  // ─────────────────────────────────────────
  {
    id: 'prod-nite-flite-sangria',
    brand: 'NITE FLITE',
    name: "Sangria Men's 100% Cotton Nightwear",
    price: 1430,
    originalPrice: 1599,
    discountPercent: 11,
    rating: 3.4,
    reviewCount: 58,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/81gubm9y+AL._SX679_.jpg',
    altText: "NITE FLITE Sangria Men's 100% Cotton Nightwear",
    tag: 'Fulfilled',
    isPrime: true,
    description: "NITE FLITE Sangria Men's 100% Cotton Nightwear. Premium quality nightwear for ultimate comfort.",
    fabricBlend: '100% Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Wine', hex: '#722F37', imageUrl: 'https://m.media-amazon.com/images/I/81gubm9y+AL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51OrA0zH+bL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/71kMxX0+lmL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/51Pm-1rLtBL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/61NcFb0F7sL._SX522_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B09JZN4RC4?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 18: DIJUCA MED SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-dijuca-med-shirt',
    brand: 'Dijuca Med',
    name: "Men's Cotton Blend Slim Fit Shirt",
    price: 279,
    originalPrice: 1649,
    discountPercent: 83,
    rating: 3.6,
    reviewCount: 53,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/91TSh5+PEiL._SX679_.jpg',
    altText: "Men's Cotton Blend Slim Fit Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Men's Cotton Blend Slim Fit Shirt | Full Sleeve Casual wear for Men | Comfortable Office Wear Shirt for All Seasons.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Slim Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Dark Brown', hex: '#654321', imageUrl: 'https://m.media-amazon.com/images/I/91TSh5+PEiL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71Wtv+VbDaL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71XGZVj3CaL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71d4YszJraL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71nGMJZAjSL._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H7WST3RK?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 19: VAYU MEN SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-vayu-men-shirt',
    brand: 'Vayu',
    name: "Men's Stylish Cotton Blend Casual Shirt",
    price: 349,
    originalPrice: 1099,
    discountPercent: 68,
    rating: 4.0,
    reviewCount: 50,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/7180HqtN-ML._SX679_.jpg',
    altText: "Vayu Men's Stylish Cotton Blend Casual Shirt",
    tag: 'bazaar Crazy Prices',
    isPrime: true,
    description: "Vayu Men's Stylish Cotton Blend Casual Shirt || Full Sleeve Button-Down with Pockets || Comfortable Breathable Fabric.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Navy Blue', hex: '#000080', imageUrl: 'https://m.media-amazon.com/images/I/7180HqtN-ML._SX679_.jpg' }
    ],
    sizes: ['M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51Rq5J-LyDL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61rInjkKmQL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61clu5RkHcL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61tp1-WWfCL._SX425_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GWNBXC5D?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 20: SHOWOFFFF SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-showoffff-shirt',
    brand: 'SHOWOFFFF',
    name: "Men Solid Casual Shirt",
    price: 855,
    originalPrice: 2440,
    discountPercent: 65,
    rating: 4.0,
    reviewCount: 50,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/81l-mwfN2BL._SX679_.jpg',
    altText: "SHOWOFFFF Men Solid Casual Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "SHOWOFFFF Men Solid Casual Shirt | Spread Collar Full Sleeves Cotton Shirt for Mens | Slim Fit Regular Length Shirt for Men's.",
    fabricBlend: 'Cotton',
    silhouettes: 'Slim Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Blue', hex: '#0000FF', imageUrl: 'https://m.media-amazon.com/images/I/81l-mwfN2BL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61O0liJYagL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51-U6IjNlbL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71JNfmqP+LL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51T-RruikUL._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0CM3247CK?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 21: NOBERO SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-nobero-shirt',
    brand: 'NOBERO',
    name: "Everyday Comfort Shirt for Men",
    price: 1399,
    originalPrice: 3799,
    discountPercent: 63,
    rating: 4.0,
    reviewCount: 14,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/712F4W+Or9L._SX679_.jpg',
    altText: "Nobero Everyday Comfort Shirt for Men",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Nobero Everyday Comfort Shirt for Men | Cotton Shirts for Men in 205 GSM Plated Interlock | Stand Collar | Regular Fit | Full Sleeve.",
    fabricBlend: 'Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Corydalis Blue', hex: '#87CEEB', imageUrl: 'https://m.media-amazon.com/images/I/712F4W+Or9L._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71O1IBddrEL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71SY772JhsL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/61z9f80truL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71n0RzVzISL._SX425_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GZP229NC?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 22: GRECIILOOKS SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-greciilooks-shirt',
    brand: 'GRECIILOOKS',
    name: "Men's Shirt Formal Button Down",
    price: 499,
    originalPrice: 1999,
    discountPercent: 75,
    rating: 3.8,
    reviewCount: 3532,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/81Hu7nrcanL._SX679_.jpg',
    altText: "GRECIILOOKS Men's Shirt Formal Button Down",
    tag: 'Fulfilled',
    isPrime: true,
    description: "GRECIILOOKS Men's Shirt | Formal Button Down – Slim Fit Office Shirt's for Men | Premium Textured Long Sleeve Cotton Blend.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Slim Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Maroon', hex: '#800000', imageUrl: 'https://m.media-amazon.com/images/I/81Hu7nrcanL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51cBa9qM1qL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51E5VJ-Q5sL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51J5HoBkytL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/81Hu7nrcanL._SX679_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0CP2J3DWX?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 23: LERIYA MEN FORMAL SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-leriya-men-formal-shirt',
    brand: 'Leriya Fashion',
    name: "Men's Formal Button Down Shirt",
    price: 499,
    originalPrice: 1999,
    discountPercent: 75,
    rating: 3.8,
    reviewCount: 3005,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/61qkmzkjztL._SY550_.jpg',
    altText: "Leriya Fashion Men's Formal Button Down Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Leriya Fashion Men's Formal Button Down Shirt – Slim Fit Shirt's for Men | Textured Long Sleeve Polycotton| Business & Meeting Ready.",
    fabricBlend: 'Polycotton',
    silhouettes: 'Slim Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Maroon', hex: '#800000', imageUrl: 'https://m.media-amazon.com/images/I/61qkmzkjztL._SY550_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/614X6T9bXgL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61NbOB09OML._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61LayfPsf5L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/617tuTFgbeL._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/Leriya-Fashion-Textured-Shirts-Stylish/dp/B0CM1187BL?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 24: DEELMO LINEN SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-deelmo-linen-shirt',
    brand: 'DEELMO',
    name: "Men's Casual Button Down Shirts Long Sleeve Linen Shirt",
    price: 330,
    originalPrice: 1999,
    discountPercent: 83,
    rating: 3.8,
    reviewCount: 1506,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/919Ro6MPQsL._SX679_.jpg',
    altText: "DEELMO Men's Casual Button Down Shirts Long Sleeve Linen Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "DEELMO Men's Casual Button Down Shirts Long Sleeve Linen Shirt Fashion Textured Beach Summer Shirt.",
    fabricBlend: 'Linen',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Light F Blue', hex: '#ADD8E6', imageUrl: 'https://m.media-amazon.com/images/I/919Ro6MPQsL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71H0o55CIQL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61gpGeCfMIL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71rwzlb-MWL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71pdQGiOJeL._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/DEELMO-Casual-Button-Fashion-Textured/dp/B0D4M86S5Z?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // MEN'S PRODUCT 25: INDOPRIMO SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-indoprimo-shirt',
    brand: 'IndoPrimo',
    name: "Men's Regular Fit Fancy Double Flap Pocket Casual Shirt",
    price: 499,
    originalPrice: 999,
    discountPercent: 50,
    rating: 3.6,
    reviewCount: 1042,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/91eHOEhvCGL._SX679_.jpg',
    altText: "IndoPrimo Men's Regular Fit Fancy Double Flap Pocket Casual Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "IndoPrimo Men's Regular Fit Fancy Double Flap Pocket Casual Shirt for Men Full Sleeves.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Grey', hex: '#808080', imageUrl: 'https://m.media-amazon.com/images/I/91eHOEhvCGL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/719npadSZtL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51GpOJHB9+L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71EPTUyhfTL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51VXdYGJ+5L._SX425_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/IndoPrimo-Regular-Double-Pocket-Sleeves/dp/B0DCZBY1S3?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // MEN'S PRODUCT 26: BOLDSHARK QUARTER-ZIP SWEATSHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-boldshark-quarter-zip-sweatshirt',
    brand: 'BOLDSHARK',
    name: "Men's Quarter-Zip Pullover Sweatshirt, Classic Mock Neck, Long Sleeve, Casual Athletic Wear",
    price: 699,
    originalPrice: 2599,
    discountPercent: 73,
    rating: 5.0,
    reviewCount: 2,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/61u0I+2Yn-L._SX569_.jpg',
    altText: "BOLDSHARK Men's Quarter-Zip Pullover Sweatshirt in Brown",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "BOLDSHARK Men's Quarter-Zip Pullover Sweatshirt, Classic Mock Neck, Long Sleeve, Casual Athletic Wear. Comfortable and stylish for everyday wear.",
    fabricBlend: 'Cotton Blend Fleece',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Brown', hex: '#654321', imageUrl: 'https://m.media-amazon.com/images/I/61u0I+2Yn-L._SX569_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51XK5UJgd9L._SY500_.jpg',
      'https://m.media-amazon.com/images/I/61ClCahXr4L._SY500_.jpg',
      'https://m.media-amazon.com/images/I/51tsDCzQlFL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/519RtrmANuL._SY500_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FWRBSQ5J?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // MEN'S PRODUCT 27: AUSK HALF ZIP SWEATSHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-ausk-half-zip-sweatshirt',
    brand: 'AUSK',
    name: "Men's Half Zip Sweatshirt || Full Sleeve Fleece Stylish Pullover T-Shirt || Zip Collar Regular Fit Casual Winterwear",
    price: 649,
    originalPrice: 2499,
    discountPercent: 74,
    rating: 4.0,
    reviewCount: 50,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/81MsG5lyCML._SX679_.jpg',
    altText: "AUSK Men's Half Zip Sweatshirt in White",
    tag: 'Fulfilled',
    isPrime: true,
    description: "AUSK Men's Half Zip Sweatshirt || Full Sleeve Fleece Stylish Pullover T-Shirt || Zip Collar Regular Fit Casual Winterwear Sweatshirt's for Men.",
    fabricBlend: 'Fleece',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'White', hex: '#FFFFFF', imageUrl: 'https://m.media-amazon.com/images/I/81MsG5lyCML._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61fU5yx+MWL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71sjcVxckEL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/61CoUeO+CVL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71Ui0kYtrCL._SX425_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0HH8XX54S?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // MEN'S PRODUCT 28: IMSA MODA POLYCOTTON FLEECE SWEATSHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-imsa-moda-fleece-sweatshirt',
    brand: 'Imsa Moda',
    name: "Stylish Polycotton Fleece Sweatshirt for Men | Warm Gym, Travel & Casual Hoodie | Comfortable Winter Wear",
    price: 499,
    originalPrice: 999,
    discountPercent: 50,
    rating: 3.4,
    reviewCount: 37,
    category: 'men',
    imageUrl: 'https://m.media-amazon.com/images/I/41a6JVtTumL._SY500_.jpg',
    altText: "Imsa Moda Stylish Polycotton Fleece Sweatshirt in Black",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Stylish Polycotton Fleece Sweatshirt for Men | Warm Gym, Travel & Casual Hoodie | Comfortable Winter Wear.",
    fabricBlend: 'Polycotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/41a6JVtTumL._SY500_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/41a6JVtTumL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/31hOqxZg1RL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/415k+IuRt7L._SY500_.jpg',
      'https://m.media-amazon.com/images/I/31it9Bz0bRL._SY500_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FQL1PJX2?tag=topvent-21'
  },

  // ═════════════════════════════════════════
  // WOMEN'S WEAR
  // ═════════════════════════════════════════

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 1: JANASYA PEACH KURTA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-janasya-peach-kurta-set',
    brand: 'JANASYA',
    name: "Janasya Women's Peach Poly Silk Embellished Kurta with Pant",
    price: 623,
    originalPrice: 2349,
    discountPercent: 73,
    rating: 4.3,
    reviewCount: 85,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91P97rrb7uL._SX679_.jpg',
    altText: "Janasya women's peach poly silk embellished kurta with pant set",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Janasya Women's Peach Poly Silk Embellished Kurta with Pant. Elegant ethnic wear set with intricate embellishments, perfect for festive and casual occasions.",
    fabricBlend: 'Poly Silk',
    silhouettes: 'Straight Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Peach', hex: '#ffcba4', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91P97rrb7uL._SX679_.jpg' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91P97rrb7uL._SX679_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71Pj4Ax9qUL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81BW7jKT7pL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1kpzA5ojhL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0CLYCDD1S?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 2: GOSRIKI BROWN KURTA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-gosriki-brown-kurta-set',
    brand: 'GOSRIKI',
    name: "GoSriKi Women's Viscose Printed Kurta with Palazzo & Dupatta",
    price: 699,
    originalPrice: 2599,
    discountPercent: 73,
    rating: 4.2,
    reviewCount: 579,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81cDE69Zg+L._SX679_.jpg',
    altText: "GoSriKi women's brown viscose printed kurta set with palazzo and dupatta",
    tag: '#1 BEST SELLER',
    isPrime: true,
    description: "GoSriKi Kurta Set Women Viscose Printed | Kurti Set Women | Kurta Pant Dupatta 3-Piece Outfit | V-Neck Elbow Length Sleeve Straight Fit Ethnic Wear Ladies Dress.",
    fabricBlend: 'Viscose',
    silhouettes: 'Straight Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Brown', hex: '#7a4b2a', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81cDE69Zg+L._SX679_.jpg' },
      { name: 'Red', hex: '#c0392b', imageUrl: 'https://m.media-amazon.com/images/I/81f8pSL5o8L._SX679_.jpg' },
      { name: 'Green', hex: '#2d5016', imageUrl: 'https://m.media-amazon.com/images/I/81byl2YbPeL._SX679_.jpg' },
      { name: 'Blue', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/I/61en3UuCXTL._SY550_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71OYc7I7RNL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71xJ2oU7NtL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/6164xXJZZCL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71Wa3wHRW0L._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H3PX2MH9?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 3: ANNI DESIGNER CREAM KURTA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-anni-designer-cream-kurta-set',
    brand: 'ANNI DESIGNER',
    name: "ANNI DESIGNER Women's Viscose Blend Embroidered Kurta Set",
    price: 799,
    originalPrice: 2599,
    discountPercent: 69,
    rating: 4.3,
    reviewCount: 1138,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/819HecPz5wL._SX679_.jpg',
    altText: "ANNI Designer women's cream embroidered kurta set with palazzo pants",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "ANNI Designer Kurta Sets for Women Viscose Blend Embroidered | Kurta Palazzo Dupatta Set | Designer Kurta Set for Women | V Neck Full Sleeve Ethnic Suit.",
    fabricBlend: 'Viscose Blend',
    silhouettes: 'Straight Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Cream', hex: '#f5f5dc', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/819HecPz5wL._SX679_.jpg' },
      { name: 'Green', hex: '#2d5016', imageUrl: 'https://m.media-amazon.com/images/I/816I+y2hPZL._SX679_.jpg' },
      { name: 'Mustard', hex: '#d4af37', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/51Dq08ze1sL._SY550_.jpg' },
      { name: 'Pista', hex: '#93c572', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/51nd46PQy2L._SY550_.jpg' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81qxg5cFa8L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/715nmDjJ+zL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71e0tXMtO5L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71kFBWSNdNL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GSJZ73QS?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 4: LOOKMARK PINK KURTA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-lookmark-pink-kurta-set',
    brand: 'LOOKMARK',
    name: "LookMark Women's Rayon Printed Kurta Set with Dupatta",
    price: 480,
    originalPrice: 2599,
    discountPercent: 82,
    rating: 4.2,
    reviewCount: 125,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/8191HQ8AOvL._SX679_.jpg',
    altText: "LookMark women's pink rayon printed kurta set with dupatta",
    tag: 'SALE LIVE',
    isPrime: true,
    description: "LookMark Women's Rayon Printed Kurta Set with Dupatta Kurti with Pants Ethnic Traditional Outfit. Elegant pink color kurta with matching dupatta.",
    fabricBlend: 'Rayon',
    silhouettes: 'Straight Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Pink', hex: '#ff69b4', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/8191HQ8AOvL._SX679_.jpg' },
      { name: 'Teal', hex: '#008080', imageUrl: 'https://m.media-amazon.com/images/I/61evM1ep6VL._SY550_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61OBjDqxuVL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71bND3hHBmL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/81opD1Gi2TL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61GApvUH0uL._SX425_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H5KX69R2?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 5: LERIYA BLUE CO-ORD SET
  // ─────────────────────────────────────────
  {
    id: 'prod-leriya-blue-coord-set',
    brand: 'LERIYA FASHION',
    name: "Leriya Fashion Women's Boho Floral Print Co-Ord Set",
    price: 599,
    originalPrice: 1999,
    discountPercent: 70,
    rating: 4.3,
    reviewCount: 72,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81oTljyy1bL._SX679_.jpg',
    altText: "Leriya Fashion women's blue boho floral print co-ord set",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Leriya Fashion Co-Ord Set for Women Stylish | Summer Travel Co-Ord Set Short Sleeve Shirt & Wide-Leg Pant | Paisley Printed Stylish Casual Outfit for Summer Cord for Women.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Relaxed Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Blue', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81oTljyy1bL._SX679_.jpg' },
      { name: 'Red', hex: '#c0392b', imageUrl: 'https://m.media-amazon.com/images/I/91d3xRWT3lL._SX679_.jpg' },
      { name: 'Sea', hex: '#2e8b57', imageUrl: 'https://m.media-amazon.com/images/I/91AoH566+3L._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71av1Is8e-L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/715xELoveZL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71gi59efuxL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81HrFeNEqSL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0F8H4L57M?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 6: ANNI DESIGNER BLUE KURTA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-anni-designer-blue-kurta-set',
    brand: 'ANNI DESIGNER',
    name: "ANNI DESIGNER Women's Rayon Viscose Straight Printed Kurta with Palazzo",
    price: 530,
    originalPrice: 2599,
    discountPercent: 80,
    rating: 4.2,
    reviewCount: 1138,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81jY0C45qHL._SX679_.jpg',
    altText: "ANNI Designer women's blue rayon viscose printed kurta with palazzo set",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "ANNI DESIGNER Women's Rayon Viscose Straight Printed Kurta with Palazzo | Elbow Length Sleeve Kurti Set | Close Neck with Back Slit | Soft Comfortable Fabric | 2 Piece Outfit.",
    fabricBlend: 'Rayon Viscose',
    silhouettes: 'Straight Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Blue', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81jY0C45qHL._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71Bd6vZNLoL._SX425_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71K1xBG7bEL._SX425_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71lpFTuWPvL._SX425_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/713RFuYSmEL._SX425_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GSJX94ZT?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 7: TOPLOSTORE PURPLE CO-ORD SET
  // ─────────────────────────────────────────
  {
    id: 'prod-toplostore-purple-coord-set',
    brand: 'TOPLOSTORE',
    name: "GRECHILOOKS Women's Stylish Co-Ord Set with Top & Bottom",
    price: 599,
    originalPrice: 2999,
    discountPercent: 80,
    rating: 4.3,
    reviewCount: 628,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71X5cKmjgLL._SX679_.jpg',
    altText: "GRECHILOOKS women's purple stylish co-ord set with top and bottom",
    tag: 'SALE LIVE',
    isPrime: true,
    description: "TOPLOSTORE Women's Co-ord Set | Stylish Matching Top & Bottom Set | Notch Neckline with Button Detail | Loose-Fit, Short-Sleeve Top with a Relaxed Silhouette | Ideal for Casual.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Relaxed Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Purple', hex: '#9370db', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71X5cKmjgLL._SX679_.jpg' },
      { name: 'Maroon', hex: '#800020', imageUrl: 'https://m.media-amazon.com/images/I/71a2pm7JioL._SX679_.jpg' },
      { name: 'Olive', hex: '#556b2f', imageUrl: 'https://m.media-amazon.com/images/I/71S9z4JyssL._SX679_.jpg' },
      { name: 'Cream', hex: '#f5f5dc', imageUrl: 'https://m.media-amazon.com/images/I/71Yl7ExKcRL._SX679_.jpg' },
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51mIr0VMH0L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51HLX746pmL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/618DqSJ3w6L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/715jmR1kyhL._SX522_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0F1YN3SS7?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 8: SHAAMI INDIGO MIDI DRESS
  // ─────────────────────────────────────────
  {
    id: 'prod-shaami-indigo-midi-dress',
    brand: 'SHAAMI',
    name: "Shaami Women's Solid Color V-Neck A-Line Maxi Dress",
    price: 599,
    originalPrice: 2099,
    discountPercent: 71,
    rating: 4.3,
    reviewCount: 2270,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/81wHlg0xS9L._SX679_.jpg',
    altText: "Shaami women's indigo blue solid color V-neck A-line maxi dress",
    tag: '#1 BEST SELLER',
    isPrime: true,
    description: "Shaami Girl's & Women's Solid Color V-Neck A-Line Maxi Dress for Women | New Year Party Outfit | Waist Cinched Puff Sleeve Western | Elegant Casual Wear.",
    fabricBlend: 'Polyester Blend',
    silhouettes: 'A-Line Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Indigo Blue', hex: '#4b0082', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81wHlg0xS9L._SX679_.jpg' },
      { name: 'Brown', hex: '#7a4b2a', imageUrl: 'https://m.media-amazon.com/images/I/81cIJSHLG7L._SX679_.jpg' },
      { name: 'Maroon', hex: '#800020', imageUrl: 'https://m.media-amazon.com/images/I/81d4gDpUadL._SX679_.jpg' },
      { name: 'Magenta', hex: '#ff00ff', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/619C3riffyL._SY550_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71cKVvTw1rL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71zwhMOYqyL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71QM2O2AI0L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61NMvFH8ynL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FLK9JC44?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 9: JANASYA LAVENDER KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-janasya-lavender-kurta',
    brand: 'JANASYA',
    name: "Janasya Women's Georgette Regular Fit Casual Kurta",
    price: 699,
    originalPrice: 2498,
    discountPercent: 72,
    rating: 4.3,
    reviewCount: 13,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91iaP6BAEYL._SX679_.jpg',
    altText: "Janasya women's lavender georgette casual kurta with embroidery",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Janasya Women's Georgette Regular Fit Casual Kurta. Elegant lavender color with delicate embroidery, perfect for casual and semi-formal occasions.",
    fabricBlend: 'Georgette',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Lavender', hex: '#e6e6fa', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91iaP6BAEYL._SX679_.jpg' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91iaP6BAEYL._SX679_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81QPDJ7QnzL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/71pkFUj0stL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/716JMHuMPZL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0DYZWSF4H?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 10: JANASYA GREEN KURTA
  // ─────────────────────────────────────────
  {
    id: 'prod-janasya-green-kurta',
    brand: 'JANASYA',
    name: "Janasya Women's Green Georgette Printed Kurta",
    price: 720,
    originalPrice: 2699,
    discountPercent: 73,
    rating: 4.2,
    reviewCount: 25,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1HduPPFMZL._SX679_.jpg',
    altText: "Janasya women's green georgette printed casual kurta",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Janasya Women's Green Georgette Printed Casual Kurta. Beautiful floral print with comfortable fit, suitable for everyday wear.",
    fabricBlend: 'Georgette',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Green', hex: '#2d5016', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/A1HduPPFMZL._SX679_.jpg' },
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91hfNGeuAuL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81ZNxbBLf1L._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81xCwIxlzNL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81h3UmVwjnL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0DYZWBSW6?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 11: LERIYA PINK CO-ORD SET
  // ─────────────────────────────────────────
  {
    id: 'prod-leriya-pink-coord-set',
    brand: 'LERIYA FASHION',
    name: "Leriya Fashion Women's Cotton Blend Co-Ord Set",
    price: 567,
    originalPrice: 1999,
    discountPercent: 72,
    rating: 4.3,
    reviewCount: 24,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/818eelkrV8L._SX679_.jpg',
    altText: "Leriya Fashion women's pink cotton blend co-ord set with top and wide leg pant",
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Leriya Fashion Co-ord Set for Women Stylish | Long Sleeve Top & Wide Leg Pant Set | Summer Travel Cord Set | Latest Western Two Piece Outfit for Casual, Party, Vacation.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Relaxed Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Pink', hex: '#ff69b4', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/818eelkrV8L._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61Fdc+JwqOL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61N+ASjm2uL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/61gWhGm-KTL._SY550_.jpg',
      'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/619lURNMJ9L._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FVS2VX7N?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 12: SHAAMI BROWN MIDI DRESS
  // ─────────────────────────────────────────
  {
    id: 'prod-shaami-brown-pleated-dress',
    brand: 'SHAAMI',
    name: "Shaami Women's Pleated Midi Dress with Flutter Sleeves",
    price: 599,
    originalPrice: 2099,
    discountPercent: 71,
    rating: 4.2,
    reviewCount: 269,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91R7GxdoTSL._SX679_.jpg',
    altText: "Shaami women's brown pleated midi dress with flutter sleeves and V-neck",
    tag: 'SALE LIVE',
    isPrime: true,
    description: "Shaami Girl's & Women's Pleated Midi Dress with Flutter Sleeves | V-Neck Western Dress for Women | Elegant A-Line Summer Outfit | Office & Casual Wear.",
    fabricBlend: 'Polyester Blend',
    silhouettes: 'A-Line Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Brown', hex: '#7a4b2a', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/91R7GxdoTSL._SX679_.jpg' },
      { name: 'Maroon', hex: '#800020', imageUrl: 'https://m.media-amazon.com/images/I/91OHTQEClgL._SX679_.jpg' },
      { name: 'Magenta', hex: '#ff00ff', imageUrl: 'https://m.media-amazon.com/images/I/81jrm758OEL._SX679_.jpg' },
      { name: 'Pista', hex: '#93c572', imageUrl: 'https://m.media-amazon.com/images/I/815c3vEf3ML._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81bLJtP5yjL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81-X8TCt9tL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81r2SC090iL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81hFdWvUhFL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FLF1Y8H4?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 13: GRECILOOKS YELLOW BOHO DRESS
  // ─────────────────────────────────────────
  {
    id: 'prod-grecilooks-yellow-boho-dress',
    brand: 'GRECILOOKS',
    name: "GRECILOOKS Women's Boho Square Neck Long Dress",
    price: 548,
    originalPrice: 1999,
    discountPercent: 73,
    rating: 4.2,
    reviewCount: 644,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81Rli3gX0RL._SX679_.jpg',
    altText: "GRECILOOKS women's yellow floral print boho square neck long dress",
    tag: 'MADE FOR AMAZON',
    isPrime: true,
    description: "GRECILOOKS Summer Dress for Woman | Boho Square Neck Long Dress | Women's Puff Sleeve Floral Printed A Line Maxi | Elegant Tie Front Slit Outfit | Comfortable Beach, Vacation, Party & Holiday Outfit.",
    fabricBlend: 'Polyester Blend',
    silhouettes: 'A-Line Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Yellow', hex: '#ffd700', imageUrl: 'https://m.media-amazon.com/images/W/BW_MEDIAX_AVIF_MEASUREMENT_1306696-T2/images/I/81Rli3gX0RL._SX679_.jpg' },
      { name: 'Orange', hex: '#e67e22', imageUrl: 'https://m.media-amazon.com/images/I/81KrS3SC9ZL._SX679_.jpg' },
      { name: 'Blue', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/I/816eDzkn+CL._SX679_.jpg' },
      { name: 'Dark Blue', hex: '#0a1929', imageUrl: 'https://m.media-amazon.com/images/I/81ytrYVxv1L._SX679_.jpg' },
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81wKtyiyG5L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/613obicmrmL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61Ut5BV34oL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/716c3jMYy2L._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0FHBKXSPG?tag=topvent-21',
  },

    // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 14: LERIYA ABSTRACT SHIRT
  // ─────────────────────────────────────────
  {
    id: 'prod-leriya-abstract-shirt',
    brand: 'Leriya Fashion',
    name: "Abstract Printed Crepe Full Sleeve Shirt",
    price: 399,
    originalPrice: 1999,
    discountPercent: 80,
    rating: 3.6,
    reviewCount: 741,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/91EhtQstn3L._SX679_.jpg',
    altText: "Leriya Fashion Shirt for Women Abstract Printed Crepe Full Sleeve Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Leriya Fashion Shirt for Women S-3XL | Abstract Printed Crepe Full Sleeve Shirt Collared Silhouette | Office Wear Tops for Women.",
    fabricBlend: 'Crepe',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Brown', hex: '#7a4b2a', imageUrl: 'https://m.media-amazon.com/images/I/91EhtQstn3L._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71SGymd--AL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71DxWIHZfjL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71Phj4iPecL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71fBApeb-HL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0DQLK1LST?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 15: LERIYA FLORAL DRESS
  // ─────────────────────────────────────────
  {
    id: 'prod-leriya-floral-dress',
    brand: 'Leriya Fashion',
    name: "Floral Printed One Piece Dress",
    price: 499,
    originalPrice: 1999,
    discountPercent: 75,
    rating: 3.8,
    reviewCount: 115,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/81FfQhic2NL._SX679_.jpg',
    altText: "Leriya Fashion Dress for Women Western Floral Printed One Piece Dress",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Leriya Fashion Dress for Women | Western Floral Printed One Piece Dress for Women midi | Casual Sleeveless Summer Dresses for Beach & Stylish Party Outfits.",
    fabricBlend: 'Polyester',
    silhouettes: 'Midi Dress',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'White', hex: '#FFFFFF', imageUrl: 'https://m.media-amazon.com/images/I/81FfQhic2NL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81AQPia+m7L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81TKzbDIwEL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81sGbf8JefL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71Ra4X9JlvL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GDQFY4HC?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 16: TAGDO KURTA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-tagdo-kurta-set',
    brand: 'TAGDO',
    name: "Linen Cotton Kurta Sets for Women",
    price: 699,
    originalPrice: 2799,
    discountPercent: 75,
    rating: 3.6,
    reviewCount: 107,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/51zEGLFYQrL._SX425_.jpg',
    altText: "TAGDO Linen Cotton Kurta Sets for Women",
    tag: 'Fulfilled',
    isPrime: true,
    description: "TAGDO Linen Cotton Kurta Sets for Women | Stylish Matching Co-Ord Set for Women | Mandarin with V-Neck Full Sleeve | Ethnic Kurti with Palazzo Pants.",
    fabricBlend: 'Linen Cotton',
    silhouettes: 'Co-Ord Set',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Chiku', hex: '#D2B48C', imageUrl: 'https://m.media-amazon.com/images/I/51zEGLFYQrL._SX425_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81R9PUckPhL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81vpYJgxVOL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81UPlDYs7WL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81rlm0HsCBL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GVZCPVLC?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 17: FERY LONDON TOP
  // ─────────────────────────────────────────
  {
    id: 'prod-fery-london-top',
    brand: 'FERY LONDON',
    name: "Floral Print Round Neck Full Sleeve TOP",
    price: 517,
    originalPrice: 1999,
    discountPercent: 74,
    rating: 3.7,
    reviewCount: 115,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/71rImn06DoL._SY550_.jpg',
    altText: "FERY LONDON Women's Floral Print Round Neck Full Sleeve TOP",
    tag: 'Fulfilled',
    isPrime: true,
    description: "FERY LONDON Women's Floral Print Round Neck Full Sleeve TOP | Women Top's || Tops for Womens|| Women Long sleeve tops.",
    fabricBlend: 'Polyester',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Cream', hex: '#FFFDD0', imageUrl: 'https://m.media-amazon.com/images/I/71rImn06DoL._SY550_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81738L3hNrL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81XtD6+vbqL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81VSNzPm3kL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71rImn06DoL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GCM4CFNV?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 18: KERI PERRY BLAZER
  // ─────────────────────────────────────────
  {
    id: 'prod-keri-perry-blazer',
    brand: 'KERI PERRY',
    name: "Women's Blazers Open Front Jacket",
    price: 449,
    originalPrice: 1399,
    discountPercent: 68,
    rating: 3.8,
    reviewCount: 115,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/815V6CIeZwL._SX679_.jpg',
    altText: "KERI PERRY Women's Blazers Open Front Jacket",
    tag: 'Fulfilled',
    isPrime: true,
    description: "KERI PERRY Women's Blazers | Blazer for Women | Top | Tshirt | Tops for Woman | Open Front Jacket | Lightweight Coat | Round Neck Longline Jackets Blouse.",
    fabricBlend: 'Polyester',
    silhouettes: 'Regular Fit',
    garmentCare: 'Dry Clean Only',
    innerLining: 'Not specified',
    colors: [
      { name: 'Beige', hex: '#F5F5DC', imageUrl: 'https://m.media-amazon.com/images/I/815V6CIeZwL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61V634B1ZzL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51NfaEZeY8L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51HYZrHlX5L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/41ElhCQQqpL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GSQC1WK9?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 19: VERO MODA POLO
  // ─────────────────────────────────────────
  {
    id: 'prod-vero-moda-polo',
    brand: 'VERO MODA',
    name: "Women Self Design Polo T-Shirt",
    price: 1198,
    originalPrice: 2499,
    discountPercent: 52,
    rating: 3.5,
    reviewCount: 7,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/812pfY4TTbL._SX679_.jpg',
    altText: "VERO Moda Women Self Design Polo T-Shirt",
    tag: 'Fulfilled',
    isPrime: true,
    description: "VERO Moda Women Self Design Polo T-Shirt. Stylish and comfortable for everyday wear.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Cloud Dancer', hex: '#F0F0F0', imageUrl: 'https://m.media-amazon.com/images/I/812pfY4TTbL._SX679_.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/613JJiax8NL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61mhvd0FTWL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/51HOF9yJewL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61QGGcEJn1L._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/VERO-MODA-Womens-Regular-White/dp/B0DKT6VNCC?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 20: FIORRA CO-ORD SET
  // ─────────────────────────────────────────
  {
    id: 'prod-fiorra-coord-set',
    brand: 'FIORRA',
    name: "Women's Linen-Blend Loose Relaxed Fit Co-Ord Set",
    price: 1089,
    originalPrice: 3499,
    discountPercent: 69,
    rating: 5.0,
    reviewCount: 1,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/815SXE-C43L._SX679_.jpg',
    altText: "FIORRA Women's Linen-Blend Loose Relaxed Fit Co-Ord Set",
    tag: 'Fulfilled',
    isPrime: true,
    description: "FIORRA Women's Linen-Blend Loose Relaxed Fit Co-Ord Set. Perfect for casual and semi-formal occasions.",
    fabricBlend: 'Linen Blend',
    silhouettes: 'Loose Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Light Pink', hex: '#FFB6C1', imageUrl: 'https://m.media-amazon.com/images/I/815SXE-C43L._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61yYa3z6sxL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61fB2ruBYgL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61VYfmUJg5L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61u34Xzmn8L._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GT19L6S7?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 21: SHINE N SHOW PAJAMA
  // ─────────────────────────────────────────
  {
    id: 'prod-shine-n-show-pajama',
    brand: 'SHINE N SHOW',
    name: "Women's Pajama Set with Cute Bear and Heart Print",
    price: 699,
    originalPrice: 2999,
    discountPercent: 77,
    rating: 4.0,
    reviewCount: 100,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/319p0Ljj8OL._SY500_.jpg',
    altText: "SHINE N SHOW Women's Pajama Set with Cute Bear and Heart Print",
    tag: 'Fulfilled',
    isPrime: true,
    description: "SHINE N SHOW - FOREVER GORGEOUS Women's Pajama Set with Cute Bear and Heart Print, Long Sleeve Sleepwear, Beige.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Beige', hex: '#F5F5DC', imageUrl: 'https://m.media-amazon.com/images/I/319p0Ljj8OL._SY500_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/517xENkr+cL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/51USySGVPaL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/519MC42kN7L._SY500_.jpg',
      'https://m.media-amazon.com/images/I/51VvYJMqxEL._SY500_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GLPP29QY?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 22: THECHIEF PAJAMA
  // ─────────────────────────────────────────
  {
    id: 'prod-thechief-pajama',
    brand: 'Thechief',
    name: "Women's Cotton Pyjama Set, Blue",
    price: 699,
    originalPrice: 2599,
    discountPercent: 73,
    rating: 1.0,
    reviewCount: 1,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/81fvy4T+XDL._SX679_.jpg',
    altText: "Thechief Women's Cotton Pyjama Set, Blue",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Thechief Women's Cotton Pyjama Set, Blue, Short Sleeve Top with Heart Print Plaid Pants, Regular Fit, Two-Piece Set.",
    fabricBlend: 'Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Blue', hex: '#0000FF', imageUrl: 'https://m.media-amazon.com/images/I/81fvy4T+XDL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71eU3+una-L._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71AJKaAB63L._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71sQSAIzH5L._SX425_.jpg',
      'https://m.media-amazon.com/images/I/71UGcDv63ZL._SX425_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H4637GKF?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 23: GENERIC PAJAMA SET
  // ─────────────────────────────────────────
  {
    id: 'prod-generic-pajama-set',
    brand: 'Generic',
    name: "Women Pajama Set with Top & Pants",
    price: 699,
    originalPrice: 999,
    discountPercent: 30,
    rating: 4.0,
    reviewCount: 50,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/61MJWGUFCFL._SX425_.jpg',
    altText: "Women Pajama Set with Top & Pants",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Women Pajama Set with Top & Pants| Night Dress | Night Suit Shirt Pant Set | Soft & Comfy Sleepwear for Girls & Women | Two Piece Night Suit Set.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Cream', hex: '#FFFDD0', imageUrl: 'https://m.media-amazon.com/images/I/61MJWGUFCFL._SX425_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/612SFXi9ahL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/617nGBgf8IL._SX425_.jpg',
      'https://m.media-amazon.com/images/I/61Wj5mYIB9L._SX425_.jpg',
      'https://m.media-amazon.com/images/I/319SB5GOnwL._SX425_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0HKMXFTZM?tag=topvent-21'
  },

  // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 24: NAP STORY PAJAMA
  // ─────────────────────────────────────────
  {
    id: 'prod-nap-story-pajama',
    brand: 'NAP STORY',
    name: "Soft Hearts Pyjama Set, Grey",
    price: 1399,
    originalPrice: 2599,
    discountPercent: 46,
    rating: 4.0,
    reviewCount: 50,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/A11CMBz+RgL._SX679_.jpg',
    altText: "NAP STORY Soft Hearts Pyjama Set, Grey",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Soft Hearts Pyjama Set, Grey. Comfortable and stylish sleepwear.",
    fabricBlend: 'Cotton',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Grey', hex: '#808080', imageUrl: 'https://m.media-amazon.com/images/I/A11CMBz+RgL._SX679_.jpg' }
    ],
    sizes: ['S', 'XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71t7Z6ud10L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/817x1rFkNuL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71K8Ld+fiTL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81lcrhqz-tL._SY550_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0HCCF3QRK?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 25: BLACK FLORAL SHORT KURTI
  // ─────────────────────────────────────────
  {
    id: 'prod-black-floral-short-kurti',
    brand: 'Generic',
    name: "Women's Black Floral Printed Short Kurti with Bell Sleeves",
    price: 499,
    originalPrice: 1999,
    discountPercent: 75,
    rating: 4.0,
    reviewCount: 50,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/61WIprPVR2L._SY741_.jpg',
    altText: "Women's Black Floral Printed Short Kurti with Bell Sleeves",
    tag: 'bazaar Crazy Prices',
    isPrime: true,
    description: "Women's Black Floral Printed Short Kurti with Bell Sleeves | Lace-Up Side Detail, Square Neck, Pink Floral Motifs, Full Sleeves, Casual Wear.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Short Kurta / Tunic Length',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/61WIprPVR2L._SY741_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71cjpJXhS4L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/617AELtWN7L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71PEfUcQCQL._SX522_.jpg',
      'https://m.media-amazon.com/images/I/61WIprPVR2L._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0HJFJH9LV?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 26: V NECK ANARKALI SHORT KURTI
  // ─────────────────────────────────────────
  {
    id: 'prod-v-neck-anarkali-kurti',
    brand: 'Generic',
    name: "Women's V Neck Anarkali Short Kurti for Women Full Sleeve Floral Print",
    price: 235,
    originalPrice: 699,
    discountPercent: 66,
    rating: 4.0,
    reviewCount: 50,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/71Yok0vIcwL._SY741_.jpg',
    altText: "Women's V Neck Anarkali Short Kurti with Floral Print",
    tag: 'bazaar Crazy Prices',
    isPrime: true,
    description: "Women's V Neck Anarkali Short Kurti for Women Full Sleeve Floral Print | Stylish Kurtis & Short Kurtis for Women | Casual Kurti with Jeans | Kurtas for Woman.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Anarkali / Flared',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Black Beige', hex: '#1a1a1a', imageUrl: 'https://m.media-amazon.com/images/I/71Yok0vIcwL._SY741_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71Yok0vIcwL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/61+lH1HU-7L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71V5XmT5xuL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/719b6tii-YL._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0F2HBV75D?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 27: BLACK HANDBLOCK PRINTED KURTI
  // ─────────────────────────────────────────
  {
    id: 'prod-black-handblock-kurti',
    brand: 'SANGOURI',
    name: "Elegant Black Handblock Printed Viscose Rayon Kurti – Timeless Ethnic Charm Short Kurta",
    price: 244,
    originalPrice: 999,
    discountPercent: 76,
    rating: 3.7,
    reviewCount: 24,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/81GjQmkyZbL._SX679_.jpg',
    altText: "Elegant Black Handblock Printed Viscose Rayon Kurti",
    tag: 'bazaar Crazy Prices',
    isPrime: true,
    description: "Elegant Black Handblock Printed Viscose Rayon Kurti – Timeless Ethnic Charm Short Kurta 1083.",
    fabricBlend: 'Viscose Rayon',
    silhouettes: 'Short Kurta',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/81GjQmkyZbL._SX679_.jpg' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81GjQmkyZbL._SX679_.jpg',
      'https://m.media-amazon.com/images/I/611f8CJ2YdL._SX569_.jpg',
      'https://m.media-amazon.com/images/I/71lbmZpY09L._SY550_.jpg',
      'https://m.media-amazon.com/images/I/71lbmZpY09L._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0HJ312DGS?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 28: SQUARE NECK FLORAL KURTI
  // ─────────────────────────────────────────
  {
    id: 'prod-square-neck-floral-kurti',
    brand: 'Generic',
    name: "Women's Short Kurti for Women | Square Neck Floral Printed Kurti | Full Sleeve Casual Kurti Top",
    price: 289,
    originalPrice: 799,
    discountPercent: 64,
    rating: 3.9,
    reviewCount: 6,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/81Bi7r-+QuL._SX679_.jpg',
    altText: "Women's Short Kurti with Square Neck and Floral Print",
    tag: 'bazaar Crazy Prices',
    isPrime: true,
    description: "Women's Short Kurti for Women | Square Neck Floral Printed Kurti | Full Sleeve Casual Kurti Top | Stylish Ethnic Tunic for Jeans | Regular Fit Office Wear.",
    fabricBlend: 'Cotton Blend',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Blue', hex: '#1560bd', imageUrl: 'https://m.media-amazon.com/images/I/81Bi7r-+QuL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81Er4gbqaXL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/61j7nncLrcL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81JSwRqeNDL._SY550_.jpg',
      'https://m.media-amazon.com/images/I/81zsx+ybNVL._SY550_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H7MWMBJJ?tag=topvent-21'
  },

    // ─────────────────────────────────────────
  // WOMEN'S PRODUCT 29: PIVL WOMEN SWEATER
  // ─────────────────────────────────────────
  {
    id: 'prod-pivl-women-sweater',
    brand: 'Pivl',
    name: "Pivl Women Sweater Solid Round Neck Warm Winter Wear",
    price: 579,
    originalPrice: 1999,
    discountPercent: 71,
    rating: 5.0,
    reviewCount: 30,
    category: 'women',
    imageUrl: 'https://m.media-amazon.com/images/I/61gp8kpfnoL._SX679_.jpg',
    altText: "Pivl Women Sweater Solid Round Neck Warm Winter Wear",
    tag: 'Fulfilled',
    isPrime: true,
    description: "Pivl Women Sweater Solid Round Neck Warm Winter Wear. Comfortable and stylish for everyday winter wear.",
    fabricBlend: 'Acrylic',
    silhouettes: 'Regular Fit',
    garmentCare: 'Machine Wash',
    innerLining: 'Not specified',
    colors: [
      { name: 'Magenta', hex: '#ff00ff', imageUrl: 'https://m.media-amazon.com/images/I/61gp8kpfnoL._SX679_.jpg' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/613uwq1oKgL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/71Jyb1RrysL._SY741_.jpg',
      'https://m.media-amazon.com/images/I/71koCVYZnUL._SY500_.jpg',
      'https://m.media-amazon.com/images/I/71Jyb1RrysL._SY741_.jpg'
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H61WSX7P?tag=topvent-21'
  },

  // ═════════════════════════════════════════
  // COFFEE CUP COLLECTION
  // ═════════════════════════════════════════

  // ─────────────────────────────────────────
  // COFFEE CUP 1: TEE MAFIA GROOT MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-tee-mafia-groot-mug',
    brand: 'TEE MAFIA',
    name: "Tee Mafia I Am Groot Black Mug with Print | 330ml Ceramic Coffee Mug",
    price: 290,
    originalPrice: 599,
    discountPercent: 52,
    rating: 3.4,
    reviewCount: 14,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/51HXXr3c5aS._SL1348_.jpg',
    altText: 'Tee Mafia black ceramic coffee mug with I Am Groot print 330ml',
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "Tee Mafia I Am Groot Black Mug with Print | Cartoon Coffee Mug for Your Friends | Gaming | 330 ml, Microwave & Dishwasher Safe | Computer Gaming Coffee Mug.",
    fabricBlend: 'Premium Ceramic',
    silhouettes: '330ml Standard',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/51HXXr3c5aS._SL1348_.jpg' },
    ],
    sizes: ['330ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51HXXr3c5aS._SL1348_.jpg',
      'https://m.media-amazon.com/images/I/51uZEx6lnLS._SL1348_.jpg',
      'https://m.media-amazon.com/images/I/6117Wrq-JkS._SL1348_.jpg',
      'https://m.media-amazon.com/images/I/51bACJpUeDS._SL1348_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B096Y2JQ5J?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 2: CLAY CRAFT SPIDERMAN MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-claycraft-spiderman-mug',
    brand: 'CLAY CRAFT',
    name: "Clay Craft Marvel Spiderman Face Print Mug 400ml | Premium Ceramic Superhero Mug",
    price: 389,
    originalPrice: 399,
    discountPercent: 3,
    rating: 4.2,
    reviewCount: 353,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/61ZtqUelIuL._SL1080_.jpg',
    altText: 'Clay Craft red Spiderman face print ceramic coffee mug 400ml',
    tag: '#1 BEST SELLER',
    isPrime: true,
    description: "Clay Craft Official Compatible with Marvel Spiderman Face Print Mug | Premium Ceramic Coffee/Milk Mug, 400 ml | Superhero Gift for Kids & Adults | Microwave & Dishwasher Safe. 500+ bought in past month.",
    fabricBlend: 'Premium Ceramic',
    silhouettes: '400ml Large',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'Spiderman Red', hex: '#c0392b', imageUrl: 'https://m.media-amazon.com/images/I/61ZtqUelIuL._SL1080_.jpg' },
    ],
    sizes: ['400ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/81OyObcCYaL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71BWGc8RG7L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71vNmS-kjtL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71QVrydIIAL._SL1500_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0CPZBPDGZ?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 3: 7DOTS DEADPOOL 3D SCULPTED MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-7dots-deadpool-mug',
    brand: '7DOTS',
    name: "7dots Deadpool 3D Sculpted Ceramic Coffee Mug | Deadpool Theme Sculpted Design",
    price: 899,
    originalPrice: 899,
    discountPercent: 0,
    rating: 4.4,
    reviewCount: 120,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/51mAipILgBL._SL1080_.jpg',
    altText: '7dots Deadpool 3D sculpted red ceramic coffee mug',
    tag: 'LUXURY PICK',
    isPrime: true,
    description: "7dots Deadpool 3D Sculpted Ceramic Coffee Mug | 3D Sculpted Design, Ceramic Material, Coffee Mug, Deadpool Theme. Unique collectible mug for Marvel fans.",
    fabricBlend: 'Sculpted Ceramic',
    silhouettes: '3D Sculpted',
    garmentCare: 'Hand Wash Recommended',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'Deadpool Red', hex: '#c0392b', imageUrl: 'https://m.media-amazon.com/images/I/51mAipILgBL._SL1080_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/51mAipILgBL._SL1080_.jpg',
      'https://m.media-amazon.com/images/I/51Qjl5rs78L.jpg',
      'https://m.media-amazon.com/images/I/418hL-FQ6bL.jpg',
      'https://m.media-amazon.com/images/I/81KxjoSY67L._SL1500_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0GTW132P7?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 4: EPIC STUFF BATMAN MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-epicstuff-batman-mug',
    brand: 'EPIC STUFF',
    name: "Epic Stuff The Batman Red Hero Design Premium Black Patch Coffee Mug 350ml",
    price: 599,
    originalPrice: 599,
    discountPercent: 0,
    rating: 4.5,
    reviewCount: 210,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/71cFWT2nZ5L._SL1500_.jpg',
    altText: 'Epic Stuff black Batman Red Hero design premium patch ceramic coffee mug 350ml',
    tag: 'OFFICIAL MERCH',
    isPrime: true,
    description: "Epic Stuff - The Batman - Red Hero Design Premium Black Patch Coffee Mug 350ml - Officially Licensed by Warner Bros, USA (Ceramic). Collector's edition mug.",
    fabricBlend: 'Premium Ceramic',
    silhouettes: '350ml Standard',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'Batman Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/71cFWT2nZ5L._SL1500_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71cFWT2nZ5L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/616B2NWcWmL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81lo5OZDVSL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71cFWT2nZ5L._SL1500_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H33K1RDP?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 5: KABNIK 3D CUTE UNICORN MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-kabnik-unicorn-3d-mug',
    brand: 'KABNIK GLOBAL',
    name: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon | White 3D Cute Unicorn",
    price: 529,
    originalPrice: 1499,
    discountPercent: 65,
    rating: 5.0,
    reviewCount: 2,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/61nwKAi+Y7L._SL1448_.jpg',
    altText: 'KABNIK 3D cute unicorn ceramic coffee mug with lid and spoon',
    tag: 'GIFTING PICK',
    isPrime: true,
    description: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon, Gift for Brother, Sister, Birthday, Rakhi, Kids Mug, Cute Mugs, Coffee Cup, Tea Mug, Return Gift, Premium Cup. White - 3D Cute Unicorn.",
    fabricBlend: '3D Ceramic',
    silhouettes: '350ml with Lid & Spoon',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'White Unicorn', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/61nwKAi+Y7L._SL1448_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61pLiiGekvL._SL1412_.jpg',
      'https://m.media-amazon.com/images/I/61+6WVZnurL._SL1448_.jpg',
      'https://m.media-amazon.com/images/I/61s+xlrFs-L._SL1254_.jpg',
      'https://m.media-amazon.com/images/I/61Z6mZuB7ZL._SL1254_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0BXT7Z66X?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 6: KABNIK 3D CUTE FROG MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-kabnik-frog-3d-mug',
    brand: 'KABNIK GLOBAL',
    name: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon | White 3D Cute Frog",
    price: 529,
    originalPrice: 1499,
    discountPercent: 65,
    rating: 5.0,
    reviewCount: 2,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/61ZYTL3ydYL._SL1434_.jpg',
    altText: 'KABNIK 3D cute frog ceramic coffee mug with lid and spoon',
    tag: 'GIFTING PICK',
    isPrime: true,
    description: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon, Gift for Brother, Sister, Birthday, Rakhi, Kids Mug, Cute Mugs, Coffee Cup, Tea Mug, Return Gift, Premium Cup. White - 3D Cute Frog.",
    fabricBlend: '3D Ceramic',
    silhouettes: '350ml with Lid & Spoon',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'White Frog', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/61ZYTL3ydYL._SL1434_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71NvwG58zrL._SL1254_.jpg',
      'https://m.media-amazon.com/images/I/71oIoJCIfrL._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/61tCwhG-HJL._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/61W7fRMV+hL._SL1254_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H957R665?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 7: 7ELEVEN PUNISHER BLACK MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-7eleven-punisher-mug',
    brand: '7ELEVEN GIFTS',
    name: "7Eleven Gifts Ceramic Coffee Mug Marvel The Punisher Designer Printed Black 350ML",
    price: 259,
    originalPrice: 699,
    discountPercent: 63,
    rating: 4.3,
    reviewCount: 180,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/61JizYQduVL._SL1500_.jpg',
    altText: '7Eleven Gifts Marvel The Punisher designer printed black ceramic coffee mug 350ml',
    tag: 'TOPVENT PICK',
    isPrime: true,
    description: "7Eleven Gifts Ceramic Coffee Mug Marvel The Punisher Designer Printed 1 Coffee Mug Black 350ML. Premium Marvel merch for fans.",
    fabricBlend: 'Premium Ceramic',
    silhouettes: '350ml Standard',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'Punisher Black', hex: '#111111', imageUrl: 'https://m.media-amazon.com/images/I/61JizYQduVL._SL1500_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61JizYQduVL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61KwHi+OjnL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61FhprnbKyL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/610WN2iy-kL._SL1500_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H954CMFL?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 8: KABNIK 3D CUTE KOALA MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-kabnik-koala-3d-mug',
    brand: 'KABNIK GLOBAL',
    name: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon | White 3D Cute Koala",
    price: 529,
    originalPrice: 1499,
    discountPercent: 65,
    rating: 5.0,
    reviewCount: 2,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/612DSkXql-L._SL1402_.jpg',
    altText: 'KABNIK 3D cute koala ceramic coffee mug with lid and spoon',
    tag: 'GIFTING PICK',
    isPrime: true,
    description: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon, Gift for Brother, Sister, Birthday, Rakhi, Kids Mug, Cute Mugs, Coffee Cup, Tea Mug, Return Gift, Premium Cup. White - 3D Cute Koala.",
    fabricBlend: '3D Ceramic',
    silhouettes: '350ml with Lid & Spoon',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'White Koala', hex: '#ffffff', imageUrl: 'https://m.media-amazon.com/images/I/612DSkXql-L._SL1402_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/61XlwzfqChL._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/71lwl74NxbL._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/718Rbfjpo5L._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/61pKoRkoCHL._SL1254_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H94T64JY?tag=topvent-21',
  },

  // ─────────────────────────────────────────
  // COFFEE CUP 9: KABNIK 3D ROYAL ELEPHANT MUG
  // ─────────────────────────────────────────
  {
    id: 'prod-kabnik-elephant-3d-mug',
    brand: 'KABNIK GLOBAL',
    name: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon | Teal Flora 3D Royal Elephant",
    price: 499,
    originalPrice: 1499,
    discountPercent: 67,
    rating: 5.0,
    reviewCount: 2,
    category: 'cup',
    imageUrl: 'https://m.media-amazon.com/images/I/61SLJvofQML._SL1402_.jpg',
    altText: 'KABNIK 3D teal royal elephant ceramic coffee mug with lid and spoon',
    tag: 'GIFTING PICK',
    isPrime: true,
    description: "KABNIK 3D Ceramic Coffee Mug with Lid & Spoon, Gift for Brother, Sister, Birthday, Rakhi, Kids Mug, Cute Mugs, Coffee Cup, Tea Mug, Return Gift, Premium Cup. Teal Flora - 3D Royal Elephant.",
    fabricBlend: '3D Ceramic',
    silhouettes: '350ml with Lid & Spoon',
    garmentCare: 'Microwave & Dishwasher Safe',
    innerLining: 'Food-Grade Glaze',
    colors: [
      { name: 'Teal Flora', hex: '#008080', imageUrl: 'https://m.media-amazon.com/images/I/61SLJvofQML._SL1402_.jpg' },
    ],
    sizes: ['350ml'],
    galleryImages: [
      'https://m.media-amazon.com/images/I/71yuZ2vkP8L._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/61+RQD90U8L._SL1254_.jpg',
      'https://m.media-amazon.com/images/I/71OHWYUsHDL._SL1402_.jpg',
      'https://m.media-amazon.com/images/I/61MsKiGbcVL._SL1500_.jpg',
    ],
    amazonUrl: 'https://www.amazon.in/dp/B0H955J7BY?tag=topvent-21',
  },

];


export const INITIAL_USER_PROFILE: UserProfile = {
  id: 'usr-vip-founder',
  fullName: 'Sahil Verma',
  email: 'sahil.v@vip.topco.co',
  mobile: '9876543210',
  isEmailVerified: true,
  isMobileVerified: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  clothingSize: 'L',
  shoeSize: 'UK 9',
  favoriteCategories: ['men', 'women'],
  joinedDate: 'August 2024',
  vipTier: 'Founder VIP Member',
};