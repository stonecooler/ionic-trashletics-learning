import { Component, ViewChild, ElementRef  } from '@angular/core';

// import { Geolocation } from '@ionic-native/geolocation/ngx';

declare var google: any;

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  @ViewChild('map',{static:false}) mapElement: ElementRef;
  map: any;
  
  // constructor(private geolocation: Geolocation) {}

  constructor() {}

  loadMap(){
    console.log('loadMap 4');
    let directionsService: any = new google.maps.DirectionsService();
    let directionsRenderer: any = new google.maps.DirectionsRenderer();

    // https://www.latlong.net/
    let start = new google.maps.LatLng(53.572253, 9.719478);
    let end = new google.maps.LatLng(53.574240, 9.705794);

    let mapOptions = {
      center: start,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    directionsRenderer.setMap(this.map);

    let request = {
      origin: start,
      destination: end,
      waypoints:[
        {
          location: new google.maps.LatLng(53.569959, 9.717507),
          stopover: true
        },
        {
          location: new google.maps.LatLng(53.568303, 9.713003),
          stopover: true
        },
        {
          location: new google.maps.LatLng(53.571081, 9.703608),
          stopover: true
        }
      ],
      travelMode: 'WALKING'
    };

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsRenderer.setDirections(result);
      }
    });
  
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
