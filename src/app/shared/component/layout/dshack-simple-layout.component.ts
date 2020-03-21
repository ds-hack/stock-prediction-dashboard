import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

import { SidenavService } from '../../../core/service/sidenav.service';
import { Sidenav } from '../../../core/model/sidenav';

@Component({
  selector: 'app-dshack-simple-layout',
  styleUrls: ['dshack-simple-layout.component.scss'],
  templateUrl: 'dshack-simple-layout.component.html',
})
export class DshackSimpleLayoutComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenavId: MatSidenav;
  public navPages: {name: string, link: string}[];
  public subscription: Subscription;

  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    this.subscription = this.sidenavService.sidenavState.subscribe(
      (sidenav: Sidenav) => {
        if (sidenav && this.sidenavId) {
            this.sidenavId.toggle(sidenav.showSidenav);
            this.navPages = sidenav.pages[sidenav.menu];
        }
    });
  }

  noButtonClosed(): void {
    this.sidenavService.toggle();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
