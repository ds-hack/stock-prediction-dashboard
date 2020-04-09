import { Component } from '@angular/core';

import { InsightsCompanyService } from '../../../../../core/service/core.service';

@Component({
  selector: 'app-insights-demo-price-index-container',
  styleUrls: ['price-index.component.scss'],
  templateUrl: 'price-index.component.html',
})
export class InsightsDemoPriceIndexComponent {
  constructor(private insightsCompanyService: InsightsCompanyService) { }
}
