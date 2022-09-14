import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct, IUser } from 'src/app/interfaces';
import { environment } from '@env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly api = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public productList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.api}/product`);
  }

  public signUp(user: Partial<IUser>): Observable<IUser> {
    return this.http.post<IUser>(`${this.api}/user/register`, user);
  }

  public signIn(user: Partial<IUser>): Observable<IUser> {
    return this.http.post<IUser>(`${this.api}/user/login`, user);
  }
}
