import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { LocalNotifications } from "@capacitor/local-notifications"
import { Share } from "@capacitor/share"
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: "AgeApp"
  celcius: number | null = null;
  fahrenheit: number | null = null;
  location: { latitude: number; longitude: number } | null = null;

  async convert() {
    if (this.celcius !== null) {
      this.fahrenheit = (this.celcius * 9/5) + 32;
      
      // Hiển thị thông báo
      await LocalNotifications.schedule({
        notifications: [{
          title: 'Chuyển đổi hoàn tất',
          body: `${this.celcius}°C = ${this.fahrenheit}°F`,
          id: 1
        }]
      });
    }
  }

  async shareResult() {
    if (this.celcius !== null && this.fahrenheit !== null) {
      await Share.share({
        title: 'Kết quả chuyển đổi nhiệt độ',
        text: `${this.celcius}°C = ${this.fahrenheit}°F`,
        dialogTitle: 'Chia sẻ kết quả'
      });
    }
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      this.location = {
        latitude: coordinates.coords.latitude,
        longitude: coordinates.coords.longitude
      };
    } catch (error) {
      console.error('Error getting location', error);
    }
  }
}
