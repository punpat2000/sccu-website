import type { Request, Response, NextFunction } from 'express';
import { google } from 'googleapis';

const getData = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const auth = await google.auth.getClient({
    keyFile: 'secrets.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });
  const id: number = res.locals.id;

  const sheets = google.sheets({ version: 'v4', auth });
  const range = `Sheet1!A${id}:A${id}`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1CdcZcnnyB7LbJsF8w0_czXuI9zTpN6HIoleACacnXt4',
    range,
  });

  if (!response?.data?.values?.[0]?.[0]) {
    res.sendStatus(404);
    return;
  }

  res.locals.data = response.data.values[0][0];
  // res.locals.data = 'hi';
  next();
};

export { getData };
