import { Injectable } from '@angular/core';
import { User } from './model/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thesis } from './model/Thesis';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080';

   constructor(private http: HttpClient) { }

   getUser(id: number): Observable<any> {
     return this.http.get(`${this.baseUrl}/admin/getuser/${id}`);
   }

   createUser(user: User): Observable<User> {
     return this.http.post<User>(`${this.baseUrl}/admin/register`, user);
   }

   updateUser(user: User): Observable<User> {
     return this.http.put<User>(`${this.baseUrl}/admin/modify`, user);
   }

   deleteUser(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/admin/delete/${id}`, { responseType: 'text' });
   }

   getUserList(): Observable<User[]> {
     return this.http.get<User[]>(`${this.baseUrl}/admin/getusers`);
   }

   getStudentList(): Observable<User[]> {
     return this.http.get<User[]>(`${this.baseUrl}/secretary/get`);
   }

   activateStudent(id: number): Observable<User[]> {
     return this.http.post<User[]>(`${this.baseUrl}/secretary/activate/${id}`, { responseType: 'boolean' });
   }

   login(user: User): Observable<any> {
     return this.http.post(`${this.baseUrl}/admin/login`,user);
   }

   getThesis(): Observable<Thesis[]> {
    return this.http.get<Thesis[]>(`${this.baseUrl}/user/get`);
  }

  registerThesis(thesis: Thesis): Observable<Thesis[]> {
      return this.http.post<Thesis[]>(`${this.baseUrl}/secretary/register`, thesis);
    }

  chooseThesis(idUser: number, idThesis: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/register/${idUser}/${idThesis}`);
  }
 }
