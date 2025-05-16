import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TProduct } from '../types/Products';
import { ONLINE_SHOP_API_URL } from '../common/common';
import { useCartStore } from '../store/useCartStore';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  Breadcrumbs,
  FlexWrapper,
  ProductImage,
  ProductDetails,
  Description,
  Price,
  DiscountedPrice,
  AddToCartButton,
  Discount,
  Review,
  Reviewer,
  ReviewText,
  ReviewMeta,
  Stars,
} from './ProductPage.styles';

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
          width={450}
          height={450}
          loading="lazy"
        />

        <ProductDetails>
          <h1>{product.title}</h1>
          <Description>{product.description}</Description>

          <div>
            {hasDiscount ? (
              <>
                <span
                  style={{
                    textDecoration: 'line-through',
                    marginRight: '0.5rem',
                  }}
                >
                  <Price>{product.price} €</Price>
                </span>
                <DiscountedPrice>{product.discountedPrice} €</DiscountedPrice>
                <Discount>({discountPercentage}% off)</Discount>
              </>
            ) : (
              <Price>{product.price} €</Price>
            )}
          </div>

          <AddToCartButton
            onClick={() => {
              addToCart(product);
              toast.success(`${product.title} added to cart!`);
            }}
            aria-label="Add to cart"
          >
            Add to cart
          </AddToCartButton>

          {product.reviews.length > 0 && (
            <div>
              <h2>Reviews</h2>
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
