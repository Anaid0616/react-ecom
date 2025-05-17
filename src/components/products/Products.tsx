import { useEffect, useState } from 'react';
import { ONLINE_SHOP_API_URL } from '../../common/common';
import { TProduct } from '../../types/Products';
import { ProductsList } from '../ProductsList/ProductsList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDebounce } from '../../utils/useDebounce';

// --- Styled components ---
const Wrapper = styled.div``;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: #888;
  text-align: center;
`;

const TitleWrapper = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;

  @media (max-width: 300px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: left;
  font-size: 1.1rem;
  margin: 3rem 0 0;
  color: #333;
`;

/**
 * Products component
 *
 * Fetches and displays a list of products from the API.
 * - Includes a debounced search bar to filter products by title or description.
 * - Displays loading skeletons while fetching.
 * - Shows a fallback message when no products match the search term.
 * - Navigates to the product detail page on selection from the autocomplete.
 *
 * @component
 * @returns The product listing view with search functionality.
 */
export function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const response = await fetch(ONLINE_SHOP_API_URL);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const term = debouncedSearch.toLowerCase();
    return (
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  return (
    <Wrapper>
      <SearchBar
        products={products}
        onSelect={(id) => navigate(`/product/${id}`)}
        value={search}
        onChange={setSearch}
      />

      <TitleWrapper>
        <SectionTitle>Explore Our Selection</SectionTitle>
      </TitleWrapper>

      {/* Show skeleton while loading */}
      {loading ? (
        <ProductsList products={[]} isLoading={true} isSearching={false} />
      ) : filteredProducts.length > 0 ? (
        <ProductsList
          products={filteredProducts}
          isLoading={false}
          isSearching={search.length > 1}
        />
      ) : (
        <Message>No products found matching “{search}”.</Message>
      )}
    </Wrapper>
  );
}
