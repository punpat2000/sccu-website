import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  trackingdata = {
    track_id: 'CU123456TH',
    topic: 'ร้องเรียนกรณีมีบุคคลภายนอกเข้ามาบริเวณหอพักนิสิต',
    detail:
      'เมื่อวันที่ ... มีบุคคลน่าสงสัยเข้ามาภายในบริเวณหอพักนิสิต เวลา ...',
    process: [
      {
        date: '23/04/2564 15:03',
        detail:
          'ได้รับการตอบกลับจากสำนักงานหอพักนิสิตแล้วผลสรุปว่าจะมีการจัดการปัญหาและเพิ่มมาตรการให้รัดกุมมากขึ้น',
        success: true,
      },
      {
        date: '18/04/2564 15:03',
        detail:
          'ทางคณะกรรมาธิการวิสามัญสวัสดิการนิสิตได้ส่งหนังสือไปยังสำนักงานหอพักนิสิตเรียบร้อยแล้วและกำลังรอการตอบรับ',
        success: false,
      },
    ],
    success_rate: 3,
    owner: 'กินเก่ง น่ารัก',
  };

  constructor() {}
}
