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
  //CRUD with 2 keys string
  getItem2StringId(url: string, itemId1: string, itemId2: string) : Observable<any>{
    return this.http.get<any>(this.rootURL + "/" + url + "/" + itemId1 + "+" + itemId2);
  }  

  putItem2StringId(url : string, item : any, itemId1: string, itemId2: string) {
    return this.http.put(this.rootURL + "/" + url + "/" + itemId1 + "+" + itemId2, item);
  }
  
  deleteItem2StringId(url : string, itemId1: string, itemId2: string){
    return this.http.delete(this.rootURL+ "/" + url + "/" + itemId1 + "+" + itemId2);
  }

  //CRUD with 2 keys - 1int 1string
  getItem1String1IntId(url: string, itemId1: string, itemId2) : Observable<any>{
    return this.http.get<any>(this.rootURL + "/" + url + "/" + itemId1 + "+" + itemId2);
  }  

  putItem1String1IntId(url : string, item : any, itemId1: string, itemId2: number) {
    return this.http.put(this.rootURL + "/" + url + "/" + itemId1 + "+" + itemId2, item);
  }
  
  deleteItem1String1IntId(url : string, itemId1: string, itemId2: number){
    return this.http.delete(this.rootURL+ "/" + url + "/" + itemId1 + "+" + itemId2);
  }
}
