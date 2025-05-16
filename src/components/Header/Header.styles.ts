import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: linear-gradient(90deg, #00bfa6, #8e44ad);
  color: white;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 600px) {
    padding: 0 0.5rem;
  }
`;

export const LogoSection = styled.div`
  flex: 1;
  padding: 0.9rem 0;
`;

export const Logo = styled.img`
  height: 40px;
  margin-top: 0.2rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartIcon = styled.div`
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;

export const CartCount = styled.span`
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

export const DesktopLinks = styled.div`
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

export const MobileActions = styled.div`
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

export const MobileNavLinks = styled.div<{ $open: boolean }>`
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

export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.6rem;

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
