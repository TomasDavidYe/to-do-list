import { Injectable } from '@angular/core';
import { List } from '../objects/objects'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }


  getAllLists(): List[]{ 
      let storage =  JSON.parse(localStorage.getItem('lists'));
      storage = storage ? storage : [];
      let result: List[] = [] as List[];
      storage.forEach(list => {
        result.push(new List(list))
      });
      return result;
  }

  getList(index: number): List{
    let storage = JSON.parse(localStorage.getItem('lists'))
    storage = storage ? storage : [];
    return new List(storage.find((value, i)=> i === index))
  }

  storeLists(lists: List[]): void{
    localStorage.setItem('lists', JSON.stringify(lists))
  }
}
