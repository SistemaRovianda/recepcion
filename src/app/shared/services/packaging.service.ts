import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { Packaging } from '../models/packaging.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackagingService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  saveEntryPackaging(packaging: Packaging): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/entry/packing`, packaging);
  }
}
