import { TProduct } from '../../types/Products';
import { Product } from '../Product/Product';
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// --- Styled components ---
const Grid = styled.div`
  display: grid;
  gap: 2rem;
  padding: 2rem 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const SkeletonCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
`;

// --- ProductList component ---
type TProductsListProps = {
  products: TProduct[];
  isLoading?: boolean;
};

/**
 * ProductsList component
 *
 * Renders a responsive grid of product cards.
 * - Shows actual product components when `isLoading` is false.
 * - Displays skeleton placeholders while loading.
 * - Accepts an optional loading state for smoother UX.
 *
 * @component
 * @param {Object} props - Component props
 * @param {TProduct[]} props.products - The list of products to display.
 * @param {boolean} [props.isLoading=false] - Whether to show skeletons instead of actual products.
 * @returns A styled grid of products or skeleton placeholders.
 */

export const ProductsList = ({
  products,
  isLoading = false,
}: TProductsListProps) => {
  return (
    <Grid>
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i}>
              <Skeleton height={200} /> {/* image */}
              <div style={{ paddingTop: '1rem' }}>
                <Skeleton height={20} style={{ marginBottom: '0.5rem' }} />
                <Skeleton width="40%" height={20} />
              </div>
            </SkeletonCard>
          ))
        : products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
    </Grid>
  );
};
