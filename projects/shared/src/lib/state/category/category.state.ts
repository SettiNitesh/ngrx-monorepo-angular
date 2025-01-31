import { ICategory } from '../../interface/category';

export interface ICategoryState {
  categories: ICategory[];
}

export const initialState: ICategoryState = {
  categories: [{ name: 'Horror' }, { name: 'Drama' }, { name: 'Romance' }],
};

export const categories = 'categories';
