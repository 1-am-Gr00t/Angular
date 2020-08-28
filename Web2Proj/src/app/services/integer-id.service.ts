import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegerIdService {

  constructor(private http: HttpClient) { }

  readonly rootURL = "https://localhost:5001/api";

  getItems(url : string) : Observable<any[]>{
    return this.http.get<any[]>(this.rootURL + "/" + url);
  }
  getItem(url: string, itemId: number) : Observable<any>{
    return this.http.get<any>(this.rootURL + "/" + url + "/" + itemId);
  }
  postItem(url : string, item : any) {
    return this.http.post(this.rootURL + "/" + url, item);   
  }  

  putItem(url : string, item : any, itemId: number) {
    return this.http.put(this.rootURL + "/" + url + "/" + itemId, item);
  }
  
  deleteItem(url : string, itemId: number){
    return this.http.delete(this.rootURL+ "/" + url + "/" + itemId);
  }
}
