import { Component } from "@angular/core";
import "jarallax";
declare var jarallax: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "ng-uikit-pro-standard";

  ngAfterViewInit() {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2
    });
  }
}
