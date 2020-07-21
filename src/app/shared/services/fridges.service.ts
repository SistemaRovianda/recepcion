import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fridge } from '../models/fridge.interface';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';

@Injectable({
  providedIn: 'root',
})
export class FridgesService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getFridges(): Observable<Fridge[]> {
    return this.http.get<Fridge[]>(`${this.endpoint}/fridges`);
  }
}
