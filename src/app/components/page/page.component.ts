import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Page } from 'src/app/services/Models/page.model';
import { SessionsService } from 'src/app/services/sessions.service';
import { __classPrivateFieldGet } from 'tslib';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Input()
  public maxPages = 0;
  public actualPage = 0;
  private pageSize = 5;


  @Output() pages = new EventEmitter<Page>();

  constructor(private readonly sessionService: SessionsService) { this.getPage() }

  ngOnInit(): void {
  }

  firstPage() {
    this.actualPage = 0;
    this.setPage();
  }

  nextPage() {
    if (this.maxPages - 1 > this.actualPage) {
      this.actualPage += 1;
      this.setPage();
    }
  }

  previousPage() {
    if (this.actualPage > 0) {
      this.actualPage -= 1;
      this.setPage();
    }
  }

  lastPage() {
    this.actualPage = this.maxPages - 1;
    this.setPage();
  }

  private setPage() {
    this.pages.next(new Page(this.actualPage, this.pageSize));
    this.sessionService.savePage(new Page(this.getActualPage(), this.getSize()));
  }

  private getPage() {
    let page = this.sessionService.loadPage();
    this.actualPage = page.page;
    if (page.page > 0)
      this.pageSize = page.size;
  }

  public getActualPage() { return this.actualPage; }

  public setActualPage(page: number) { this.actualPage = page; this.setPage(); }

  public getSize() { return this.pageSize; }
}
