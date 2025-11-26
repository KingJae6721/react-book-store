import { Category } from '../models/category.model';
import { httpClient } from './http';

// Mock data for development
const mockCategories: Category[] = [
    { id: null, name: '전체' },
    { id: 1, name: '기술' },
    { id: 2, name: '소설' },
    { id: 3, name: '자기계발' },
    { id: 4, name: '역사' },
];

export const fetchCategory = async () => {
    try {
        const response = await httpClient.get<Category[]>('/category');
        return response.data;
    } catch (error) {
        console.warn('Failed to fetch categories from API, using mock data:', error);
        // Return mock data as fallback
        return mockCategories;
    }
};