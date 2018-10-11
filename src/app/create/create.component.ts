import { Component, OnInit } from '@angular/core';
import { List, Task } from '../objects/objects';
import { ListService } from '../services/list.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  inputList: List;
  numOfTasks: number = 0;
  
   

  constructor(private listService: ListService, private router: Router) { }

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
    let lists: List[] = this.listService.getAllLists() ? this.listService.getAllLists() : []
    lists.push(this.inputList);
    this.listService.storeLists(lists);
    alert("List "+ this.inputList.name + " successfuly added")
    this.inputList = this.getEmptyList();
    this.goToLists();
    } else{
      alert("Please fill in all of the empty values")
    }    
  }

  goToLists(){
    this.router.navigate(['/list', {new_list: true}])
  }

  getEmptyList(): List{
    let emptyData = {
      name: '',
      tasks: []
    }
    return new List(emptyData)
  }
 


  isInputValid(): boolean{
    if(!this.inputList.name) return false;
    for(let task of this.inputList.tasks) if (!task.name) return false;
    return true;
  }

 





}
