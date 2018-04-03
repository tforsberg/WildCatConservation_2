// here we import Angular and external libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';

// here we import our own components
import { AppComponent } from './app.component';
import { EnclosureComponent } from './enclosure/enclosure.component';
import { AppRoutingModule } from './/routing.module';
import { JungleComponent } from './jungle/jungle.component';
import { MountainComponent } from './mountain/mountain.component';
import { SwampComponent } from './swamp/swamp.component';

// here we import our services
import { CatService } from './cat.service';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  // here we import our own components
  declarations: [
    AppComponent,
    EnclosureComponent,
    JungleComponent,
    MountainComponent,
    SwampComponent,
    NavbarComponent,
  ],
  // here we import Angular and external libraries and modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  // here we import our services
  providers: [
    CatService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
