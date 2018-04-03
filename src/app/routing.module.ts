import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JungleComponent } from './jungle/jungle.component';
import { MountainComponent } from './mountain/mountain.component';
import { SwampComponent } from './swamp/swamp.component';

export const routes: Routes = [
  { path: 'jungle', component: JungleComponent },
  { path: 'mountain', component: MountainComponent },
  { path: 'swamp', component: SwampComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
