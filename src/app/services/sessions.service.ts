import { Injectable } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { Page } from './Models/page.model';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor() { }

  public savePage(page: Page) {
    sessionStorage.setItem('actualPage', String(page.page));
    sessionStorage.setItem('sizePage', String(page.size));
  }

  public loadPage(): Page {
    let page = new Page(
      Number(sessionStorage.getItem('actualPage')),
      Number(sessionStorage.getItem('sizePage'))
      );

    return page;
  }
}
