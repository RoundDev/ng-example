import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../shared/google.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  googleUser: any;

  //use null to start, after google initializes and user is checked
  //it will set to true/false and render buttons
  showSignIn: boolean = null;

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
    if (!this.googleService.isInit) {
      this.initGoogle();
    } else {
      this.initSubscribe();
    }
  }

  initGoogle() {
    //may want to init in app.component on app startup
    this.googleService.init().then(
      result => {
        this.initSubscribe();
        this.getUser();
      }
    );
  }

  initSubscribe() {
    //subscribe to the user
    this.googleService.user.subscribe(val => {
      if (val == null || val == undefined) {
        //show sign in component
        this.showSignIn = true;
      } else {
        //show sign out component
        this.showSignIn = false;
      }
      this.googleUser = val;
    })
  }

  getUser() {
    this.googleService.getUser();
  }

  signOut() {
    this.googleService.signOut().then(result => {
      //REMOVE THIS LINE WHEN NOT ON LOCAL HOST
      //Faking the sign out
      this.googleService.user.next(null);
      //USE THIS LINE
      //this.getUser();
    })
  }
}
