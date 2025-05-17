import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import banner from '../../assets/banner.jpg';

export const SearchArea = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${banner});
  background-size: cover;
  background-position: center bottom;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: 600px) {
    height: 250px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 0 2rem;
`;

export const IntroText = styled.h1`
  color: white;
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1.2rem;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const SearchWrapper = styled.div<{ $open?: boolean }>`
  position: relative;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: ${({ $open }) => ($open ? '20px 20px 0 0' : '20px')};
  background: white;
  padding: 0.8rem 1rem;
  display: flex;
  z-index: 9;
  transition: box-shadow 0.2s;

  &:has(input:focus) {
    box-shadow: 0 0 3px 1px #8e44ad;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #777;
  pointer-events: none;
`;

export const ClearIcon = styled.span`
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

export const AutocompleteList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 20px 20px;
  max-height: 200px;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  z-index: 10;
  box-sizing: border-box;

  box-shadow: 0 3px 6px -1px #8e44ad, -2px 0 4px -2px #8e44ad,
    2px 0 4px -2px #8e44ad;
`;

export const AutocompleteItem = styled.li`
  list-style: none;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }
`;

export const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
