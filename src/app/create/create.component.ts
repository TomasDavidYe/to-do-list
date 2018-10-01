import { Component, OnInit } from '@angular/core';
import { List } from '../app.component'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  inputList: List;

  constructor() { }

  ngOnInit() {
    this.inputList = {
      name: '',
    }
  }

  submitList(): void{
    console.log("storing in database this object: ", this.inputList)
    
  }





}
