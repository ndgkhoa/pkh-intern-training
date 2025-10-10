import type { QueryParamsBase } from '@/types';

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  thumbnail: string;
}

export type ProductSearchParams = Pick<QueryParamsBase, 'limit' | 'skip' | 'q'>;
