export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  rating: number;
  reviewCount: number;
  category: 'men' | 'women' | 'cup' | 'unisex' | 'jewellery' | 'watches' | 'footwear' | 'accessories';
  imageUrl: string;
  altText: string;
  tag?: string;
  isAmazonChoice?: boolean;
  isPrime?: boolean;
  isFastSeller?: boolean;
  claimedPercent?: number;
  unitsLeft?: number;
  galleryImages?: string[];
  description?: string;
  fabricBlend?: string;
  silhouettes?: string;
  garmentCare?: string;
  innerLining?: string;
  colors?: { name: string; hex: string; imageUrl?: string }[];
  sizes?: string[];
  amazonUrl: string;
}

export interface Story {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  storyImage: string;
  subtitle: string;
  featuredProductCount: number;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  mobile: string;              
  isEmailVerified: boolean;    
  isMobileVerified: boolean;   
  avatarUrl: string;
  clothingSize: string;
  shoeSize: string;
  favoriteCategories: string[];
  joinedDate: string;
  vipTier: string;
}

export interface CartItem {
  id: string; // `${productId}-${size}-${color}`
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  totalAmount: number;
  savingsAmount: number;
  status: 'Confirmed' | 'Dispatched' | 'Out for Delivery' | 'Delivered';
  shippingAddress: string;
  paymentMethod: string;
  trackingNumber: string;
}

export type TabType = 'home' | 'explore' | 'deals' | 'blog' | 'wishlist' | 'cart' | 'account';

export type ThemeMode = 'dark' | 'light';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  author: string;
  content: string;   // HTML string
  relatedProducts?: string[];
}