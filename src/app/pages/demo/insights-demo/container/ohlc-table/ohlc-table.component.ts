import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Subscription } from 'rxjs';
import { StockPricesService, InsightsCompanyService } from '../../../../../core/service/core.service';
import { RawStockPriceWrapper, CompanyDetail, RawStockPrice } from '../../../../../core/model/core.model';

@Component({
  selector: 'app-insights-demo-ohlc-table-container',
  styleUrls: ['ohlc-table.component.scss'],
  templateUrl: 'ohlc-table.component.html',
  providers: [
    DatePipe,
  ]
})
export class InsightsDemoOhlcTableComponent implements OnInit {
  stockPrices: RawStockPriceWrapper;
  subscription: Subscription;
  stockCode: string;
  startDate: Date;
  endDate: Date;
  tableColumns = ['date', 'open', 'high', 'low', 'close', 'volume'];
  headerTitles = ['date', 'open', 'high', 'low', 'close', 'volume'];
  dataSource: RawStockPrice[];

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
  }

  getStockPrices(stockCode: string, startDate?: string, endDate?: string): void {
    this.stockPriceService.getRawStockPrice(stockCode, startDate, endDate)
      .subscribe(stockPrices => {
        this.stockPrices = stockPrices;
        this.buildTableData(stockPrices);
      });
  }

  buildTableData(stockPrices: RawStockPriceWrapper): void {
    // 日付の表示形式をyyyy-MM-ddにした上で、日付の降順で表示する
    this.dataSource = stockPrices.data.map(each => {
      each.date = this.datePipe.transform(each.date, 'yyyy-MM-dd');
      return each;
    }).sort((a, b) => a.date < b.date ? 1 : -1);
  }
}
