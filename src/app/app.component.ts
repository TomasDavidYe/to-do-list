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
  name: string
}


