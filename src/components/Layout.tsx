import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 2rem 2rem 4rem;
`;

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PageWrapper>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
