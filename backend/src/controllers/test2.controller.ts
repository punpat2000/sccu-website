import type { Request, Response } from 'express';
import { Status } from '../models/status.model';
import type { TrackingData } from '../models/tracking-data.model';

const getDataTest2 = (req: Request, res: Response): void => {
  const id = req.query.id as string;
  const data: TrackingData = {
    trackingId: id,
    title: 'ร้องเรียนกรณีมีบุคคลภายนอกเข้ามาบริเวณหอพักนิสิต',
    details:
      'เมื่อวันที่ ... มีบุคคลน่าสงสัยเข้ามาภายในบริเวณหอพักนิสิต เวลา ...',
    processes: [
      {
        timestamp: new Date().toDateString(),
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
  res.send(data);
};

export { getDataTest2 };
