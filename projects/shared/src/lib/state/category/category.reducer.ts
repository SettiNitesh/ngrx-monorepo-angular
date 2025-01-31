import { createReducer, on } from '@ngrx/store';
import { addCategory, getCategories } from './category.action';
import { initialState } from './category.state';

export const categoryReducer = createReducer(
  initialState,
  on(getCategories, (state) => ({
    ...state,
    categories: state.categories,
  })),
  on(addCategory, (state, action) => ({
    ...state,
    categories: [...state.categories, action.category],
  }))
);
