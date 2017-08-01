import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleService } from '../google.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private googleService: GoogleService) { }

  ngOnInit() {
  }

  // ngAfterViewInit(){
  //   this.googleService.init();
  // }

}
