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
            name: 'sampleMenu1',
            link: '/',
          },
          {
            name: 'sampleMenu2',
            link: '/',
          },
          {
            name: 'sampleMenu3',
            link: '/',
          },
          {
            name: 'sampleMenu4',
            link: '/',
          },
          {
            name: 'sampleMenu5',
            link: '/',
          },
        ],
      };
  }
}
