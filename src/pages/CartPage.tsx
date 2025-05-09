import styled from 'styled-components';
import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { TProduct } from '../types/Products';
import { useNavigate } from 'react-router-dom';

// --- Styled components ---
const Wrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 0.1rem;
`;

const CartTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 2.2rem;
`;

const CartItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
`;

const Info = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0 0 0.3rem;
`;

const Price = styled.div<{ $discounted?: boolean }>`
  font-weight: 600;
  color: ${(props) => (props.$discounted ? '#d32f2f' : 'inherit')};
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  border: none;
  background-color: #eee;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 600px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }
`;

const TrashButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  margin-left: auto;

  &:hover {
    background-color: #c0392b;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

const ActionButton = styled.button`
  flex: 1;
  background-color: #009b8a;
  color: white;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #007d6f;
  }
`;

const ClearButton = styled(ActionButton)`
  background-color: #8e44ad;
  max-width: 120px;

  &:hover {
    background-color: #732d91;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  margin-top: 3rem;

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #009b8a;
    text-decoration: underline;

    &:hover {
      color: #007d6f;
    }
  }
`;

const Summary = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  max-width: 400px;
  margin-left: auto;
  font-size: 1rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .total {
    border-top: 1px solid #bbb;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  .discount {
    color: #d32f2f;
  }
`;

/**
 * Removes the `quantity` property from a cart item to convert it back to a plain product.
 * This is useful when re-adding a product to the cart using only its original structure.
 *
 * @param item - A cart item that includes quantity.
 * @returns The product object without the quantity field.
 */
function stripQuantity(item: { quantity: number } & TProduct): TProduct {
  const { quantity, ...product } = item;
  return product;
}

/**
 * CartPage component.
 *
 * Displays the user's shopping cart, including product list, quantity controls, and total summary.
 * Allows the user to:
 * - Increase/decrease quantity of each item
 * - Remove items individually
 * - Clear the cart
 * - Proceed to checkout
 *
 * Uses Zustand for cart state management and handles cart total calculations.
 *
 * @returns A full cart interface with all expected eCommerce cart functionality.
 */
export default function CartPage() {
  const { items, addToCart, removeFromCart, clearCart } = useCartStore();
  const navigate = useNavigate();

  const decreaseQuantity = (itemId: string) => {
    const item = items.find((i) => i.id === itemId);
    if (item && item.quantity > 1) {
      removeFromCart(itemId);
      addToCart(stripQuantity(item));
    } else {
      removeFromCart(itemId);
    }
  };

  if (items.length === 0) {
    return (
      <Wrapper>
        <EmptyState>
          <p>Your cart is empty.</p>
          <Link to="/">← Back to products</Link>
        </EmptyState>
      </Wrapper>
    );
  }

  const originalTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountedTotal = items.reduce(
    (sum, item) => sum + (item.discountedPrice || item.price) * item.quantity,
    0
  );
  const discount = originalTotal - discountedTotal;
  const finalTotal = discountedTotal;

  return (
    <Wrapper>
      <Link
        to="/"
        style={{
          display: 'inline-block',
          marginBottom: '1rem',
          color: '#009b8a',
        }}
      >
        ← Back to store
      </Link>

      <CartTitle>Your Cart</CartTitle>
      {items.map((item) => (
        <CartItem key={item.id}>
          <Link to={`/product/${item.id}`}>
            <ProductImage
              src={item.image.url}
              alt={item.image.alt || item.title}
            />
          </Link>
          <Info>
            <Link to={`/product/${item.id}`}>
              <Name>{item.title}</Name>
            </Link>
            <QuantityControls>
              <Button onClick={() => decreaseQuantity(item.id)}>
                <FaMinus />
              </Button>
              <span>{item.quantity}</span>
              <Button onClick={() => addToCart(stripQuantity(item))}>
                <FaPlus />
              </Button>
            </QuantityControls>
          </Info>

          <ItemActions>
            <Price $discounted={item.discountedPrice < item.price}>
              {(item.discountedPrice || item.price) * item.quantity} kr
            </Price>

            <TrashButton onClick={() => removeFromCart(item.id)}>
              <FaTrash />
            </TrashButton>
          </ItemActions>
        </CartItem>
      ))}
      <Summary>
        <div>
          <span>Subtotal (before discounts)</span>
          <span>{originalTotal.toFixed(2)} €</span>
        </div>
        {discount > 0 && (
          <div className="discount">
            <span>Discount</span>
            <span>-{discount.toFixed(2)} €</span>
          </div>
        )}
        <div className="total">
          <span>Total:</span>
          <span>{finalTotal.toFixed(2)} €</span>
        </div>
      </Summary>

      <Actions>
        <ActionButton onClick={() => navigate('/checkout-success')}>
          Checkout
        </ActionButton>
        <ClearButton onClick={clearCart}>Clear Cart</ClearButton>
      </Actions>
    </Wrapper>
  );
}
