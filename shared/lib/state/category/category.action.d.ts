import { ICategory } from '../../interface/category';
export declare const getCategories: import("@ngrx/store").ActionCreator<"[Category Component] GetCategories", () => import("@ngrx/store").Action<"[Category Component] GetCategories">>;
export declare const addCategory: import("@ngrx/store").ActionCreator<"[Category Component] Add Category", (props: {
    category: ICategory;
}) => {
    category: ICategory;
} & import("@ngrx/store").Action<"[Category Component] Add Category">>;
