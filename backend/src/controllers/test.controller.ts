import type { Request, Response } from 'express';

const getDataTest = (req: Request, res: Response): void => {
  res.send(res.locals.data as string);
};

export { getDataTest };
