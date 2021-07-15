import { Component } from '@angular/core';
import { TrackingService } from '../services/tracking-service/tracking.service';
import type { TrackingData } from 'src/app/models';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent {
  track_data: TrackingData;

  constructor(public trackService: TrackingService) {
    this.track_data = this.trackService.trackingdata;
  }

  showData(): void {
    this.trackService.getData('123');
  }
}
