import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { EntryMeat } from '../models/meat.interface';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeatService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  saveEntryMeat(meat: EntryMeat): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/entry/meat`, meat);
  }

  generateReport(meatId: string): Observable<any> {
    console.log('Generando reporte');
    return of(1);
  }
}
