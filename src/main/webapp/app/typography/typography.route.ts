import { Route } from '@angular/router';
import { TypographyComponent } from './typography.component';
export const typographyRoute: Route = {
  path: 'typography',
  component: TypographyComponent,
  outlet: 'table-outlet',
};
