import { Component, OnInit } from '@angular/core';
import { List, Task } from '../app.component'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  inputList: List;
  numOfTasks: number = 0;
  
   

  constructor() { }

  ngOnInit() {
    this.inputList = {
      name: '',
      tasks: []
    }
  }


  addTaskInput(): void{
    this.inputList.tasks.push(new Task());
    console.log("num of tasks is ", this.inputList.tasks.length)

  }

  submitList(): void{
    if(this.isInputValid()){
    console.log("storing in database this object: ", this.inputList)
    } else{
      alert("list contains empty values")
    }
    
  }

  isInputValid(): boolean{
    let result = true;
    return result;
  }

 





}
