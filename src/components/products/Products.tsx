import { useEffect, useState } from 'react';
import { ONLINE_SHOP_API_URL } from '../../common/common';
import { TProduct } from '../../types/Products';
import { ProductsList } from '../ProductsList/ProductsList';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDebounce } from '../../utils/useDebounce';

const Wrapper = styled.div`
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 0.1rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: #888;
  text-align: center;
`;

export function Products() {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const debouncedSearch = useDebounce(search);

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
      {filteredProducts.length > 0 ? (
        <ProductsList products={filteredProducts} />
      ) : (
        <Message>No products found matching “{search}”.</Message>
      )}
    </Wrapper>
  );
}
