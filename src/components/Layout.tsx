import styled from 'styled-components';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';
import { Toaster } from 'react-hot-toast';

// --- Styled components ---
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  padding-bottom: 4rem;
`;

// --- Types ---
type LayoutProps = {
  children: React.ReactNode;
};

// --- Layout component ---
// This component wraps the entire application layout, including the header, footer, and main content area.
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PageWrapper>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
        <Footer />
        <Toaster position="top-right" />
      </PageWrapper>
    </>
  );
};

export default Layout;
