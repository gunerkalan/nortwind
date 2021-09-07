import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todo } from '../models/todo';
import { TodoResponseModel } from '../models/todoResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://jsonplaceholder.typicode.com/todos";


  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<Todo>{
    return this.httpClient.get<Todo>(this.apiUrl);
  }
}
