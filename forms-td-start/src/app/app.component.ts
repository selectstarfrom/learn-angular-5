import { Component, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultQuestion:string = "pet";

  @ViewChild('f') ngForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(){

    console.log("Submitted");
    console.log("FORM:");
    console.log(this.ngForm);

  }
}
