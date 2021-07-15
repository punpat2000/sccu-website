import type { Status } from './status.model';

export interface Process {
  timestamp: string;
  details: string;
  success: boolean;
}

export interface TrackingData {
  trackingId: string;
  title: string;
  details: string;
  processes: Array<Process>;
  status: Status;
  owner?: string;
}
