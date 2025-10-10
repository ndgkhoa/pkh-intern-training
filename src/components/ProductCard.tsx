import type { Product } from '@/features/products/types/product';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg border bg-white shadow-sm transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <img src={product.thumbnail} alt={product.title} className="h-48 w-full object-cover p-2" />

      <div className="p-4">
        <h3 className="truncate text-lg font-semibold">{product.title}</h3>
        <p className="mb-2 truncate text-sm text-gray-500">{product.brand}</p>

        <div className="mb-2 flex items-center gap-2">
          <span className="text-xl font-bold text-red-500">${discountedPrice}</span>
          <span className="text-sm text-gray-400 line-through">${product.price}</span>
          <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">-{product.discountPercentage}%</span>
        </div>

        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-sm">{product.rating}</span>
        </div>

        <button className="mt-3 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
