import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { GlobalStyle } from '../styles/GlobalStyles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
