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

// 배열안의 객체 인터페이스 정의
export interface Products {
  [index: number]: { name: string; price: number };
}
