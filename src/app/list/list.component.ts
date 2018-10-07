import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../app.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[]

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.lists = this.listService.getLists();    
  }

  remove(name: string): void{
    console.log("removing list ", name)
  } 

}
