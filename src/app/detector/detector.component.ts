import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
// tslint:disable-next-line:max-line-length
import { MatDialog, MatBottomSheet } from "@angular/material";
import {
  CustomVisionPredictionService,
  ImagePrediction,
} from "@oneroomic/facecognitivelibrary";
import { DomSanitizer } from "@angular/platform-browser";
import { Objects } from "../utilities/object";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import * as cvstfjs from "@microsoft/customvision-tfjs";
// import { Console } from "console";

@Component({
  selector: "app-detector",
  templateUrl: "./detector.component.html",
  styleUrls: ["./detector.component.css"],
})
export class DetectorComponent implements OnInit, OnDestroy {
  /* input stream devices */
  /* selector devices */
  public selectors = [];
  // containers
  @ViewChild("overlay", { static: true })
  public overlay;
  // canvas 2D context
  private ctx;
  @ViewChild("webcam", { static: true })
  public video;

  // stream video
  private stream;

  // loading models and stream not available
  displayStream = "none";
  isLoading = true;

  private detectId;

  // alert
  alertContainer = false;
  alertMessage = "";

  // state game
  stateContainer = false;
  stateMessage = "";

  // refresh rate
  refreshRate: number;

  // camid
  videoSource;

  // detection overlay objects detected
  objectsDictionary: Objects[] = [];

  // tslint:disable-next-line:max-line-length
  private customVisionEndpoint = "InsertYourCustomVisionEndpoint";
  private customVisionKey = "InsertYourCustomVisionKey";
  private modelEndpoint = "";
  private URLApi= "";
  private confidence = 0;
  private Filter= "";
  private Metadata="";
  private modelLabel = "";
  private isStoringImage = "false";
  private isLocal = false;
  private model;
  private file;
  private labl = [];
  private loadedModel = false;
 
  constructor(
    public dialog: MatDialog,
    private predictionService: CustomVisionPredictionService,
    private http: HttpClient
  ) {
    this.stream = null;
    this.opencam();
  }
  private async loadModel() {
    this.model = new cvstfjs.ObjectDetectionModel();
    await this.model.loadModelAsync(this.modelEndpoint);
    this.http
      .get(this.modelLabel, { responseType: "text" })
      .subscribe((result) => {
        this.file = result;
        for (const line of this.file.split(/[\r\n]+/)) {
          this.labl.push(line);
        }
      });
    this.loadedModel = true;
  }
  ngOnInit() {
    if (localStorage.getItem("settings")) {
      const settings = JSON.parse(localStorage.getItem("settings"));
      this.customVisionEndpoint = settings.customVisionEndpoint;
      this.customVisionKey = settings.customVisionKey;
      this.isStoringImage = settings.isStoringImage;
      this.isLocal = settings.isLocal;
      this.modelEndpoint = settings.modelEndpoint;
      this.modelLabel = settings.modelLabel;
      this.URLApi = settings.URLApi;
      this.Filter = settings.Filter
      this.Metadata = settings.MetaData;
      this.confidence = settings.confidence
    }
    this.loadModel();
    this.detectId = null;
    if (localStorage.getItem("videoSource")) {
      this.videoSource = localStorage.getItem("videoSource");
    }
    // init lock
    this.alertContainer = false;
    this.stateContainer = false;
    // save canvas context
    this.ctx = this.overlay.nativeElement.getContext("2d");
    // refreshRate
    this.refreshRate = 3000;
    if (localStorage.getItem("refreshRate")) {
      this.refreshRate = Number(localStorage.getItem("refreshRate"));
      if (this.refreshRate < 250) {
        this.refreshRate = 3000;
      }
    }

    // set objects retrieved from challenge
  }

  initStreamDetection() {
    if (this.stream === null) {
      this.startStream();
      if (this.detectId === null) {
        // detection interval: default 3000
        this.detectId = setInterval(() => {
          // state still registering
          if (!this.stateContainer) {
            if (this.stream !== null) {
              this.detectObjects();
            }
          }
        }, 1000);
      }
    }
  }

  detectObjects() {
    this.clearOverlay();

    this.imageCapture(this.video.nativeElement);

    if (this.displayStream === "none") {
      this.displayStream = "block";
      this.isLoading = false;
    }
  }

  // clear canvas overlay
  private clearOverlay() {
    this.ctx.clearRect(
      0,
      0,
      this.overlay.nativeElement.width,
      this.overlay.nativeElement.height
    );
  }

  private drawOverlay(x, y, w, h, title = null) {
    this.ctx.beginPath();
    this.ctx.rect(x, y, w, h);
    if (title !== null) {
      this.ctx.font = "20px Arial";
      this.ctx.fillText(title, x + w * 0.05, y + h / 1.05);
    }
    this.ctx.stroke();
    this.ctx.closePath();
  }

