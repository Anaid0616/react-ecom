import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from '../../store/useCartStore';
import { TProduct } from '../../types/Products';
import { toast } from 'react-hot-toast';
import {
  Card,
  ProductImage,
  ProductContent,
  Actions,
  ViewButton,
  QuickAddButton,
} from './Product.styles';

// --- Types ---
type ProductProps = {
  product: TProduct;
};

/**
 * Renders a single product card with image, title, and price.
 * The entire card is wrapped in a link that navigates to the product's detail page.
 *
 * @component
 * @param {Object} props - Props for the component.
 * @param {TProduct} props.product - The product data to display.
 * @returns {JSX.Element} A clickable product card.
 */
export const Product = ({ product }: ProductProps) => {
  const { image, title, price, id } = product;
  const addToCart = useCartStore((state) => state.addToCart);

  const handleQuickAdd = () => {
    addToCart(product);
    toast.success(`${title} added to cart`);
  };

  return (
    <Card>
      <ProductImage
        src={image.url}
        alt={image.alt || title}
        width={300}
        height={300}
        loading="lazy"
      />

      <ProductContent>
        <h2>{title}</h2>
        <h3>{price} €</h3>
        <Actions>
          <ViewButton to={`/product/${id}`} aria-label="View product">
            View product
          </ViewButton>

          <QuickAddButton onClick={handleQuickAdd} aria-label="Add to cart">
            <FaShoppingCart />
            <span
              style={{
                marginLeft: '0.2rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                lineHeight: '1',
              }}
            >
              +
            </span>
          </QuickAddButton>
        </Actions>
      </ProductContent>
    </Card>
  );
};
