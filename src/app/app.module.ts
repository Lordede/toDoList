import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { InputFieldComponent } from './inputField/inputField.component';
import { TodoOffenComponent } from './todo-offen/todo-offen.component';
import { TodoSmartComponent } from './todo-smart/todo-smart.component';
import { TodoErledigtComponent } from './todo-erledigt/todo-erledigt.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeadComponent,
      InputFieldComponent,
      TodoOffenComponent,
      TodoSmartComponent,
      TodoErledigtComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
