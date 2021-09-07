import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { User } from 'src/app/models/user';
import { CategoryService } from 'src/app/services/category.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  users: User[]=[];
  dataLoaded=false;
  currentUser:User;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getUsers();

  }

  getUsers(){
    this.categoryService.getUsers().subscribe(response=>{
      this.users=response
      this.dataLoaded=true;
      console.log(response);
    })
  }

  setCurrentUser(user:User){
      this.currentUser=user;
  }

  getCurrentCategoryClass(user:User){
    if(user==this.currentUser){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
