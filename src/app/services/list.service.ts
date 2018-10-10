import { Injectable } from '@angular/core';
import { List } from '../objects/objects'

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }


  getStorage(){
    let storage =  JSON.parse(localStorage.getItem('lists'));
    storage = storage ? storage : [];
    return storage;
  }

  updateList(index: number, list: List){
    let lists = this.getAllLists();
    lists[index] = list;
    this.storeLists(lists)
  }

  getAllLists(): List[]{
      let storage = this.getStorage(); 
      let result: List[] = [] as List[];
      storage.forEach(list => {
        result.push(new List(list))
      });
      return result;
  }

  getList(index: number): List{
    let storage = this.getStorage(); 
    return new List(storage.find((value, i)=> i === index))
  }

  storeLists(lists: List[]): void{
    localStorage.setItem('lists', JSON.stringify(lists))
  }
}
