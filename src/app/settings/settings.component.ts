import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";


@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  public endpoint: string;
  public modelEndpoint: string;
  public modelLabel: string;
  public URLApi : string;
  public confidence : number = 0;
  public Filter : string;
  public MetaData : string;
  public key: string;
  public isStoringImage: boolean;
  public isLocal: boolean;
  constructor(private router: Router) {
    if (localStorage.getItem("settings")) {
      const settings = JSON.parse(localStorage.getItem("settings"));
      this.endpoint = settings.customVisionEndpoint;
      this.key = settings.customVisionKey;
      this.isStoringImage = settings.isStoringImage;
      this.isLocal = settings.isLocal;
      this.modelEndpoint = settings.modelEndpoint;
      this.modelLabel = settings.modelLabel;
      this.URLApi = settings.URLApi;
      this.Filter = settings.Filter;
      this.MetaData = settings.MetaData;
      this.confidence = settings.confidence
    }
  }



  

  ngOnInit() {}
  
  updateSetting(event) {
    this.confidence = event.value;
  }
  setEndpointsAndKey() {
    const settings = {
      customVisionEndpoint: this.endpoint,
      customVisionKey: this.key,
      isStoringImage: this.isStoringImage,
      isLocal: this.isLocal,
      modelEndpoint: this.modelEndpoint,
      modelLabel: this.modelLabel,
      URLApi:this.URLApi,
      MetaData:this.MetaData,
      Filter:this.Filter,
      confidence:this.confidence
    };
    localStorage.setItem("settings", JSON.stringify(settings));
    this.router.navigate(["/scanner"]);
    console.log(this.confidence)
  }
  
}
