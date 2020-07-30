import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { ingredient } from '../models/ingredient.interface';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

    postAddIngredient(ingredient: ingredient){
      return this.http.post(`${this.endpoint}/add/ingredient`,ingredient)
    }

    getIngredients(category:string){
      return this.http.get(`${this.endpoint}/list/ingredients?type=${category}`)
    }

    deleteIngredient(ingredientId :number){
      return this.http.delete(`${this.endpoint}/ingredient/${ingredientId}`)
    }

}
