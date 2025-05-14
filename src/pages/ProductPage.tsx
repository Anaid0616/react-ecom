import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TProduct } from '../types/Products';
import { ONLINE_SHOP_API_URL } from '../common/common';
import styled from 'styled-components';
import { useCartStore } from '../store/useCartStore';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

// --- Styled components ---
const Breadcrumbs = styled.div`
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
  }
`;

const Wrapper = styled.div`
  padding: 2rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1.5rem;

  @media (max-width: 689px) {
  padding-top: 0;
  gap: 0rem;
`;

const ProductImage = styled.img`
  max-width: 450px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  width: 100%;
  border-radius: 10px;
`;

const ProductDetails = styled.div`
  max-width: 450px;
  flex: 1;

    h1 {
    font-size: 2rem;
    font-weight: 600;
`;

const AddToCartButton = styled.button`
  background-color: #009b8a;
  color: white;
  border: none;
  padding: 0.8rem 4rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1.5rem;
  width: 100%;

  transition: background-color 0.2s;

  &:hover {
    background-color: #007d6f;
  }
`;

const Discount = styled.p`
  color: #d32f2f;
  font-weight: bold;
`;

const Review = styled.div`
  margin-bottom: 1.5rem;
  background-color: #fff;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const Reviewer = styled.div`
  font-weight: 600;
  margin-bottom: 0.3rem;
`;

const ReviewText = styled.p`
  margin: 0.2rem 0 0.5rem;
  color: #555;
  font-size: 0.9rem;
`;

const ReviewMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Stars = styled.span`
  color: #f5a623;
`;

// --- ProductPage component ---
export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${ONLINE_SHOP_API_URL}/${id}`);
        const json = await res.json();
        setProduct(json.data);
      } catch (err) {
        console.error('Error fetching product:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Wrapper>Loading...</Wrapper>;
  if (!product) return <Wrapper>Product not found</Wrapper>;

  const hasDiscount = product.discountedPrice < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountedPrice) / product.price) * 100
      )
    : 0;

  return (
    <Wrapper>
      <Breadcrumbs>
        <Link to="/">Home</Link> &gt; <span>{product.title}</span>
      </Breadcrumbs>
      <FlexWrapper>
        <ProductImage
          src={product.image.url}
          alt={product.image.alt || product.title}
        />
        <ProductDetails>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <div>
            {hasDiscount ? (
              <>
                <span
                  style={{
                    textDecoration: 'line-through',
                    marginRight: '0.5rem',
                  }}
                >
                  {product.price} €
                </span>
                <strong>{product.discountedPrice} €</strong>
                <Discount>({discountPercentage}% off)</Discount>
              </>
            ) : (
              <strong>{product.price} €</strong>
            )}
          </div>
          <AddToCartButton
            onClick={() => {
              addToCart(product);
              toast.success(`${product.title} added to cart!`);
            }}
          >
            Add to cart
          </AddToCartButton>

          {product.reviews.length > 0 && (
            <div>
              <h3>Reviews</h3>
              {product.reviews.map((review) => (
                <Review key={review.id}>
                  <Reviewer>{review.username}</Reviewer>
                  <ReviewText>{review.description}</ReviewText>
                  <ReviewMeta>
                    <Stars>{'⭐'.repeat(review.rating)}</Stars>
                  </ReviewMeta>
                </Review>
              ))}
            </div>
          )}
        </ProductDetails>
      </FlexWrapper>
    </Wrapper>
  );
}
