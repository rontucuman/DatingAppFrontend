import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating app';
  users: any;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  setCurrentUser() {
    let savedItem = localStorage.getItem('user');

    if(savedItem) {
      const user: User = JSON.parse(savedItem);
      this.accountService.setCurrentUser(user);
    }
    

  }
}
