import { QueryOptions } from "../interfaces/QueryOptions";
import { Team } from "../interfaces/Team";

export const sort = (arr: Team[], prop: QueryOptions) => {
  return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
};
