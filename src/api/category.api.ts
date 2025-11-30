import { Category } from '../models/category.model';
import { httpClient } from './http';

interface RawCategory {
    category_id: number | null;
    category_name: string;
}

export const fetchCategory = async (): Promise<Category[]> => {
    const response = await httpClient.get<RawCategory[]>('/category');
    return response.data.map((item: RawCategory) => ({
        id: item.category_id,
        name: item.category_name,
    }));
};