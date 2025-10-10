import { useQueryParams } from '@/hooks/useQueryParams';
import type { ProductSearchParams } from '@/features/products/types/product';

const LimitSelect = () => {
  const { queryParams, setQueryParams } = useQueryParams<ProductSearchParams>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLimit = Number(e.target.value);
    setQueryParams({ limit: newLimit, skip: 0 });
  };

  return (
    <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
      <label className="text-sm font-medium whitespace-nowrap">Số sản phẩm mỗi trang:</label>
      <select
        value={queryParams.limit}
        onChange={handleChange}
        className="h-8 w-full rounded-md border border-gray-300 px-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-auto"
      >
        {[20, 30, 40, 50].map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LimitSelect;
