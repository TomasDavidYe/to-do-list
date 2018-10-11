import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { List } from '../../objects/objects'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists: List[]

  constructor(private listService: ListService, private router: Router, private route: ActivatedRoute) { }
  highlight: boolean = false;

  ngOnInit() {
    this.lists = this.listService.getAllLists();    
    this.route.paramMap.subscribe(params => {
      if(params.get("new_list")) this.highlight = true 
    })
  }

  remove(index: number): void{
    this.lists = this.lists.filter((value, i) => i !== index);
    this.listService.storeLists(this.lists)
  } 

  goToList(index: number): void{
    this.router.navigate(['/list', index])
  }

  shouldHighlight(index: number): boolean{
    return (index === this.lists.length - 1) && this.highlight
  }

}
