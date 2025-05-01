import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TProduct } from '../types/Products';
import { ONLINE_SHOP_API_URL } from '../common/common';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<TProduct | null>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <Wrapper>
      <h1>{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.image.alt || product.title}
        width={300}
      />
      <p>{product.description}</p>
      <p>
        {product.discountPrice < product.price ? (
          <>
            <span style={{ textDecoration: 'line-through' }}>
              {product.price} kr
            </span>{' '}
            <strong>{product.discountPrice} kr</strong>
          </>
        ) : (
          <strong>{product.price} kr</strong>
        )}
      </p>
      <button>Add to cart</button>
    </Wrapper>
  );
}
