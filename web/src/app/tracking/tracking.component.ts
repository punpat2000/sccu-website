import { Component, OnInit } from '@angular/core';
import { TrackingService } from '../services/tracking-service/tracking.service';
import type { TrackingData } from 'src/app/models';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss'],
})
export class TrackingComponent implements OnInit {
  private _executed: boolean = false;
  track_data!: TrackingData;
  dataLoaded!: Promise<boolean>;
  input: FormControl;

  constructor(private trackService: TrackingService) {
    this.input = new FormControl('', [
      Validators.required,
      Validators.pattern(/^\S*$/),
    ]);
  }

  ngOnInit(): void {
    this.showData();
  }

  private showData(id: string = 'test123'): void {
    this.trackService.getData(id).subscribe((data: TrackingData) => {
      this.track_data = { ...data };
      console.table(this.track_data);
      if (!this._executed) {
        this.dataLoaded = Promise.resolve(true);
        this._executed = true;
      }
    });
  }

  submit(): void {
    if (this.input.dirty && this.input.valid) {
      this.showData(this.input.value);
      this.input.markAsPristine();
    }
  }
}
