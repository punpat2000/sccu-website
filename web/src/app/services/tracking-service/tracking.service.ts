import { Injectable } from '@angular/core';
import { Status, TrackingData } from 'src/app/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  private readonly url: string = 'http://localhost:4000/getDataTest2?id=';

  constructor(private http: HttpClient) {}

  getData(id: string = 'CU123456TH'): Observable<TrackingData> {
    return this.http
      .get<TrackingData>(`${this.url}${id}`)
      .pipe(take(1), catchError(this.handleError.bind(this)));
  }

  private handleError(error: HttpErrorResponse): Observable<TrackingData> {
    return of(this.trackingdata);
    // switch (error.status) {
    //   case 0:
    //     return throwError('Something bad happened; please try again later.');
    //   case 400:
    //     return throwError('Bad request.');
    //   case 404:
    //     return throwError('Bad parameter.');
    //   default:
    //     return throwError(`Error status: ${error.status} occured.`);
    // }
  }

  trackingdata: TrackingData = {
    trackingId: 'CU123456TH',
    title: 'Http Error',
    details:
      'เมื่อวันที่ ... มีบุคคลน่าสงสัยเข้ามาภายในบริเวณหอพักนิสิต เวลา ...',
    processes: [
      {
        timestamp: '23/04/2564 15:03',
        details:
          'ได้รับการตอบกลับจากสำนักงานหอพักนิสิตแล้วผลสรุปว่าจะมีการจัดการปัญหาและเพิ่มมาตรการให้รัดกุมมากขึ้น',
        success: true,
      },
      {
        timestamp: '18/04/2564 15:03',
        details:
          'ทางคณะกรรมาธิการวิสามัญสวัสดิการนิสิตได้ส่งหนังสือไปยังสำนักงานหอพักนิสิตเรียบร้อยแล้วและกำลังรอการตอบรับ',
        success: false,
      },
    ],
    status: Status.DOCUMENTED,
    owner: 'กินเก่ง น่ารัก',
  };
}
