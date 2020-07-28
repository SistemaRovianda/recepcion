import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { createEffect } from '@ngrx/effects';
import { Dried } from '../models/dried.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DriedService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  saveEntryDried(dried: Dried): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/entry/drief`, dried);
  }
}
