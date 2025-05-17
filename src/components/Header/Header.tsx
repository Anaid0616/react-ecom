import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import {
  HeaderWrapper,
  Container,
  LogoSection,
  Logo,
  Nav,
  CartIconWrapper,
  CartIcon,
  CartCount,
  DesktopLinks,
  MobileActions,
  MobileNavLinks,
  HamburgerButton,
} from './Header.styles';

/**
 * Header component
 *
 * Displays the site's navigation bar including:
 * - Logo linking to the homepage.
 * - Navigation links (e.g. Contact).
 * - Shopping cart icon with item count from global cart state.
 * - Responsive hamburger menu for mobile.
 *
 * Uses Zustand for cart state management (`useCartStore`) to calculate total items.
 * Responsive layout adapts navigation for both desktop and mobile views.
 *
 * @component
 * @returns The main site header with logo, nav links, and cart icon.
 */

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
              <Logo src={logo} alt="Vibity Logo" width={112.5} height={40} />
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
            <HamburgerButton
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Hamburger menu"
            >
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
