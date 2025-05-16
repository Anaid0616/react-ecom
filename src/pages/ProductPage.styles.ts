import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Breadcrumbs = styled.div`
  font-size: 0.9rem;
  margin-bottom: 2rem;

  a {
    color: #8e44ad;
    text-decoration: none;
    margin-right: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #666;
    font-weight: 600;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1.5rem;

  @media (max-width: 689px) {
    padding-top: 0;
    gap: 0rem;
  }
`;

export const ProductImage = styled.img`
  max-width: 450px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

export const ProductDetails = styled.div`
  max-width: 450px;
  flex: 1;

  h1 {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Description = styled.p`
  color: #444;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
  margin: 1rem 0;
`;

export const Price = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

export const DiscountedPrice = styled(Price)`
  color: #111;
`;

export const AddToCartButton = styled.button`
  background-color: rgb(0, 131, 138);
  color: white;
  padding: 0.7rem 4rem;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  width: 100%;

  transition: background-color 0.2s;

  &:hover {
    background-color: #007d6f;
  }
`;

export const Discount = styled.h2`
  color: #d32f2f;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Review = styled.div`
  margin-bottom: 1.5rem;
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

export const Reviewer = styled.div`
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

export const ReviewText = styled.p`
  margin: 0.2rem 0 0.5rem;
  color: #555;
  font-size: 0.9rem;
  font-weight: 600;
`;

export const ReviewMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Stars = styled.span`
  color: rgb(145, 107, 4);
`;
