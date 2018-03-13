import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { BattlefieldEffects } from './battlefield.effects';
import * as fromBattlefield from './battlefield.reducer';
import { HarbourComponent } from './containers/harbour/harbour.component';
import { MatIconRegistry, MatSelectModule, MatIconModule } from '@angular/material';
import { CraftWarshipComponent } from './components/craft-warship/craft-warship.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('battlefield', fromBattlefield.reducer),
    EffectsModule.forFeature([BattlefieldEffects]),

    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule
  ],
  declarations: [HarbourComponent, CraftWarshipComponent],
  exports: [CraftWarshipComponent]
})
export class BattlefieldModule {
  constructor(private _icons: MatIconRegistry, private _trust: DomSanitizer) {
    [
      'destroyer',
      'submarine',
      'cruiser',
      'battleship',
      'carrier'
    ].forEach(icon => this._registerSvgIcon(icon));
  }

  _registerSvgIcon(icon: string) {
    this._icons.addSvgIcon(
      icon,
      this._trust.bypassSecurityTrustResourceUrl(`assets/battleships/${icon}.svg`)
    );
  }
}
