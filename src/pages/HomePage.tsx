import { Products } from '../components/products/Products';

/**
 * HomePage component.
 *
 * Displays the main landing page of the application, including:
 * - A list of products fetched from the API.
 * - Optional metadata via React Helmet for SEO.
 *
 * @returns The rendered homepage content.
 */

function HomePage() {
  return (
    <>
      <Products />
    </>
  );
}

export { HomePage };
