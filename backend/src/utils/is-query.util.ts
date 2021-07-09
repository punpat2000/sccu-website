import type { Query } from '../models/query.model';

export function isQuery(obj: unknown): obj is Query {
  return (obj as Query).id !== undefined;
}
