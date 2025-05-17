import { render, screen } from '@testing-library/react';
import { TProduct } from '../../types/Products';
import { describe, expect, test } from 'vitest';
import { ProductsList } from './ProductsList';
import { MemoryRouter } from 'react-router-dom'; // 🧠 behövs!

describe('ProductList', () => {
  test('shows the correct products', () => {
    const productsFixture: TProduct[] = [
      {
        id: '1',
        title: 'This is my title',
        description: 'This is my description',
        price: 19.99,
        discountedPrice: 15.99,
        image: { alt: 'sample image', url: 'https://via.placeholder.com/150' },
        rating: 5,
        reviews: [
          {
            description: 'Review no. 1',
            id: '1',
            rating: 5,
            username: 'OlaNordmann',
          },
        ],
        tags: [],
      },
    ];

    render(
      <MemoryRouter>
        <ProductsList products={productsFixture} />
      </MemoryRouter>
    );

    expect(screen.getByText(productsFixture[0].title)).toBeInTheDocument();
    expect(screen.getByText(/19.99/)).toBeInTheDocument();
  });
});