  /* initialize capture webcam */
  private opencam() {
    navigator.mediaDevices
      .enumerateDevices()
      .then((d) => {
        this.selectors = this.getCaptureDevices(d);
        this.initStreamDetection();
      })
      .catch(this.handleError);
  }

  /* Start or restart the stream using a specific videosource and inject it in a container */
  public startStream(videoSource = null) {
    if (navigator.mediaDevices) {
      if (this.selectors.map((s) => s.id).indexOf(this.videoSource) === -1) {
        // check if prefered cam is available in the list
        this.videoSource = null;
      }
      // select specific camera on mobile
      this.videoSource = videoSource
        ? videoSource
        : this.videoSource
        ? this.videoSource
        : this.selectors[0].id;
      localStorage.setItem("videoSource", this.videoSource);
      // access the web cam
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            // selfie mode
            // facingMode: {exact: 'user' },
            deviceId: this.videoSource
              ? { exact: this.videoSource }
              : undefined,
          },
        })
        // permission granted:
        .then((stream) => {
          this.stream = stream;
          this.alertContainer = false;
          // on getUserMedia
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.play();
          // set canvas size = video size when known
          this.video.nativeElement.addEventListener("loadedmetadata", () => {
            // overlay
            this.overlay.nativeElement.width =
              this.video.nativeElement.videoWidth;
            this.overlay.nativeElement.height =
              this.video.nativeElement.videoHeight;
          });
        })
        // permission denied:
        .catch((error) => {
          console.log("Camera init failed : " + error.name);
          this.alertContainer = true;
          this.alertMessage =
            "Could not access the camera. Error: " + error.name;
        });
    }
    return this.video;
  }

  /* Detect possible capture devices */
  private getCaptureDevices(deviceInfos) {
    // Handles being called several times to update labels. Preserve values.
    const videouputs = [];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < deviceInfos.length; i++) {
      if (deviceInfos[i].kind === "videoinput") {
        videouputs.push({
          id: deviceInfos[i].deviceId,
          label: deviceInfos[i].label,
        });
      }
    }

    return videouputs;
  }

  imageCapture(video) {
    const canvas = document.createElement("canvas");
    canvas.width = this.overlay.nativeElement.width;
    canvas.height = this.overlay.nativeElement.height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    if (this.isLocal) {
      this.imageDetectionLocal(canvas);
    } else {
      this.imageDetectionOnline(canvas);
    }
  }

  private imageDetectionOnline(canvas) {
    console.log("Working online");
    canvas.toBlob((blob) => {
      let detection$: Observable<ImagePrediction>;
      if (this.isStoringImage) {
        detection$ = this.predictionService.predictImage(
          blob,
          this.customVisionEndpoint,
          this.customVisionKey
         
        );
      } else {
        detection$ = this.predictionService.predictImageWithNoStore(
          blob,
          this.customVisionEndpoint,
          this.customVisionKey
         
        );
      }
      detection$.subscribe((predictions: any) => {
        predictions.predictions.forEach((p) => {
          if(p.tagName==this.Filter || ""  || " ")
          if (p.probability >= this.confidence/100 ) {
            this.drawOverlay(
              p.boundingBox.left * this.overlay.nativeElement.width,
              p.boundingBox.top * this.overlay.nativeElement.height,
              p.boundingBox.width * this.overlay.nativeElement.width,
              p.boundingBox.height * this.overlay.nativeElement.height,
              p.tagName
            );
            console.log(p.tagName + " " + p.probability * 100 + " % ");

              if(p.tagName==this.Filter || ""  || " "){
                 this.http.post(this.URLApi,{deviceID:"Cam1", alertType : p.tagName, metaData : this.Metadata}).subscribe((res)=>{
                });
            }
           
              
                 

          }
        });
      });
    });
  }

  private async imageDetectionLocal(canvas) {
    if (this.loadedModel) {
      console.log("Working offline");
      const result = await this.model.executeAsync(canvas);
      // tslint:disable-next-line: prefer-for-of
      for (let index = 0; index < result[0].length; index++) {
        if (result[1][index] > 0.4) {
          const w =
            result[0][index][2] * this.overlay.nativeElement.width -
            result[0][index][0] * this.overlay.nativeElement.width;
          const h =
            result[0][index][3] * this.overlay.nativeElement.height -
            result[0][index][1] * this.overlay.nativeElement.height;
          this.drawOverlay(
            result[0][index][0] * this.overlay.nativeElement.width,
            result[0][index][1] * this.overlay.nativeElement.height,
            w,
            h,
            this.labl[result[2][index]]
          );
        }
      }
    }
  }

  private stopCaptureStream() {
    // stop camera capture
    if (this.stream) {
      this.stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }

  /* handles all type of errors from usermedia API */
  private handleError(error) {
    console.log("navigator.getUserMedia error: ", error);
  }

  ngOnDestroy(): void {
    this.stopCaptureStream();
    clearInterval(this.detectId);
    this.detectId = null;
    this.stream = null;
  }
}
