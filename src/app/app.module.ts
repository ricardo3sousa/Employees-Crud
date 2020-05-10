import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { ErrComponent } from './err/err.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailsComponent,
    AddComponent,
    UpdateComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
