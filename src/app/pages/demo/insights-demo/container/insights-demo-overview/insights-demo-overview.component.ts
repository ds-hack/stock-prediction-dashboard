import { Component, OnInit } from '@angular/core';

import { InsightsCompanyService } from '../../../../../core/service/core.service';

interface Company {
  stockCode: string;
  companyName: string;
}

@Component({
  selector: 'app-insights-demo-overview-container',
  styleUrls: ['insights-demo-overview.component.scss'],
  templateUrl: 'insights-demo-overview.component.html',
})
export class InsightsDemoOverviewComponent implements OnInit {
  selected: string;
  companies: Company[] = [
    {stockCode: '6028', companyName: '株式会社Python'},
    {stockCode: '3906', companyName: '株式会社Golang'},
    {stockCode: '9433', companyName: '株式会社TypeScript'}
  ];

  constructor(private insightsCompanyService: InsightsCompanyService) { }

  ngOnInit() {
    this.selected = this.companies[0].stockCode;
    this.insightsCompanyService.selectCompany(this.selected);
  }

  onSelectionChanged(): void {
    this.insightsCompanyService.selectCompany(this.selected);
  }
}
