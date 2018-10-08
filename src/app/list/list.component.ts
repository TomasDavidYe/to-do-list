import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { List } from '../objects/objects'

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

  remove(index: number): void{
    this.lists = this.lists.filter((value, i) => i !== index);
    this.listService.storeLists(this.lists)
  } 

}
