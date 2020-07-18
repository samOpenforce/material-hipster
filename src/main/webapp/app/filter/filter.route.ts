import { Route } from '@angular/router';
import { FilterComponent } from './filter.component';
export const filterRoute: Route = {
  path: '',
  component: FilterComponent,
  outlet: 'filter-outlet',
};
