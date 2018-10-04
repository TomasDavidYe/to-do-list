import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService: ListService) { }

  ngOnInit() {
    console.log("LIST INIT")
    let lists = this.listService.getLists();
    if(lists)lists.forEach((list, index) => console.log("This is list number ",index,"  ",list))
    else console.log("no lists")
  }

}
