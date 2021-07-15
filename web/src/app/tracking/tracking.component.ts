import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../services/tracking-service/tracking.service';
import type { TrackingData } from 'src/app/models';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {
  track_data!: TrackingData;
  dataLoaded!: Promise<boolean>;

  constructor(private trackService: TrackingService) {}

  ngOnInit(): void {
    this.showData();
  }

  private showData(): void {
    this.trackService.getData('test123').subscribe((data: TrackingData) => {
      this.track_data = { ...data };
      console.table(data);
      this.dataLoaded = Promise.resolve(true);
    });
  }
}
