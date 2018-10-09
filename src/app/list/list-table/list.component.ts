import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../objects/objects'
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[]

  constructor(private listService: ListService, private router: Router) { }

  ngOnInit() {
    this.lists = this.listService.getAllLists();    
  }

  remove(index: number): void{
    this.lists = this.lists.filter((value, i) => i !== index);
    this.listService.storeLists(this.lists)
  } 

  goToList(index: number): void{
    this.router.navigate(['/list', index])
  }

}
