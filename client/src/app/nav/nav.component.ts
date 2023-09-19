import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, observable, of } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public accountService: AccountService) {

  }

  ngOnInit(): void {
  }



  login() {
    this.accountService.logIn(this.model).subscribe({
      next: response => {
        debugger;
        console.log("response" + response);
      },
      error: err => console.log(err)

    })
  }

  logout() {
    this.accountService.logout();
  }
}
