import {NgModule} from '@angular/core';
import {RouterComponent, ROUTES} from './router/router.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


// http://blog.angular-university.io/angular2-ngmodule/
// -> Making modules more readable using the spread operator


@NgModule({
  declarations: [
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpModule,
      HttpClientModule,
      RouterModule.forRoot(ROUTES),
  ],
  providers: [

  ],
  bootstrap: [RouterComponent]
})
export class AppModule { }
