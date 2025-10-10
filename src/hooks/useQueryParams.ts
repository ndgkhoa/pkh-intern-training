import { useSearchParams } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { DEFAULT_LIMIT, DEFAULT_SKIP, DEFAULT_KEYWORD, DEBOUNCE_TIME } from '@/constants';
import type { QueryParamsBase } from '@/types';

export function useQueryParams<T extends QueryParamsBase>(options?: Partial<T>) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse default values
  const queryParams: T = {
    limit: Number(searchParams.get('limit')) || DEFAULT_LIMIT,
    skip: Number(searchParams.get('skip')) || DEFAULT_SKIP,
    q: searchParams.get('q') || DEFAULT_KEYWORD,
    ...options,
  } as T;

  const updateSearchParams = (params: Partial<T>) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });
    return newParams;
  };

  // Set query params directly
  const setQueryParams = (params: Partial<T>) => {
    setSearchParams(updateSearchParams(params));
  };

  // Set query params with debounce
  const setQueryWithDebounce = debounce((params: Partial<T>) => {
    setSearchParams(updateSearchParams(params));
  }, DEBOUNCE_TIME);

  return { queryParams, setQueryParams, setQueryWithDebounce };
}
