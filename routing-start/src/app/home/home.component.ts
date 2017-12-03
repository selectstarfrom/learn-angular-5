import { Component, OnInit, Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    console.log("User Login")
    this.authService.login();
    console.log("User LogedIn Successfully")
  }

  logout() {
    this.authService.logout();
  }
}
