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
    let drief: Dried = {
      proveedorid: dried.proveedor,
      lotProveedor: dried.lotProveedor,
      productId: dried.productId,
      date: dried.date,
      quantity: dried.quantity,
      observations: dried.observations,
      quality: dried.quality,
      rawMaterial: dried.rawMaterial,
      expiration: dried.expiration,
      transport: dried.transport,
      strangeMaterial: dried.strangeMaterial,
      odor: dried.odor,
      paking: dried.paking,
      color: dried.color,
      texture: dried.texture,
      weight: dried.weight,
      isPz: dried.isPz,
      makeId: dried.makeId
    };
    return this.http.post<any>(`${this.endpoint}/entry/drief`, drief);
  }
}
