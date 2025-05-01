import { TProduct } from '../../types/Products';
import { Product } from '../Product/Product';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

type TProductsListProps = {
  products: TProduct[];
};

export const ProductsList = ({ products }: TProductsListProps) => {
  return (
    <Grid>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Grid>
  );
};
