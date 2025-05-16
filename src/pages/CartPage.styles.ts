import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 500px) {
    padding: 1rem;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 1rem;
  color: #8e44ad;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #732d91;
  }
`;

export const CartTitle = styled.h1`
  margin-bottom: 2rem;
  text-align: center;
  font-size: 3rem;

  @media (max-width: 600px) {
    font-size: 2.2rem;
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    align-items: flex-start;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h2`
  margin: 0 0 0.3rem;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Price = styled.div<{ $discounted?: boolean }>`
  font-weight: 600;
  color: ${(props) => (props.$discounted ? '#d32f2f' : 'inherit')};
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Button = styled.button`
  background-color: #eee;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export const TrashButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  margin-left: auto;

  &:hover {
    background-color: #c0392b;
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 600px) {
    flex-wrap: nowrap;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 1rem;
`;

export const ActionButton = styled.button`
  flex: 1;
  background-color: rgb(0, 131, 138);
  color: white;
  padding: 0.7rem;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: #007d6f;
  }
`;

export const ClearButton = styled(ActionButton)`
  background-color: #8e44ad;
  max-width: 120px;

  &:hover {
    background-color: #732d91;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  margin-top: 3rem;

  p {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  a {
    color: #8e44ad;
    text-decoration: underline;

    &:hover {
      color: #732d91;
    }
  }
`;

export const Summary = styled.div`
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #ddd;
  max-width: 400px;
  margin-left: auto;
  font-size: 1rem;
  font-weight: 600;

  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
`;

export const Total = styled.div`
  border-top: 1px solid #bbb;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const Discount = styled.div`
  color: #d32f2f;
`;
