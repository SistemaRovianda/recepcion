import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsService } from '../../services/products.service';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
} from './products.actions';
import { exhaustMap, switchMap, catchError } from 'rxjs/operators';
import { Product } from '../../models/product.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      exhaustMap((_) =>
        this.productsService.getProducts().pipe(
          switchMap((products: Product[]) => [
            loadProductsSuccess({ products: products }),
          ]),
          catchError((error) => of(loadProductsError(error)))
        )
      )
    )
  );
}
