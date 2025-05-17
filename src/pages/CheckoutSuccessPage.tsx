import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCartStore } from '../store/useCartStore';
import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet';

// --- Styled components ---
const Wrapper = styled.div`
  padding: 4rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #009b8a;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const BackButton = styled(Link)`
  background-color: #8e44ad;
  color: white;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background-color: #732d91;
    color: white;
  }
`;

/**
 * CheckoutSuccessPage component.
 *
 * Displays a confirmation message after a successful checkout.
 * - Clears the cart using Zustand state on mount.
 * - Triggers a confetti animation.
 * - Provides a link for the user to return to the homepage.
 *
 * @returns The checkout success page component.
 */

export default function CheckoutSuccessPage() {
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();

    // Trigger confetti animation
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, [clearCart]);

  return (
    <>
      <Helmet>
        <title>Checkout Success | Vibity</title>
        <meta
          name="description"
          content="Thank you for your purchase! Your Vibity order has been received."
        />
      </Helmet>

      <Wrapper>
        <Title>🎉 Order Successful!</Title>
        <Message>
          Thank you for your purchase. Your order has been placed.
        </Message>
        <BackButton to="/">← Back to Store</BackButton>
      </Wrapper>
    </>
  );
}
