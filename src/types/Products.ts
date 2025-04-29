type TProductImage = {
  url: string;
  alt: string;
};

type TProductReview = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

export type TProduct = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  image: TProductImage;
  rating: number;
  tags: string[];
  reviews: TProductReview[];
};
