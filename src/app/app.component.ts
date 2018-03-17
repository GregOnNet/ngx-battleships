import { Component } from '@angular/core';
import { NavigationLink } from './layout';

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  links: NavigationLink[] = [
    new NavigationLink('Craft Battleship', '/harbour')
   ];
}
