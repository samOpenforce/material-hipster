import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { HardwareSharedModule } from 'app/shared/shared.module';
import { HardwareCoreModule } from 'app/core/core.module';
import { HardwareAppRoutingModule } from './app-routing.module';
import { HardwareHomeModule } from './home/home.module';
import { HardwareEntityModule } from './entities/entity.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HardwareSharedModule,
    HardwareCoreModule,
    HardwareHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    HardwareEntityModule,
    HardwareAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class HardwareAppModule {}
