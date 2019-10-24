import { Component, ViewChild, ElementRef  } from '@angular/core';

// import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;

  // constructor(public geolocation: Geolocation) {}
  constructor() {}

  // ionViewDidLoad(){
  //   this.loadMap();
  // }

  loadMap(){
    console.log('loadMap');

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // ----------------

    // this.geolocation.getCurrentPosition().then((position) => {

    //   let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    //   let mapOptions = {
    //     center: latLng,
    //     zoom: 15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }

    //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // }, (err) => {
    //   console.log(err);
    // });

    // ----------------

    // this.geolocation.getCurrentPosition((position)=>{
    //     let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    //     let mapOptions = {
    //       center: latLng,
    //       zoom: 15,
    //       mapTypeId: google.maps.MapTypeId.ROADMAP
    //     }

    //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // },(err) => {
    //     console.log(err);
    // });


  }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");
    this.loadMap();
  }

  ionViewWillLeave() {
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("ionViewDidLeave");
  }

}
