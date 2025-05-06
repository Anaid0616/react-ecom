import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../../store/useCartStore';
import { TProduct } from '../../types/Products';
import { toast } from 'react-hot-toast';

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
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0.5rem 0;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }
`;

const ViewButton = styled(Link)`
  background-color: #8e44ad;
  color: white;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #732d91;
    color: white;
  }
`;

const QuickAddButton = styled.button`
  background-color: #008c7e;
  color: white;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #006a5f;
  }

  svg {
    color: white;
    font-size: 0.9rem;
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
  const addToCart = useCartStore((state) => state.addToCart);

  const handleQuickAdd = () => {
    addToCart(product);
    toast.success(`${title} added to cart`);
  };

  return (
    <Card>
      <ProductImage src={image.url} alt={image.alt || title} />
      <ProductContent>
        <h3>{title}</h3>
        <p>{price} kr</p>
        <div className="actions">
          <ViewButton to={`/product/${id}`}>View product</ViewButton>
          <QuickAddButton onClick={handleQuickAdd} title="Add to cart">
            <FaShoppingCart />
            <span style={{ marginLeft: '0.3rem' }}>+</span>
          </QuickAddButton>
        </div>
      </ProductContent>
    </Card>
  );
};
