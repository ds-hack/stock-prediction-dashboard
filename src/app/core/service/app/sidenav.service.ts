import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Sidenav } from '../../model/app/sidenav';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {
  sidenav = new Sidenav();
  sidenavSubject = new Subject<Sidenav>();
  sidenavState = this.sidenavSubject.asObservable();

  toggle(): void {
    this.sidenav.showSidenav = !this.sidenav.showSidenav;
    this.sidenavSubject.next(this.sidenav);
  }

  changeMenu(menu: string): void {
    this.sidenav.menu = menu;
    this.sidenavSubject.next(this.sidenav);
  }
}
