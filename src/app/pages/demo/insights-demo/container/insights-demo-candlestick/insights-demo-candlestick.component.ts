import { Component, OnInit } from '@angular/core';
import { StockPricesService } from '../../../../../core/service/core.service';
import { RawStockPriceWrapper } from '../../../../../core/model/core.model';

@Component({
  selector: 'app-insights-demo-candlestick-container',
  styleUrls: ['insights-demo-candlestick.component.scss'],
  templateUrl: 'insights-demo-candlestick.component.html',
})
export class InsightsDemoCandleStickComponent implements OnInit {
  stockPrices: RawStockPriceWrapper;

  constructor(private stockPriceService: StockPricesService) { }

  ngOnInit() {
    this.getStockPrices('6028');
  }

  getStockPrices(stockCode: string, startDate?: string, endDate?: string) {
    this.stockPriceService.getRawStockPrice(
      stockCode, startDate, endDate,
    ).subscribe((stockPrices) => this.stockPrices = stockPrices);
  }
}
