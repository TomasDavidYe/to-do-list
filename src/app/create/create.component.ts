import { Component, OnInit } from '@angular/core';
import { List, Task } from '../app.component';
import { ListService } from '../services/list.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  inputList: List;
  numOfTasks: number = 0;
  
   

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.inputList = this.getEmptyList();
  }


  addTaskInput(): void{
    this.inputList.tasks.push(new Task());
    console.log("num of tasks is ", this.inputList.tasks.length)
  }

  submitList(): void{
    if(this.isInputValid()){
    console.log("storing in database this object: ", this.inputList)
    let lists: List[] = this.listService.getLists() ? this.listService.getLists() : []
    lists.push(this.inputList);
    this.listService.storeLists(lists);
    this.inputList = this.getEmptyList();
    alert("List successfuly added")
    } else{
      alert("Please fill in all of the empty values")
    }    
  }

  getEmptyList(): List{
    return new List()
  }
 


  isInputValid(): boolean{
    if(!this.inputList.name) return false;
    for(let task of this.inputList.tasks) if (!task.name) return false;
    return true;
  }

 





}
