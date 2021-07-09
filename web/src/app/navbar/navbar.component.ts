import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  hamburgerOpen = false;

  constructor() {}

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }
}
