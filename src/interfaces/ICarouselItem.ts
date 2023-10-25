import { IProduct } from "./IProduct";

export interface ICarouselItem {
  heading: string;
  subHeading: string;
  products: IProduct[];
}
