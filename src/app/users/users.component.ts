import { Component, OnInit } from '@angular/core'
import { IUser } from '../shared/interfaces'

import { DataService } from '../core/data.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})

export class UsersComponent implements OnInit {
  constructor(private dataService: DataService) { }

  private usersData: IUser[] = []

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((users: IUser[]) => this.usersData = users);
  //   this.usersData = [
  //     {
  //       _id: "5e6375b057bebb6cd9ce4cbb",
  //       username: "firnaz",
  //       email: "firnazluztian@gmail.com",
  //       password: "pass"
  //     },
  //     {
  //       _id: "5e6375b057bebb6cd9ce4cbb",
  //       username: "kucing",
  //       email: "kucinggarong@gmail.com",
  //       password: "pass"
  //     },
  //   ]
  }

}