type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface IProduct {
  id: string;
  image: string;
  name: string;
  category: string;
  rating: number;
  price: number;
  reviews: number;
  sizes: Size[];
  desc: string;
}
