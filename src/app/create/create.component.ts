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
    this.numOfTasks++;
    console.log("num of tasks is ", this.numOfTasks)
  }

  submitList(): void{
    console.log("storing in database this object: ", this.inputList)
    
  }

  isTaskInputDisplayed(index: number): boolean{
    return (this.numOfTasks >= index)
  }

  isAddInputButtonDisplayed(): boolean{
    return (this.numOfTasks < 5)
  }





}
