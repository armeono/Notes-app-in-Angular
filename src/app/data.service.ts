import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _url: string = "/api/getdata";
 

  constructor(private http: HttpClient) { }

  getData(): Observable<Data>{
    return this.http.get<Data>(this._url);
  }

  sendData(data: Data){ 
    return this.http.post("/api/post", data).subscribe();
  }

  deleteData(index: any){
    return this.http.delete(`/api/delete/${index}`, index).subscribe();
  }

  
}


