import { Component, OnInit } from "@angular/core";
import * as cvstfjs from "@microsoft/customvision-tfjs";

@Component({
  selector: "app-test-local",
  templateUrl: "./test-local.component.html",
  styleUrls: ["./test-local.component.css"],
})
export class TestLocalComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.launchModel();
  }
  async launchModel() {
    let model = new cvstfjs.ObjectDetectionModel();
    await model.loadModelAsync("http://localhost:4200/assets/model.json");
    console.log(model);
    const image = document.getElementById("image");
    const result = await model.executeAsync(image);
    console.log(result);
  }
}
