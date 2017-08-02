import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleService } from '../google.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild('googleBtn') googleBtn: ElementRef;

  googleUser: any;

  showSignin: boolean = true;

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    if (!this.googleService.isInit) {
      this.initGoogle();
    }
    this.googleService.user.subscribe(val => {
      this.googleUser = val;
      console.log(this.googleUser);
    })
  }

  ngAfterViewInit() {
  }

  initGoogle() {
    this.googleService.init().then(
      result => {
        this.getUser();
        this.addGoogleButtonHandler()
      }
    );
  }

  addGoogleButtonHandler() {
    this.googleService.addBtnClickHandler('googleBtn').then((str) => {
      this.getUser()
    });
  }

  getUser() {
    this.googleService.getUser();
  }

  signOut() {
    this.googleService.signOut().then(result => {
      this.getUser();
    })
  }
}
