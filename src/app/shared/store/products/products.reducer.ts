import { Product } from '../../models/product.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
} from './products.actions';

export interface ProductsState {
  loading: boolean;
  products: Product[];
  error: string;
}

const initialState: ProductsState = {
  loading: false,
  products: [],
  error: null,
};

const _productsReducer = createReducer<ProductsState>(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(loadProductsError, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function productsReducer(state: ProductsState, action: Action) {
  return _productsReducer(state, action);
}
