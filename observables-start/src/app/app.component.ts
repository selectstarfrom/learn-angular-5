import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user1Activate = false;
  user2Activate = false;

  constructor(private userService: UserService) {

  }

  ngOnInit() {

    this.userService.userActivated.subscribe(
      (data: number) => {
        console.log(data);
        if (data === 1) {
          console.log("Activating: "+data);
          this.user1Activate = true;
        }
        else if (data === 2) {
          console.log("Activating: "+data);
          this.user2Activate = true;
        }
      }
    );

  }



}