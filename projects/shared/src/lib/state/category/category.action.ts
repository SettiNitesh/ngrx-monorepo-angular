import { createAction, props } from '@ngrx/store';
import { ICategory } from '../../interface/category';

export const getCategories = createAction('[Category Component] GetCategories');

export const addCategory = createAction(
  '[Category Component] Add Category',
  props<{ category: ICategory }>()
);
