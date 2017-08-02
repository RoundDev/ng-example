import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

declare var gapi;
import { DOCUMENT } from '@angular/platform-browser';
function getWindow(): any {
  return window;
}


@Injectable()
export class GoogleService {
  get nativeWindow(): any {
    return getWindow();
  }

  auth2: any;
  user: BehaviorSubject<any>;
  isInit: boolean = false;
  
  constructor( @Inject(DOCUMENT) private document: any) {
    this.user = new BehaviorSubject<any>(null);
  }

  getDoc() {
    return this.document;
  }

  test() {
    console.log(gapi);
  }

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '165791147094-ddjhprnh21cf0747oqmmu5jdl2dv1co4.apps.googleusercontent.com'
        });
        this.isInit = true;
        resolve('done');
      })
    })
  }

  addBtnClickHandler(id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let element = this.document.getElementById(id);
      this.auth2.attachClickHandler(element, (googleUser) => {
        resolve('done');
      })
    })
  }

  getUser() {
    let tmpUser = this.auth2.currentUser.get();
    let profile = tmpUser.getBasicProfile();
    this.user.next(profile);
  }

  //cannot sign out of localHost
  signOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth2.signOut().then((auth2) => {
        this.auth2.disconnect();
        resolve('done');
      });
    })
  }
}
