import { ProductResponseModel } from './../../models/productResponseModel';
import { TodoResponseModel } from './../../models/todoResponseModel';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  //todo1 = { userId: 1, id: 1, title: 'Başlık', completed: true}
  //todo2 = { userId: 1, id: 2, title: 'Önerme', completed: true}
  //todo3 = { userId: 1, id: 3, title: 'Dilekçe', completed: true}
  //todo4 = { userId: 1, id: 4, title: 'Gazete', completed: true}
  //todo5 = { userId: 1, id: 5, title: 'Haber', completed: true}

  todos:Todo[] = [
    //this.todo1, this.todo2, this.todo3, this.todo4, this.todo5
  ];
  dataLoaded=false;

  todoResponseModel:TodoResponseModel={
    data:this.todos,
    message:"",
    success:true
  };

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(){
   this.productService.getTodos().subscribe(response=>{
     this.todos=response;
     this.dataLoaded=true;
   })
  }

}
