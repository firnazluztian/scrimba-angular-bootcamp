import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  private _title: string

  @Input() get navbarTitle(): string {
    return this._title
  }

  set navbarTitle(value: string) {
    this._title = value
  }

  constructor() { }

  ngOnInit(): void {
  }

}
