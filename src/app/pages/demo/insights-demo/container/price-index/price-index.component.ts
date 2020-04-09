import { Component } from '@angular/core';

import { InsightsCompanyService } from '../../../../../core/service/core.service';

@Component({
  selector: 'app-insights-demo-price-index-container',
  styleUrls: ['price-index.component.scss'],
  templateUrl: 'price-index.component.html',
})
export class InsightsDemoPriceIndexComponent {
  indices = [
    { name: 'index1', value: 1000000 },
    // { name: 'index2', value: 10.5 },
    // { name: 'index3', value: 5600 },
    // { name: 'index4', value: 8940000 },
    // { name: 'index5', value: 0.0003 },
  ];
  test = [1, 2, 3, 4];
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  cardColor = '#232837';

  constructor(private insightsCompanyService: InsightsCompanyService) { }
}
