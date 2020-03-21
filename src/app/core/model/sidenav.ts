export class Sidenav {
  showSidenav: boolean;
  menu: string;
  pages: {[s: string]: {name: string, link: string}[]};

  constructor() {
      this.showSidenav = false;
      this.menu = 'default';
      this.pages = {
        default: [
          {
            name: 'defaultMenu1',
            link: '/',
          },
          {
            name: 'defaultMenu2',
            link: '/',
          },
          {
            name: 'defaultMenu3',
            link: '/',
          },
          {
            name: 'defaultMenu4',
            link: '/',
          },
          {
            name: 'defaultMenu5',
            link: '/',
          },
        ],
        insights: [
          {
            name: 'insightsMenu1',
            link: '/',
          },
          {
            name: 'insightsMenu2',
            link: '/',
          },
          {
            name: 'insightsMenu3',
            link: '/',
          },
          {
            name: 'insightsMenu4',
            link: '/',
          },
          {
            name: 'insightsMenu5',
            link: '/',
          },
        ],
        predictions: [
          {
            name: 'predictionsMenu1',
            link: '/',
          },
          {
            name: 'predictionsMenu2',
            link: '/',
          },
          {
            name: 'predictionsMenu3',
            link: '/',
          },
          {
            name: 'predictionsMenu4',
            link: '/',
          },
          {
            name: 'predictionsMenu5',
            link: '/',
          },
        ],
        settings: [
          {
            name: 'settingsMenu1',
            link: '/',
          },
          {
            name: 'settingsMenu2',
            link: '/',
          },
          {
            name: 'settingsMenu3',
            link: '/',
          },
          {
            name: 'settingsMenu4',
            link: '/',
          },
          {
            name: 'settingsMenu5',
            link: '/',
          },
        ],
      };
  }
}
