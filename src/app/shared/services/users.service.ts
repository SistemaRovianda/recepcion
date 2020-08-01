import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT_PROVIDER } from 'src/app/providers/tokens';
import { UserRegistered } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(
    private http: HttpClient,
    @Inject(API_ENDPOINT_PROVIDER) private endpoint
  ) {}

  getUsers(): Observable<UserRegistered[]> {
    return this.http.get<UserRegistered[]>(`${this.endpoint}/user`);
  }

  getUsersByRol(rol: string): Observable<UserRegistered[]> {
    return this.http.get<UserRegistered[]>(`${this.endpoint}/user/rol/${rol}`);
  }
}
