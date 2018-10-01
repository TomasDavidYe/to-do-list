import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { WindowComponent } from './window/window.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const appRoutes : Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    CreateComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
