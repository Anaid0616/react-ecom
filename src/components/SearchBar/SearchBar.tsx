// src/components/SearchBar/SearchBar.tsx
import { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TProduct } from '../../types/Products';

const SearchWrapper = styled.div<{ $open?: boolean }>`
  position: relative;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 2rem;
  border: 1px solid #ccc;
  border-radius: ${({ $open }) => ($open ? '20px 20px 0 0' : '20px')};
  background: white;
  padding: 0.8rem 1rem;
  display: flex;
  z-index: 9;
  transition: box-shadow 0.2s;

  &:has(input:focus) {
    box-shadow: 0 0 3px 1px rgba(0, 191, 165, 0.4);
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto 2rem;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
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

const AutocompleteList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 20px 20px;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  z-index: 10;
`;

const AutocompleteItem = styled.li`
  list-style: none;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

type Props = {
  products: TProduct[];
  value: string;
  onChange: (value: string) => void;
  onSelect: (id: string) => void;
};

export function SearchBar({ products, value, onChange, onSelect }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = products.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <SearchContainer>
      <SearchWrapper
        $open={
          showSuggestions && value.length > 1 && filteredSuggestions.length > 0
        }
      >
        <SearchInput
          id="searchInput"
          name="search"
          type="text"
          placeholder="Search products..."
          autoComplete="off"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        />

        {value.length > 0 ? (
          <ClearIcon onMouseDown={() => onChange('')}>&times;</ClearIcon>
        ) : (
          <SearchIcon />
        )}
      </SearchWrapper>
      {showSuggestions &&
        value.length > 1 &&
        filteredSuggestions.length > 0 && (
          <AutocompleteList>
            {filteredSuggestions.slice(0, 5).map((product) => (
              <AutocompleteItem
                key={product.id}
                onMouseDown={() => onSelect(product.id)}
              >
                <Link to={`/product/${product.id}`}>{product.title}</Link>
              </AutocompleteItem>
            ))}
          </AutocompleteList>
        )}
    </SearchContainer>
  );
}
