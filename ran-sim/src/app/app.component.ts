// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'sim-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'ran-sim';
// }
import {Component} from "@angular/core";

@Component({
  selector: 'sim-root',
  template: `<view-map></view-map>`
})
export class AppComponent {
  pageTitle: string = "Radio Access Network Simulator";
}
