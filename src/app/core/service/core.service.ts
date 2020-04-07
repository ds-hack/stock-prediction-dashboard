// restapi services
export * from './api/companies.service';
export * from './api/stockprices.service';
export * from './api/http-error-handler.service';
import { CompaniesService } from './api/companies.service';
import { StockPricesService } from './api/stockprices.service';
import { HttpErrorHandler } from './api/http-error-handler.service';

export const API_SERVICES = [
    CompaniesService,
    StockPricesService,
    HttpErrorHandler,
];

// inapp services
export * from './app/sidenav.service';
export * from './app/insights-company.service';
import { SidenavService } from './app/sidenav.service';
import { InsightsCompanyService } from './app/insights-company.service';

export const APP_SERVICES = [
    SidenavService,
    InsightsCompanyService,
];
