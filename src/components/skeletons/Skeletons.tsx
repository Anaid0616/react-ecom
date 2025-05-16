import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styled from 'styled-components';
import { CartTitle } from '../../pages/CartPage.styles';
import { Wrapper, Breadcrumbs } from '../../pages/ProductPage.styles';

const FlexWrapper = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 2;
`;

export const ProductSkeleton = () => (
  <Wrapper>
    <Breadcrumbs>
      <Skeleton width={100} height={20} />
    </Breadcrumbs>

    <FlexWrapper>
      <Left>
        <Skeleton height={450} width={450} />
      </Left>

      <Right>
        <Skeleton height={40} width="60%" />
        <Skeleton height={20} width="80%" style={{ margin: '1rem 0' }} />
        <Skeleton height={20} width="40%" />
        <Skeleton height={30} width={150} style={{ marginTop: '2rem' }} />
        <div style={{ marginTop: '2rem' }}>
          <Skeleton height={25} width="50%" />
          <Skeleton height={60} style={{ marginTop: '0.5rem' }} />
        </div>
      </Right>
    </FlexWrapper>
  </Wrapper>
);

// --- Cart Skeleton ---
export const CartSkeleton = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      {/* Title using actual styled component */}
      <CartTitle>
        <Skeleton height={40} width={200} />
      </CartTitle>

      {/* Fake cart items */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}
        >
          <Skeleton width={80} height={80} />
          <div style={{ flex: 1 }}>
            <Skeleton width={150} height={20} />
            <Skeleton width={100} height={20} style={{ marginTop: '0.5rem' }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <Skeleton width={60} height={20} />
            <Skeleton
              width={30}
              height={30}
              circle
              style={{ marginTop: '0.5rem' }}
            />
          </div>
        </div>
      ))}

      {/* Summary */}
      <div style={{ borderTop: '1px solid #ddd', paddingTop: '1rem' }}>
        <Skeleton width={300} height={20} style={{ marginBottom: '0.5rem' }} />
        <Skeleton width={300} height={20} style={{ marginBottom: '0.5rem' }} />
        <Skeleton width={300} height={30} />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
        <Skeleton height={40} width={150} />
        <Skeleton height={40} width={100} />
      </div>
    </div>
  );
};
