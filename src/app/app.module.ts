import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { Routes, Router, RouterModule } from '../../node_modules/@angular/router';
import { WindowComponent } from './window/window.component';

const appRoutes : Routes = [
  {path: 'home', component : AppComponent},
  {path: 'dummy', component : DummyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DummyComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
