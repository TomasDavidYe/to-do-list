import { Injectable } from '@angular/core';
import { List } from '../app.component'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }


  getLists(): List[]{ 
      let storage =  JSON.parse(localStorage.getItem('lists'));
      storage = storage ? storage : []
      let result: List[] = [] as List[]
      storage.forEach(list => {
        result.push(new List(list))
      })
      return result
  }

  storeLists(lists: List[]): void{
    localStorage.setItem('lists', JSON.stringify(lists))
  }
}
