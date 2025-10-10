import api from '@/config/axios';
import type { ProductSearchParams } from '@/features/products/types/product';

export async function getProducts(params?: ProductSearchParams) {
  const res = await api.get(`/products/search`, { params });
  return res.data;
}
