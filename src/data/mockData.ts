import { Product, Story, UserProfile, Order } from '../types';

// ============================================
// STORIES
// ============================================
export const STORIES_DATA: Story[] = [
  {
    id: 'story-men',
    title: "Men's",
    category: 'men',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
    storyImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Tailored Italian Silhouettes & Structured Linens',
    featuredProductCount: 24,
  },
  {
    id: 'story-women',
    title: "Women's",
    category: 'women',
    imageUrl: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=400&q=80',
    storyImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Fluid Mulberry Silks & Plissé Evening Cocktail Gowns',
    featuredProductCount: 38,
  },
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
  // ⚠️ NOTE: This link is from Ekyaa brand (not Masacio)
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
  // ⚠️ NOTE: This link is from MACSIVO brand (not FAHME)
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
  // ⚠️ NOTE: This link is from IMPERIAL CHOICE brand (not SMOWKLY)
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
  // ⚠️ NOTE: This link is an estimate — please verify
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
  // ⚠️ NOTE: This link is from SHASMI brand (spelling differs)
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