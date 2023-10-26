import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatViewComponent } from './chat-view/chat-view.component';
import { GuestsListComponent } from './guests-list/guests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatViewComponent,
    GuestsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
