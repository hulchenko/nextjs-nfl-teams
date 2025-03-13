import { QueryOptions } from "../interfaces/QueryOptions";
import { SortDirection } from "../interfaces/SortDirection";
import { Team } from "../interfaces/Team";

export const sort = (arr: Team[], prop: QueryOptions, direction: SortDirection = SortDirection.ASC) => {
  if (direction === SortDirection.ASC) {
    return arr.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  } else {
    return arr.sort((a, b) => (a[prop] < b[prop] ? 1 : -1));
  }
};
