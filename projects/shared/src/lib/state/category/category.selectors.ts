import { createFeatureSelector, createSelector } from '@ngrx/store';
import { categories, ICategoryState } from './category.state';

const selectCategories = createFeatureSelector<ICategoryState>(categories);

export const categoriesSelector = createSelector(
  selectCategories,
  (state: ICategoryState) => state.categories
);
