import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Page } from 'src/app/services/Models/page.model';
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

  constructor() { }

  ngOnInit(): void {
  }

  nextPage() {
    if (this.maxPages-1 > this.actualPage) {
      this.actualPage += 1;
      this.pages.next(new Page(this.actualPage, this.pageSize));
    }
  }

  lastPage() {
    if (this.actualPage > 0) {
      this.actualPage -= 1;
      this.pages.next(new Page(this.actualPage, this.pageSize));
    }
  }

  getPage() { return this.actualPage; }

  getSize() { return this.pageSize; }
}
