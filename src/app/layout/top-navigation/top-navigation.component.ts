import { Component, Input, OnInit } from '@angular/core';

import { NavigationLink } from '../models/navigation-link';

@Component({
  selector: 'bs-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {
  @Input() links: NavigationLink[];
}
