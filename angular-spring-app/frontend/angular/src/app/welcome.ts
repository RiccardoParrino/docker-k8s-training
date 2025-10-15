import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Welcome {
  
  constructor( private http:HttpClient ) {}

  welcome() : Observable<{msg:string}> {
    return this.http.get<{msg:string}>("http://localhost:8080/api/welcome");
  }

}
