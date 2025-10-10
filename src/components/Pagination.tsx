import { cn } from '@/utils/cn';
import { useQueryParams } from '@/hooks/useQueryParams';

interface PaginationProps {
  total: number;
}

const Pagination = ({ total }: PaginationProps) => {
  const { queryParams, setQueryParams } = useQueryParams();

  const limit = queryParams.limit || 10;
  const skip = queryParams.skip || 0;

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const goToPage = (page: number) => {
    setQueryParams({ skip: (page - 1) * limit });
  };

  return (
    <div className="mt-2 flex flex-wrap items-center justify-center gap-2 sm:mt-0 sm:justify-end">
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
        className={cn(
          'flex h-8 min-w-[36px] items-center justify-center rounded-md border border-gray-300 px-3 text-sm',
          currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200',
        )}
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => goToPage(page)}
          className={cn(
            'flex h-8 min-w-[36px] items-center justify-center rounded-md border border-gray-300 px-3 text-sm',
            page === currentPage ? 'bg-blue-500 text-white' : 'hover:bg-gray-200',
          )}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
        className={cn(
          'flex h-8 min-w-[36px] items-center justify-center rounded-md border border-gray-300 px-3 text-sm',
          currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-200',
        )}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
