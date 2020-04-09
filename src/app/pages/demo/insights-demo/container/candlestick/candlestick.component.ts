import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { Subscription } from 'rxjs';
import { StockPricesService, InsightsCompanyService } from '../../../../../core/service/core.service';
import { RawStockPriceWrapper, CompanyDetail } from '../../../../../core/model/core.model';

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
  subscription: Subscription;
  stockCode: string;
  startDate: Date;
  endDate: Date;
  minStartDate: Date;
  maxStartDate: Date;
  minEndDate: Date;
  maxEndDate: Date;
  date: string[];
  open: number[];
  high: number[];
  low: number[];
  close: number[];

  constructor(
    private stockPriceService: StockPricesService,
    private insightsCompanyService: InsightsCompanyService,
    private datePipe: DatePipe) { }

  ngOnInit() {
    this.subscription = this.insightsCompanyService.companyState
      .subscribe((company: CompanyDetail) => {
        this.stockCode = company.stockCode;
        this.getStockPrices(
          company.stockCode,
          this.datePipe.transform(this.startDate, 'yyyy-MM-dd'),
          this.datePipe.transform(this.endDate, 'yyyy-MM-dd'),
        );
    });

    this.initDatePicker();
  }

  getStockPrices(stockCode: string, startDate?: string, endDate?: string): void {
    this.stockPriceService.getRawStockPrice(stockCode, startDate, endDate)
      .subscribe(stockPrices => {
        this.stockPrices = stockPrices;
        this.buildGraphData(stockPrices);
      });
  }

  buildGraphData(stockPrices: RawStockPriceWrapper): void {
    this.date = stockPrices.data.map(data => data.date);
    this.open = stockPrices.data.map(data => data.open);
    this.high = stockPrices.data.map(data => data.high);
    this.low = stockPrices.data.map(data => data.low);
    this.close = stockPrices.data.map(data => data.close);
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
    console.log('Hi');
  }
}
