import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'app/shared/services/sidenav.service';

@Component({
  selector: 'jhi-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(private sidenavService: SidenavService) {}
  toggleSidenav = () => {
    this.sidenavService.emitChange(!this.sidenavService.open);
  };
  ngOnInit(): void {}
}
