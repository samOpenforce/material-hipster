import { Routes } from '@angular/router';

import { TypographyComponent } from './typography/typography.component';
import { StepperComponent } from './stepper/stepper.component';
import { FilterComponent } from './filter/filter.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
export const appRoutes: Routes = [
  { path: 'typography', component: TypographyComponent, outlet: 'table-outlet' },
  { path: '', component: SidenavComponent, outlet: 'sidenav-outlet' },
  {
    path: '',
    component: StepperComponent,
    outlet: 'stepper-outlet',
  },
  {
    path: '',
    component: FilterComponent,
    outlet: 'filter-outlet',
  },
  {
    path: '',
    component: TableComponent,
    outlet: 'table-outlet',
  },
];
