import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.png';

// --- Styled components ---
const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #00bfa6, #8e44ad);

  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

const LogoSection = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  height: 40px;
  padding: 1.2rem 0rem 1rem 0rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CartIcon = styled.div`
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -12px;
  background-color: rgb(29, 211, 187);
  color: rgb(113, 43, 146);
  font-size: 0.8rem;
  font-weight: 700;
  border-radius: 50%;
  padding: 2px 6px;
  line-height: 1;
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    color: white;
    font-weight: 550;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const MobileActions = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

const MobileNavLinks = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    background: linear-gradient(90deg, #00bfa6, #8e44ad);
    width: 100%;
    padding: 1rem;
    gap: 1rem;

    a {
      color: white;
      font-weight: 550;
    }
  }
`;

const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.6rem;

  /* Remove focus outline and border */
  outline: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
    border-radius: 4px;
  }
`;

function Header() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Nav>
          <LogoSection>
            <Link to="/">
              <Logo src={logo} alt="Vibity Logo" />
            </Link>
          </LogoSection>

          <DesktopLinks>
            <Link to="/contact">Contact</Link>
            <Link to="/cart" aria-label="View cart">
              <CartIconWrapper>
                <CartIcon>
                  <FaShoppingCart size={20} />
                </CartIcon>
                {total > 0 && <CartCount>{total}</CartCount>}
              </CartIconWrapper>
            </Link>
          </DesktopLinks>

          <MobileActions>
            <Link to="/cart" aria-label="View cart">
              <CartIconWrapper>
                <CartIcon>
                  <FaShoppingCart size={20} />
                </CartIcon>
                {total > 0 && <CartCount>{total}</CartCount>}
              </CartIconWrapper>
            </Link>
            <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </HamburgerButton>
          </MobileActions>

          <MobileNavLinks $open={isOpen}>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </MobileNavLinks>
        </Nav>
      </Container>
    </HeaderWrapper>
  );
}

export { Header };
