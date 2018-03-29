// here we import Angular and external libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// here we import our own components
import { AppComponent } from './app.component';
import { EnclosureComponent } from './enclosure/enclosure.component';

// here we import our services
// ... services coming soon

@NgModule({
  // here we import our own components
  declarations: [
    AppComponent,
    EnclosureComponent
  ],
  // here we import Angular and external libraries
  imports: [
    BrowserModule
  ],
  // here we import our services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
