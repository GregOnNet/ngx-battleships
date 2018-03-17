import { NgModule } from '@angular/core';

import { LocalStorage } from './local-storage.service';

@NgModule({
  providers: [LocalStorage]
})
export class LocalStorageModule {}
