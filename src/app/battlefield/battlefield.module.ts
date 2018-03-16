import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BattlefieldEffects } from './battlefield.effects';
import * as fromBattlefield from './battlefield.reducer';
import { CoordinateInputComponent } from './components/coordinate-input/coordinate-input.component';
import { CraftWarshipComponent } from './components/craft-warship/craft-warship.component';
import { HarbourComponent } from './containers/harbour/harbour.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('battlefield', fromBattlefield.reducer),
    EffectsModule.forFeature([BattlefieldEffects]),

    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    HarbourComponent,
    CraftWarshipComponent,
    CoordinateInputComponent
  ],
  exports: [CraftWarshipComponent]
})
export class BattlefieldModule {
  constructor(private _icons: MatIconRegistry, private _trust: DomSanitizer) {
    ['destroyer', 'submarine', 'cruiser', 'battleship', 'carrier'].forEach(
      icon => this._registerSvgIcon(icon)
    );
  }

  _registerSvgIcon(icon: string) {
    this._icons.addSvgIcon(
      icon,
      this._trust.bypassSecurityTrustResourceUrl(
        `assets/battleships/${icon}.svg`
      )
    );
  }
}
