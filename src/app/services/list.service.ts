import { Injectable } from '@angular/core';
import { List } from '../app.component'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }


  getLists(): List[]{
      let storage = localStorage.getItem('lists');
      return JSON.parse(storage) as List[];
  }

  storeLists(lists: List[]): void{
    localStorage.setItem('lists', JSON.stringify(lists))
  }
}
