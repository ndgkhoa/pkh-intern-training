import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/api/products';
import Loading from '@/components/Loading';
import ErrorMessage from '@/components/ErrorMessage';
import { useQueryParams } from '@/hooks/useQueryParams';
import type { ProductSearchParams } from '@/features/products/types/product';
import ProductsList from '@/features/products/components/ProductsList';

const ProductsPage = () => {
  const { queryParams } = useQueryParams<ProductSearchParams>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products', queryParams],
    queryFn: () => getProducts(queryParams),
  });

  if (isLoading) return <Loading />;
  if (isError) return <ErrorMessage message="Failed to load products" />;

  return (
    <>
      <ProductsList products={data.products} />
    </>
  );
};

export default ProductsPage;
