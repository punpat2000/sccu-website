import { Injectable } from '@angular/core';
import { Status, TrackingData } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  trackingdata: TrackingData = {
    trackingId: 'CU123456TH',
    title: 'ร้องเรียนกรณีมีบุคคลภายนอกเข้ามาบริเวณหอพักนิสิต',
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

  constructor() {}
}
