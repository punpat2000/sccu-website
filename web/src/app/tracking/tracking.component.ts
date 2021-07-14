import { Component } from '@angular/core';
import { TrackingService } from '../services/tracking-service/tracking.service';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent {
  track_data: any;

  constructor(public trackService: TrackingService) {
    this.track_data = this.trackService.trackingdata;
  }
}
