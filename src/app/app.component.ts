import { Component, Injector, Injectable, Inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router'
import { Plugins } from '../../node_modules/protractor/built/plugins';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To-Do List';
  points = 0;


  constructor(@Inject(Router) private router : Router){
      this.run()
  }

  plus1() {
        this.points++;
  }

  

  redirectToDummyComponent() {
    if(this.router.url == '/dummy'){
      this.router.navigate(['/']);
    }else{
      this.router.navigate(['/dummy']);
    }
  }

  run(){
    var a = "The new line character is written like: \"\\n\\\""
    var b = "con" + "cate" + "nated"
    var c = `half of 100 is ${100 / 2}`
    var hours = 15;
    var minutes = 30;
    var time = `${hours}:${minutes}`
    var type1 = typeof 4.5
    var type2 = typeof "word"
    var bool1 = 3 < 2
    var bool2 = (null == "")
    var value1 = (NaN ? 1 : 2)
    let d = ("5" as any) * 2;
    let e = (null as any) * 8;
    let f = ("5" + 1)
    let g = ("five" as any) * 2;
    let h = (false as any) == 0
    let i = ("" as any) == false
    let j = null || NaN
    let k = null && "hi"
  
    console.log(k)
  }
}


