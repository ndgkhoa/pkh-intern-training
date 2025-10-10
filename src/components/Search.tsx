import { useNavigate } from 'react-router-dom';
import { useQueryParams } from '@/hooks/useQueryParams';
import { FiSearch } from 'react-icons/fi';

interface SearchProps {
  placeholder?: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const navigate = useNavigate();
  const { setQueryParams, queryParams } = useQueryParams();

  const handleSearch = (input: HTMLInputElement) => {
    const value = input.value.trim();
    if (!value) return;

    setQueryParams({ q: value });

    if (window.location.pathname !== '/products') {
      navigate('/products', { replace: true });
    }
  };

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        defaultValue={queryParams.q || ''}
        placeholder={placeholder || 'Tìm sản phẩm...'}
        className="w-full rounded-full border border-gray-300 py-2 pr-10 pl-4 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        onKeyDown={(e) => e.key === 'Enter' && handleSearch(e.currentTarget)}
      />

      <button
        type="button"
        className="group absolute top-1/2 right-1 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-blue-50 transition-colors hover:bg-blue-500"
        onClick={(e) => {
          const input = e.currentTarget.previousElementSibling as HTMLInputElement;
          handleSearch(input);
        }}
      >
        <FiSearch className="h-4 w-4 text-blue-600 transition-colors group-hover:text-white" />
      </button>
    </div>
  );
};

export default Search;
