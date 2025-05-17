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
/**
 * SearchBar component
 *
 * Displays a search input with autocomplete suggestions.
 * - Filters as the user types.
 * - Allows keyboard navigation and mouse interaction.
 *
 * @param props - The component props
 * @param props.products - List of products to search from.
 * @param props.value - Current search input value.
 * @param props.onChange - Handles input changes.
 * @param props.onSelect - Handles selection of product.
 * @returns A search bar with autocomplete.
 */
export function SearchBar({ products, value, onChange, onSelect }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredSuggestions = products.filter((product) =>
    product.title.toLowerCase().includes(value.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || filteredSuggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredSuggestions.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredSuggestions.length - 1
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selected = filteredSuggestions[activeIndex];
      if (selected) {
        onSelect(selected.id);
        setShowSuggestions(false);
      }
    }
  };

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
              setActiveIndex(0);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            onKeyDown={handleKeyDown}
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
                {filteredSuggestions.slice(0, 5).map((product, index) => (
                  <AutocompleteItem
                    key={product.id}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseDown={() => onSelect(product.id)}
                    style={{
                      background: index === activeIndex ? '#f0f0f0' : 'white',
                    }}
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
