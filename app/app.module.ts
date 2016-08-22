import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { routing }        from './routes';
import { AppComponent }  from './app.component';
import { HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { MenuComponent }      from './menu.component';
import { UserComponent }      from './user.component';



@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule,
    JsonpModule],
  declarations: [ AppComponent, MenuComponent, UserComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
