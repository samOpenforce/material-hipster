import { NgModule } from '@angular/core';
import { HardwareSharedLibsModule } from './shared-libs.module';
import { FindLanguageFromKeyPipe } from './language/find-language-from-key.pipe';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { JhMaterialModule } from 'app/shared/jh-material.module';
import { SidenavService } from './services/sidenav.service';
@NgModule({
  imports: [JhMaterialModule, HardwareSharedLibsModule, FlexLayoutModule],
  declarations: [FindLanguageFromKeyPipe, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [
    JhMaterialModule,
    FlexLayoutModule,
    HardwareSharedLibsModule,
    FindLanguageFromKeyPipe,
    AlertComponent,
    AlertErrorComponent,
    HasAnyAuthorityDirective,
  ],
  providers: [SidenavService],
})
export class HardwareSharedModule {}
