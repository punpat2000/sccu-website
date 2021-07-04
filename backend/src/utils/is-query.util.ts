import type { Query } from '../models/query.model';

export function isQuery(obj: any): obj is Query {
  return (obj as Query).id !== undefined;
}
