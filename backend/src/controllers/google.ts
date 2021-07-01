import { google } from 'googleapis';

const getData = async (): Promise<string> => {
  const auth = await google.auth.getClient({
    keyFile: 'secrets.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  const range = `Sheet1!A1:A1`;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: '1CdcZcnnyB7LbJsF8w0_czXuI9zTpN6HIoleACacnXt4',
    range,
  });

  const resp: string = response.data.values![0][0]!;
  return resp;
};

export { getData };
