import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromBattlefield from './battlefield.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BattlefieldEffects } from './battlefield.effects';
import { HarbourComponent } from './containers/harbour/harbour.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('battlefield', fromBattlefield.reducer),
    EffectsModule.forFeature([BattlefieldEffects])
  ],
  declarations: [HarbourComponent]
})
export class BattlefieldModule { }
