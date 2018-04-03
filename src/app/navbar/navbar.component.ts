import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { routes } from '../routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  routeArray = routes;

  constructor( private router: Router ) {}

  navigate(location: string) {
    this.router.navigate([location]);
  }

}
