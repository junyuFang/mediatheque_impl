import { NgModule } from '@angular/core';

import { MediathequeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MediathequeSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MediathequeSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MediathequeSharedCommonModule {}
