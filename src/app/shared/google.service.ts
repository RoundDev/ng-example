import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowRefService } from './window-ref.service';
declare var gapi;


@Injectable()
export class GoogleService {

  auth2: any;
  user: BehaviorSubject<any>;
  isInit: boolean = false;
  document: any;
  constructor(private windowRefService: WindowRefService) {
    this.user = new BehaviorSubject<any>(null);
    this.document = this.windowRefService.getDoc();
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
      console.log('added handler');
      this.auth2.attachClickHandler(element, null, (googleUser) => {
        console.log('signed in');
        //this.getUser();
        resolve('done');
      })
    })
  }

  getUser() {
    let tmpUser = this.auth2.currentUser.get();
    let profile = tmpUser.getBasicProfile();
    console.log('set user');
    console.log(profile);
    this.user.next(profile);
  }

  //cannot sign out of localHost
  signOut(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.auth2.signOut().then((auth2) => {
        this.auth2.disconnect();
        console.log('signed out');
        resolve('done');
      });
    })
  }
}
