import { Products } from '../components/products/Products';
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Vibity | Discover Your Summer Vibe</title>
        <meta
          name="description"
          content="Vibity is your go-to for inspiring lifestyle products. Explore curated collections that bring good vibes and great style."
        />
      </Helmet>

      <Products />
    </>
  );
}

export { HomePage };
