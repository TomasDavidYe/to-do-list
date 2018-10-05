import { Component } from '@angular/core';
import { Router,} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Tommy\'s To-Do List app';


  constructor( private router : Router){
  }

  home(): void{
    this.router.navigate(['/home'])
  }

  createList(): void {
    this.router.navigate(['/create'])
  }

  viewLists(): void{
    this.router.navigate(['/list'])
  }

 
}



export class List{
  constructor(){
    this.name = '';
    this.tasks = [];
  }
  name: string;
  tasks: Task[];

  public getNumOfTasks(): number{
    return this.tasks.length
  }
  public getNumOfCompletedTasks(): number{
    return this.tasks.filter(task => task.done).length
  }

}

export class Task{
  constructor(){
    this.name = null;
    this.reset();
  }
  name: string;
  done: boolean;

  complete(): void{
    this.done = true;
  }
  reset(): void{
    this.done = false;
  }
}


