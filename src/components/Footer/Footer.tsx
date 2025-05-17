import styled from 'styled-components';
import { Link } from 'react-router-dom';

// --- Styled components ---
const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #8e44ad, #00bfa6);
  padding: 2rem 1rem 1rem;
  color: white;
  text-align: center;
  margin-top: auto;
`;

const NavLinks = styled.div`
  margin-bottom: 1rem;

  a {
    color: white;
    margin: 0 0.75rem;
    font-weight: 600;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const BackToTop = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: white;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const CopyText = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
`;

/**
 * Footer component
 *
 * Displays a fixed footer at the bottom of the page with:
 * - Navigation links to Home and Contact
 * - A "Back to top" anchor link
 * - Copyright notice
 *
 * The footer uses a gradient background and styled text for consistent branding.
 *
 * @component
 * @returns A visually styled footer with basic navigation and metadata.
 */
function Footer() {
  return (
    <FooterWrapper>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>

      <BackToTop href="#top">↑ Back to top</BackToTop>

      <CopyText>
        &copy; {new Date().getFullYear()} Vibity. All rights reserved.
      </CopyText>
    </FooterWrapper>
  );
}

export { Footer };
