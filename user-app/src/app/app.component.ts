import { Component, ViewChild } from '@angular/core';


interface User {
  username: string,
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted: boolean;

  @ViewChild('f') ngForm;

  user: User;
  onSubmit() {
    console.log(this.ngForm);
    this.user = {
      username: this.ngForm.value.username,
      email: this.ngForm.value.email
    }
    this.ngForm.reset();
    this.submitted = true;
  }
}
