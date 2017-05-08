import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Nav } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CheckListComponent } from './check-list/check-list.component';
import { TodoService } from './todo.service';

@NgModule({
  declarations: [
    AppComponent,
    Nav,
    HomeComponent,
    CheckListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
