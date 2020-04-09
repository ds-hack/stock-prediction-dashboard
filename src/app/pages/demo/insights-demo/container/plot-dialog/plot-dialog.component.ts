import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MAPlots } from '../../../../../core/model/core.model';

@Component({
  selector: 'app-insights-demo-plot-dialog-container',
  styleUrls: ['plot-dialog.component.scss'],
  templateUrl: 'plot-dialog.component.html',
})
export class InsightsDemoPlotDialogComponent {
  maPlots: MAPlots;

  constructor(
    public dialogRef: MatDialogRef<InsightsDemoPlotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MAPlots) {
      // オブジェクトをディープコピーする
      this.maPlots = {
        applySMA: data.applySMA.map(x => Object.assign({}, x)),
        applyEMA: data.applyEMA.map(x => Object.assign({}, x)),
        applyWMA: data.applyWMA.map(x => Object.assign({}, x)),
      };
    }

  checkAll(target: {title: string, checked: boolean}[]): void {
    target.forEach(each => each.checked = true);
    console.log(this.data, this.maPlots);
  }

  clearAll(): void {
    this.maPlots = {
      applySMA: [
        {title: 'SMA(5days)', checked: false},
        {title: 'SMA(25days)', checked: false},
        {title: 'SMA(75days)', checked: false},
      ],
      applyEMA: [
        {title: 'EMA(5days)', checked: false},
        {title: 'EMA(25days)', checked: false},
        {title: 'EMA(75days)', checked: false},
      ],
      applyWMA: [
        {title: 'WMA(5days)', checked: false},
        {title: 'WMA(25days)', checked: false},
        {title: 'WMA(75days)', checked: false},
      ],
    };
  }
}
