import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemesListComponent } from './containers/memes-list/memes-list.component';
import { MemeComponent } from './components/meme/meme.component';
import { MemesService } from './services/memes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MemesListComponent,
    MemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MemesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
