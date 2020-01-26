import { Component, Input } from "@angular/core";

@Component({
  selector: "bb-p",
  templateUrl: "./bb-p.component.html",
  styleUrls: ["./bb-p.component.scss"]
})
export class BBParagraphComponent {
  // @Input("headline")
  // headline: string = "A default headline.";
  @Input() headline: string;
  @Input() text='A default text.';
}
