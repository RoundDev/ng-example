import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleService } from '../../shared/google.service';
@Component({
  selector: 'app-sign-in-button',
  templateUrl: './sign-in-button.component.html',
  styleUrls: ['./sign-in-button.component.css']
})
export class SignInButtonComponent implements OnInit {

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addGoogleButtonHandler();
  }

  addGoogleButtonHandler() {
    this.googleService.addBtnClickHandler('googleBtn').then((str) => {
      this.googleService.getUser()
    });
  }
}
