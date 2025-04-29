import { TProduct } from '../../types/Products';

type ProductProps = {
  product: TProduct;
};

/**
 *
 * @param param0
 * @returns
 */

export const Product = ({
  product: { title, description, price },
}: ProductProps) => {
  return (
    <div>
      <h3>{title}</h3>;<p>{description}</p>;<p>{price}</p>;
    </div>
  );
};
