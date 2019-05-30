import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MediathequeSharedLibsModule, MediathequeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MediathequeSharedLibsModule, MediathequeSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MediathequeSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MediathequeSharedModule {
  static forRoot() {
    return {
      ngModule: MediathequeSharedModule
    };
  }
}
