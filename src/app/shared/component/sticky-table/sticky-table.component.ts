import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sticky-table',
  styleUrls: ['sticky-table.component.scss'],
  templateUrl: 'sticky-table.component.html',
})
export class StickyTableComponent {
  @Input() tableColumns: string[];
  @Input() headerTitles: string[];
  @Input() dataSource: object[];
}
