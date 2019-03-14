import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

const headers = new HttpHeaders().set('X-CustomHeader', 'custom header value');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, {headers});
  }

  public save(user: User) {
    console.log(this.http.post<User>(this.usersUrl, user));
    return this.http.post<User>(this.usersUrl, user, {headers});
  }

}
