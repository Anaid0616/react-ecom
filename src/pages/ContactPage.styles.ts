import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

export const Field = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;

    &:focus {
      border-color: rgb(0, 131, 138);
      outline: none;
    }
  }
`;

export const Button = styled.button`
  padding: 0.7rem 1.5rem;
  background-color: rgb(0, 131, 138);
  color: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #007d6f;
  }
`;

export const SuccessMessage = styled.p`
  color: green;
  font-weight: bold;
  margin-bottom: 1rem;
`;
