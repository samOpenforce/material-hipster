import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'app/shared/services/sidenav.service';

@Component({
  selector: 'jhi-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {}

  toggleSidenav = () => {
    this.sidenavService.emitChange(!this.sidenavService.open);
  };

  ngOnInit(): void {}
}
