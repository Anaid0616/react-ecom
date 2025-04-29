import { useEffect, useState } from 'react';
import { ONLINE_SHOP_API_URL } from '../../common/common';

function Products() {
  // This component will display a list of products
  const [products, setProducts] = useState([]);

  // ONLINE_SHOP_API_URL

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(ONLINE_SHOP_API_URL);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <p>List of products will be displayed here.</p>
    </div>
  );
}
export { Products };
