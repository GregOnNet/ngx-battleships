import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoordinateInputComponent } from './components/coordinate-input/coordinate-input.component';
import { CraftWarshipComponent } from './components/craft-warship/craft-warship.component';
import { ShipSelectorComponent } from './components/ship-selector/ship-selector.component';
import { HarbourComponent } from './harbour.component';
import { HarbourRouting } from './harbour.routing';
import * as fromHarbour from './redux';
import { HarbourEffects } from './redux';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    HarbourRouting,

    StoreModule.forFeature('harbour', fromHarbour.reducer),

    EffectsModule.forFeature([HarbourEffects])
  ],
  declarations: [
    HarbourComponent,
    CoordinateInputComponent,
    CraftWarshipComponent,
    ShipSelectorComponent
  ],
  exports: [HarbourComponent]
})
export class HarbourModule {
  constructor(private _icons: MatIconRegistry, private _trust: DomSanitizer) {
    ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'].forEach(
      icon => this._registerSvgIcon(icon)
    );
  }

  private _registerSvgIcon(icon: string) {
    this._icons.addSvgIcon(
      icon,
      this._trust.bypassSecurityTrustResourceUrl(
        `assets/battleships/${icon}.svg`
      )
    );
  }
}
