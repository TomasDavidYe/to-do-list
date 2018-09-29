import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyComponent } from './dummy.component';
import { resolve } from 'dns';

describe('DummyComponent', () => {
  let component: DummyComponent;
  let fixture: ComponentFixture<DummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    let promiseToCleanTheRoom = new Promise((resolve, reject)=>{
      //cleaning the room
      let isClean = false;
      if(isClean){
        resolve('Clean!!!')
      }else{
        reject('Not Clean!!!')
      }
    });

    promiseToCleanTheRoom.then((fromResolve) => {
      console.log('the room is ' + fromResolve)
    }).catch((fromReject)=>{
      console.log('the room is ' + fromReject)
    })

    expect(component).toBeTruthy();

  });
});
