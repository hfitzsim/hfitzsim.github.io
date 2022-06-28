import { Injectable } from '@angular/core';
import { MOUNTAINS } from '../mock-mountains';

declare const L: any;

@Injectable({
  providedIn: 'root'
})
export class MapService {


  constructor() { }

  createMap() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coords = [position.coords.latitude, position.coords.longitude];

      let map = L.map('map').setView(coords, 6);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaGZpdHpzaW0iLCJhIjoiY2wybmozdzFsMHhjMjNiczMxcjYwN2FlbyJ9.eBnOgWl7LtvS_7gD6A8g9Q', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(map);

      let marker = L.marker(coords).addTo(map);
      marker.bindPopup('<b>Your Location</b>').openPopup();

      this.addResortMarkers(map);

      const sortMountains = MOUNTAINS.forEach((m) => {
        let currentDistance: number[] = [];
        currentDistance += this.distanceBetween(m.coordinates.latitude, m.coordinates.longitude, position.coords.latitude, position.coords.longitude);
        console.log(currentDistance);
      })
    });
    this.watchPosition();
  }


  
  watchPosition() {
    navigator.geolocation.watchPosition((position) => {

    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })
  }

  distanceBetween(x1: any, y1: any, x2: any, y2: any): any {
    const a = x2 - x1;
    const b = y2 - y1;

    const distance = Math.sqrt(a * a + b * b);
    return distance;
  }

  addResortMarkers(myMap: any) {

    let redIcon = new L.Icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
  
    MOUNTAINS.forEach((m) => {
      const lat = m.coordinates.latitude;
      const lng = m.coordinates.longitude;
  
      let marker = L.marker([lat, lng], {icon: redIcon}).addTo(myMap);
      marker.bindPopup(`<b>${m.name}</b>`).openPopup();

    })
  }

}
