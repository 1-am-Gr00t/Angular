import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StringIdService {

  constructor(private http: HttpClient) { }

  readonly rootURL = "https://localhost:5001/api";

  getItems(url : string) : Observable<any[]>{
    return this.http.get<any[]>(this.rootURL + "/" + url);
  }
  getItem(url: string, itemId: string) : Observable<any>{
    return this.http.get<any>(this.rootURL + "/" + url + "/" + itemId);
  }
  postItem(url : string, item : any) {
    return this.http.post(this.rootURL + "/" + url, item);   
  }  

  putItem(url : string, item : any, itemId: string) {
    return this.http.put(this.rootURL + "/" + url + "/" + itemId, item);
  }
  
  deleteItem(url : string, itemId: string){
    return this.http.delete(this.rootURL+ "/" + url + "/" + itemId);
  }
}
