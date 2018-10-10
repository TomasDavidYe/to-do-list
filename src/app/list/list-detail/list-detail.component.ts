import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { ListService } from '../../services/list.service'
import { List } from '../../objects/objects';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private listService: ListService) { }
  list: List;
  index: number;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let index = +params.get('id')
      this.list = this.listService.getList(index)
      this.index = index;
    })
  }
  back(){
    this.router.navigate(['/list'])
  }
  save(){
    this.listService.updateList(this.index, this.list);
    this.back();
  }

}
