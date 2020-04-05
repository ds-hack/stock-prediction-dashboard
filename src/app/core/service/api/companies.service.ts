import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';
import { CompanyWrapper } from '../../model/core.model';

@Injectable()
export class CompaniesService {
  baseUrl = '/stock-prediction-dashboard/api/v1';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError();
  }

  listCompanies(): Observable<CompanyWrapper> {
    return this.http.get<CompanyWrapper>(this.baseUrl + '/companies')
      .pipe(
        catchError(this.handleError<CompanyWrapper>())
      );
  }
}
