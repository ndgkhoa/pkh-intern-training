export interface QueryParamsBase {
  limit?: number;
  skip?: number;
  keyword?: string;
  q?: string; // for search
  sortBy?: string;
  order?: 'asc' | 'desc';
}
