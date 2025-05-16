import { useCartStore } from '../store/useCartStore';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import { TProduct } from '../types/Products';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  BackLink,
  CartTitle,
  CartItem,
  ProductImage,
  Info,
  Name,
  Price,
  QuantityControls,
  Button,
  TrashButton,
  ItemActions,
  Actions,
  ActionButton,
  ClearButton,
  EmptyState,
  Summary,
  Total,
  Discount,
} from './CartPage.styles';

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
      <BackLink to="/">← Back to store</BackLink>

      <CartTitle>Your Cart</CartTitle>
      {items.map((item) => (
        <CartItem key={item.id}>
          <Link to={`/product/${item.id}`}>
            <ProductImage
              src={item.image.url}
              alt={item.image.alt || item.title}
              width={80}
              height={80}
              loading="lazy"
            />
          </Link>

          <Info>
            <Link to={`/product/${item.id}`}>
              <Name>{item.title}</Name>
            </Link>

            <QuantityControls>
              <Button
                onClick={() => decreaseQuantity(item.id)}
                aria-label="Decrease item"
              >
                <FaMinus />
              </Button>
              <span>{item.quantity}</span>
              <Button
                onClick={() => addToCart(stripQuantity(item))}
                aria-label="Add item"
              >
                <FaPlus />
              </Button>
            </QuantityControls>
          </Info>

          <ItemActions>
            <Price $discounted={item.discountedPrice < item.price}>
              {(item.discountedPrice || item.price) * item.quantity} kr
            </Price>

            <TrashButton
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
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
          <Discount>
            <span>Discount</span>
            <span>-{discount.toFixed(2)} €</span>
          </Discount>
        )}
        <Total>
          <span>Total:</span>
          <span>{finalTotal.toFixed(2)} €</span>
        </Total>
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
