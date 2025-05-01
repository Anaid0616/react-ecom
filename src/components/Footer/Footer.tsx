import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #222;
  padding: 1rem;
  text-align: center;
  color: white;
  margin-top: auto;
`;

function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; {new Date().getFullYear()} Ecom Store</p>
    </FooterWrapper>
  );
}
export { Footer };
