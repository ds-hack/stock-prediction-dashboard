import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Sidenav } from '../../model/app/sidenav';

@Injectable({
    providedIn: 'root'
})
export class SidenavService {

  public sidenav = new Sidenav();
  public sidenavSubject = new Subject<Sidenav>();
  public sidenavState = this.sidenavSubject.asObservable();

  toggle(): void {
    this.sidenav.showSidenav = !this.sidenav.showSidenav;
    this.sidenavSubject.next(this.sidenav);
  }

  changeMenu(menu: string): void {
    this.sidenav.menu = menu;
    this.sidenavSubject.next(this.sidenav);
  }
}
