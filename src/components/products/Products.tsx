import { useEffect, useState } from 'react';
import { ONLINE_SHOP_API_URL } from '../../common/common';
import { TProduct } from '../../types/Products';
import { ProductsList } from '../ProductsList/ProductsList';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useDebounce } from '../../utils/useDebounce';

const Wrapper = styled.div`
  padding: 2rem;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #009b8a;
    box-shadow: 0 0 0 3px rgba(0, 191, 166, 0.2);
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  margin-top: 2rem;
  color: #888;
  text-align: center;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none; // prevents click
`;

const ClearIcon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #aaa;
  cursor: pointer;

  &:hover {
    color: #555;
  }
`;

export function Products() {
  // This component will display a list of products
  const [products, setProducts] = useState<TProduct[]>([]);
  const [search, setSearch] = useState('');

  const debouncedSearch = useDebounce(search);

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

  const filteredProducts = products.filter((product) => {
    const term = debouncedSearch.toLowerCase();
    return (
      product.title.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  return (
    <Wrapper>
      <SearchContainer>
        <SearchWrapper>
          <SearchInput
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.length > 0 ? (
            <ClearIcon onClick={() => setSearch('')}>&times;</ClearIcon>
          ) : (
            <SearchIcon />
          )}
        </SearchWrapper>
      </SearchContainer>

      {filteredProducts.length > 0 ? (
        <ProductsList products={filteredProducts} />
      ) : (
        <Message>No products found matching “{search}”.</Message>
      )}
    </Wrapper>
  );
}
