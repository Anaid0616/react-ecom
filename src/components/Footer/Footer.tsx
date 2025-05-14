import styled from 'styled-components';

// --- Styled components ---
const FooterWrapper = styled.footer`
  background: linear-gradient(90deg, #8e44ad, #00bfa6);
  padding: 1rem;
  text-align: center;
  color: white;
  margin-top: auto;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Vibity</p>
    </FooterWrapper>
  );
}
export { Footer };
