import { Route } from '@angular/router';
import { StepperComponent } from './stepper.component';
export const stepperRoute: Route = {
  path: '',
  component: StepperComponent,
  outlet: 'stepper-outlet',
};
