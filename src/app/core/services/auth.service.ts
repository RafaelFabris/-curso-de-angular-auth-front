import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string =  'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  public sing(payLoad: {email:string, password:string}): Observable<any>{
    return this.http.post<{token: string}>(`${this.url}/sign`, payLoad).pipe(
      map((res) =>{
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token' , res.token);
        return this.router.navigate(['admin']);
      }),
      catchError((e)=> {

        if(e.error.message) return throwError(()=> e.error.message);

        return throwError(()=> "No momento não estamos conseguindo validar este dados, tente novamente mais tarde!")
      })
    )

  }

  public logOut(){
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }
}
