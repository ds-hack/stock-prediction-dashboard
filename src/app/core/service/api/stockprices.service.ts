import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { RawStockPriceWrapper, StockPriceMAWrapper } from '../../model/core.model';

@Injectable()
export class StockPricesService {
  baseUrl = '/stock-prediction-dashboard/api/v1';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError();
  }

  getRawStockPrice(stockCode: string, startDate?: string, endDate?: string): Observable<RawStockPriceWrapper> {
    let queryParams = new HttpParams();
    queryParams = startDate ? queryParams.set('startDate', startDate) : queryParams;
    queryParams = endDate ? queryParams.set('endDate', endDate) : queryParams;
    const options = { params: queryParams };

    return this.http.get<RawStockPriceWrapper>(this.baseUrl + `/stockprices/rawdata/${stockCode}`, options)
      .pipe(
        catchError(this.handleError<RawStockPriceWrapper>())
      );
  }

  getStockPriceMA(stockCode: string, maTypes: string, startDate?: string, endDate?: string): Observable<StockPriceMAWrapper> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('maTypes', maTypes);
    queryParams = startDate ? queryParams.set('startDate', startDate) : queryParams;
    queryParams = endDate ? queryParams.set('endDate', endDate) : queryParams;
    const options = { params: queryParams };

    return this.http.get<StockPriceMAWrapper>(this.baseUrl + `/stockprices/ma/${stockCode}`, options)
      .pipe(
        catchError(this.handleError<StockPriceMAWrapper>())
      );
  }
}
