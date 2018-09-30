import { Component } from '@angular/core';
import { Router,} from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-Do List';


  constructor( private router : Router){
  }

  createList(): void {
    this.router.navigate(['/create'])
  }
}



export class List{
  name: string
}


