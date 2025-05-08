import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { FaShoppingCart } from 'react-icons/fa';

// --- Styled components ---
const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #00bfa6, #8e44ad);
  padding: 1rem 2rem;
  color: white;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    font-weight: 500;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const CartIcon = styled.div`
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

function Header() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderWrapper>
      <Nav>
        <Link to="/">
          <h2>Ecom Store</h2>
        </Link>
        <NavLinks>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <CartIcon>
              <FaShoppingCart />
              {total}
            </CartIcon>
          </Link>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
}

export { Header };
