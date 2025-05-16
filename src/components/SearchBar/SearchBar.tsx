import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from '../../types/Products';

import {
  SearchArea,
  SearchContainer,
  IntroText,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  ClearIcon,
  AutocompleteList,
  AutocompleteItem,
  VisuallyHiddenLabel,
} from './SearchBar.styles';

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
    <SearchArea>
      <SearchContainer>
        <IntroText>What’s your vibe this summer?</IntroText>
        <SearchWrapper
          $open={
            showSuggestions &&
            value.length > 1 &&
            filteredSuggestions.length > 0
          }
        >
          <VisuallyHiddenLabel htmlFor="searchInput">
            Search for products
          </VisuallyHiddenLabel>

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
        </SearchWrapper>
      </SearchContainer>
    </SearchArea>
  );
}
