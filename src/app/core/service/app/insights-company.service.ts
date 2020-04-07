import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { CompaniesService } from '../../service/api/companies.service';
import { CompanyDetail } from '../../model/core.model';

@Injectable()
export class InsightsCompanyService {
  companySubject = new Subject<CompanyDetail>();
  companyState = this.companySubject.asObservable();

  constructor(private companiesService: CompaniesService) {}

  selectCompany(stockCode: string): void {
    this.companiesService.getCompany(stockCode)
      .subscribe((company) => {
        this.companySubject.next(company);
    });
  }
}
