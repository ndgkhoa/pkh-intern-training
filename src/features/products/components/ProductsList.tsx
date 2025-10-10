import type { Product } from '@/features/products/types/product';
import ProductCard from '@/components/ProductCard';

interface ProductsListProps {
  products: Product[];
}

const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <>
      <h1 className="mb-6 text-2xl font-bold">Featured Products</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
