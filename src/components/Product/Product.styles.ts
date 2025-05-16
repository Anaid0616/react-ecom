// Product.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;

  h2 {
    margin: 0 0 0.5rem;
    font-size: 1rem;
    color: #555;
    font-weight: 550;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 2.8rem;
  }

  h3 {
    font-weight: bolder;
    font-size: 1.2rem;
    margin: 0rem 0.5rem 1rem 0rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const ViewButton = styled(Link)`
  background-color: #8e44ad;
  color: white;
  font-family: 'Poppins', sans-serif;
  padding: 0.5rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 20px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #732d91;
    color: white;
  }
`;

export const QuickAddButton = styled.button`
  background-color: rgb(0, 131, 138);
  color: white;
  padding: 0.5rem 0.8rem;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #006a5f;
  }

  svg {
    color: white;
    font-size: 0.9rem;
  }
`;
