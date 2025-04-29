import { TProduct } from '../../types/Products';
import { Product } from '../Product/Product';

type TProductsListProps = {
  products: TProduct[];
};

export const ProductsList = ({ products }: TProductsListProps) => {
  return (
    <div>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
