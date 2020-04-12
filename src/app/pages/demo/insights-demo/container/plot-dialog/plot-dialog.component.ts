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
  }

  clearAll(): void {
    this.maPlots = {
      applySMA: [
        {key: 'sma5', title: 'SMA(5days)', checked: false},
        {key: 'sma25', title: 'SMA(25days)', checked: false},
        {key: 'sma75', title: 'SMA(75days)', checked: false},
      ],
      applyEMA: [
        {key: 'ema5', title: 'EMA(5days)', checked: false},
        {key: 'ema25', title: 'EMA(25days)', checked: false},
        {key: 'ema75', title: 'EMA(75days)', checked: false},
      ],
      applyWMA: [
        {key: 'wma5', title: 'WMA(5days)', checked: false},
        {key: 'wma25', title: 'WMA(25days)', checked: false},
        {key: 'wma75', title: 'WMA(75days)', checked: false},
      ],
    };
  }
}
