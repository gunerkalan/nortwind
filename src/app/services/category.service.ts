import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<User>{
    return this.httpClient.get<User>(this.apiUrl);
  }
}
