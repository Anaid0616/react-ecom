import { TProduct } from '../../types/Products';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  h3 {
    margin: 0 0 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 2.8rem;
  }

  p {
    margin-top: auto;
    font-weight: bold;
    font-size: 1.1rem;
  }
`;

type ProductProps = {
  product: TProduct;
};

/**
 * Renders a single product card with image, title, and price.
 * The entire card is wrapped in a link that navigates to the product's detail page.
 *
 * @component
 * @param {Object} props - Props for the component.
 * @param {TProduct} props.product - The product data to display.
 * @returns {JSX.Element} A clickable product card.
 */

export const Product = ({ product }: ProductProps) => {
  const { image, title, price, id } = product;

  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <Card>
        <ProductImage src={image.url} alt={image.alt || title} />
        <ProductContent>
          <h3>{title}</h3>
          <p>{price} kr</p>
        </ProductContent>
      </Card>
    </Link>
  );
};
