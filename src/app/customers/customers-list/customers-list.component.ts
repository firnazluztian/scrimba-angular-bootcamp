import { Component, OnInit, Input } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
})
export class CustomersListComponent implements OnInit {

  private _customers: ICustomer[] = []
  private customerOrderTotal: number = 0

  @Input() get customers(): ICustomer[] {
      return this._customers;
  }

  set customers(value: ICustomer[]) {
    if (value) {
        this._customers = value
        this.calculateOrder()
    }
  }

  calculateOrder = () => {
    this._customers.forEach((item: ICustomer) => {
      this.customerOrderTotal += item.orderTotal
    })
  }

  constructor() { }

  ngOnInit(): void { }

}
