import { Component, Input, OnChanges} from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-candle-stick-chart',
  styleUrls: ['candle-stick-chart.component.scss'],
  templateUrl: 'candle-stick-chart.component.html',
  providers: [
    DatePipe,
  ],
})
export class CandleStickChartComponent implements OnChanges {
  @Input() x: string[];
  @Input() open: number[];
  @Input() high: number[];
  @Input() low: number[];
  @Input() close: number[];
  // デフォルトのOptionはコンポーネント内で直接指定し、変更したいオプションは本コンポーネントを使用する側から受け渡す
  @Input() dataOptions?: object; // plotly.js Figure Options https://plotly.com/javascript/reference/
  @Input() layoutOptions?: object; // plotly.js Layout Options https://plotly.com/javascript/reference/#layout
  @Input() configOptions?: object; // plotly.js Config Options https://plotly.com/javascript/configuration-options/#
  graph = {data: [], layout: {}, config: {displayModeBar: false}};

  constructor(private datePipe: DatePipe) { }

  ngOnChanges() {
    if (this.x) {
      this.buildGraphData();
      this.buildGraphLayout();
      this.buildGraphConfig();
    }
  }

  buildGraphData(): void {
    const data = {
      x: this.x,
      open: this.open,
      high: this.high,
      low: this.low,
      close: this.close,
      decreasing: { line: {color: '#7F7F7F'} },
      increasing: { line: {color: '#17BECF'} },
      line: { color: 'rgba(31,119,180,1)' },
      type: 'candlestick',
      xaxis: 'x',
      yaxis: 'y',
    };
    if (this.dataOptions) {
      Object.keys(this.dataOptions).forEach(key => {
        data[key] = this.dataOptions[key];
      });
    }
    this.graph.data.pop();
    this.graph.data.push(data);
  }

  buildGraphLayout(): void {
    const startDate = new Date(this.x[0]);
    const endDate = new Date(this.x[this.x.length - 1]);
    // 初日の1日前、最終日の1日後の12:00をデフォルトの描画期間とする
    startDate.setDate(startDate.getDate() - 1);
    endDate.setDate(endDate.getDate() + 1);
    startDate.setHours(startDate.getHours() + 12);
    endDate.setHours(endDate.getHours() + 12);

    const minValue = Math.min(...this.low);
    const maxValue = Math.max(...this.high);
    this.graph.layout = {
      dragmode: 'zoom',
      plot_bgcolor: '#E0F2F1',
      paper_bgcolor: '#E0F2F1',
      margin: {
        r: 10,
        t: 25,
        b: 40,
        l: 60,
      },
      showlegend: false,
      xaxis: {
        autorange: true,
        domain: [0, 1],
        range: [
          this.datePipe.transform(startDate, 'yyyy-MM-dd HH:mm'),
          this.datePipe.transform(endDate, 'yyyy-MM-dd HH:mm')],
        rangeslider: {range: [
          this.datePipe.transform(startDate, 'yyyy-MM-dd HH:mm'),
          this.datePipe.transform(endDate, 'yyyy-MM-dd HH:mm')]},
        title: 'Date',
        type: 'date',
      },
      yaxis: {
        autorange: true,
        domain: [0, 1],
        range: [
          Math.round(minValue / 10 - 1) * 10,
          Math.round(maxValue / 10 + 1) * 10],
        title: 'JPY',
        type: 'linear',
      },
    };

    if (this.layoutOptions) {
      Object.keys(this.layoutOptions).forEach(key => {
        this.graph.layout[key] = this.layoutOptions[key];
      });
    }
  }

  buildGraphConfig(): void {
    this.graph.config = {
      displayModeBar: false,
    };

    if (this.configOptions) {
      Object.keys(this.configOptions).forEach(key => {
        this.graph.config[key] = this.configOptions[key];
      });
    }
  }
}
