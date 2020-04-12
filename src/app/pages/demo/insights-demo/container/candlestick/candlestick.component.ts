import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { StockPricesService, InsightsCompanyService } from '../../../../../core/service/core.service';
import { RawStockPriceWrapper, StockPriceMAWrapper, CompanyDetail, MAPlots } from '../../../../../core/model/core.model';
import { InsightsDemoPlotDialogComponent } from '../plot-dialog/plot-dialog.component';

@Component({
  selector: 'app-insights-demo-candlestick-container',
  styleUrls: ['candlestick.component.scss'],
  templateUrl: 'candlestick.component.html',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    DatePipe,
  ]
})
export class InsightsDemoCandleStickComponent implements OnInit {
  stockPrices: RawStockPriceWrapper;
  stockPricesMA: StockPriceMAWrapper;
  subscription: Subscription;
  stockCode: string;
  startDate: Date;
  endDate: Date;
  maTypes: string;
  minStartDate: Date;
  maxStartDate: Date;
  minEndDate: Date;
  maxEndDate: Date;
  date: string[];
  open: number[];
  high: number[];
  low: number[];
  close: number[];
  maData: object[];
  maPlots: MAPlots;

  constructor(
    private stockPriceService: StockPricesService,
    private insightsCompanyService: InsightsCompanyService,
    private datePipe: DatePipe,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.subscription = this.insightsCompanyService.companyState
      .subscribe((company: CompanyDetail) => {
        this.stockCode = company.stockCode;
        this.getStockPrices(
          company.stockCode,
          this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
          this.datePipe.transform(this.endDate, 'yyyy-MM-dd'),
        );
        if (this.maTypes) {
          this.getStockPricesMA(
            company.stockCode,
            this.maTypes,
            this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
            this.datePipe.transform(this.endDate, 'yyyy-MM-dd'),
          );
        }
    });

    this.initDatePicker();
    this.initMAPlots();
  }

  // startDate <= endDateをdatePickerのパラメータにより強制する
  initDatePicker(): void {
    this.startDate = new Date(2020, 0, 1);
    this.endDate = new Date();
    this.minStartDate = new Date(2015, 0, 1);
    this.maxStartDate = this.endDate;
    this.minEndDate = this.startDate;
    this.maxEndDate = new Date();
  }

  initMAPlots(): void {
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

  getStockPrices(stockCode: string, startDate?: string, endDate?: string): void {
    this.stockPriceService.getRawStockPrice(stockCode, startDate, endDate)
      .subscribe(stockPrices => {
        this.stockPrices = stockPrices;
        this.buildGraphData(stockPrices);
      });
  }

  getStockPricesMA(stockCode: string, maTypes?: string, startDate?: string, endDate?: string): void {
    this.stockPriceService.getStockPriceMA(stockCode, maTypes, startDate, endDate)
      .subscribe(stockPricesMA => {
        this.stockPricesMA = stockPricesMA;
        this.buildMAGraphData(stockPricesMA);
      });
  }

  buildGraphData(stockPrices: RawStockPriceWrapper): void {
    this.date = stockPrices.data.map(data => data.date);
    this.open = stockPrices.data.map(data => data.open);
    this.high = stockPrices.data.map(data => data.high);
    this.low = stockPrices.data.map(data => data.low);
    this.close = stockPrices.data.map(data => data.close);
  }

  buildMAGraphData(stockPricesMA: StockPriceMAWrapper): void {
    this.maData = [];
    const targetMA = this.maTypes.split(',');
    targetMA.forEach(type => {
      const date = stockPricesMA.data.filter(data => data.maType === type).map(data => data.date);
      const values = stockPricesMA.data.filter(data => data.maType === type).map(data => data.maValue);
      this.maData.push({
        x: date,
        y: values,
        name: type,
        type: 'scatter',
      });
    });
  }

  onStartDateChange(): void {
    this.minEndDate = this.startDate;
  }

  onEndDateChange(): void {
    this.maxStartDate = this.endDate;
  }

  onDateApplied(): void {
    this.getStockPrices(
      this.stockCode,
      this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
      this.datePipe.transform(this.endDate, 'yyyy-MM-dd'),
    );
  }

  openAddPlotDialog(): void {
    const dialogRef = this.dialog.open(InsightsDemoPlotDialogComponent, {
      width: '600px',
      data: this.maPlots,
    });
    dialogRef.afterClosed().subscribe((result: MAPlots) => {
      if (result) {
        let maArray: string[] = [];
        Object.values(result).forEach((item: {key: string, title: string, checked: boolean}[]) => {
          maArray = maArray.concat(item.filter(x => x.checked).map(x => x.key));
        });
        if (maArray.length > 0) {
          this.maTypes = maArray.join(',');
          this.getStockPricesMA(
            this.stockCode,
            this.maTypes,
            this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
            this.datePipe.transform(this.endDate, 'yyyy-MM-dd'),
          );
        } else {
          // チェックがclearされた場合はmaTypesとmaDataを初期状態に戻す
          this.maTypes = undefined;
          this.maData = undefined;
        }
        this.maPlots = result;
      }
    });
  }
}
