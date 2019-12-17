export interface User {
  name: string;
  tel: string;
  address: string;
}

export interface House {
  imageUrl: string;
  imageAlt: string;
  beds: number;
  baths: number;
  title: string;
  priceInCents: number;
  formattedPrice: string;
  reviewCount: number;
  rating: number;
}