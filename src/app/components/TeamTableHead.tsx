import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { QueryOptions } from "../interfaces/QueryOptions";
import { SortDirection } from "../interfaces/SortDirection";

import { SortLabel } from "./SortLabel";

export const TeamTableHead = ({
  sortBy,
  sortDir,
  sortHandler,
}: {
  sortBy: QueryOptions;
  sortDir: SortDirection;
  sortHandler: (target: QueryOptions) => void;
}) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <SortLabel label={QueryOptions.Name} sortBy={sortBy} sortDir={sortDir} sortHandler={sortHandler} />
        </TableCell>
        <TableCell align="right">
          <SortLabel label={QueryOptions.Conference} sortBy={sortBy} sortDir={sortDir} sortHandler={sortHandler} />
        </TableCell>
        <TableCell align="right">
          <SortLabel label={QueryOptions.Division} sortBy={sortBy} sortDir={sortDir} sortHandler={sortHandler} />
        </TableCell>
        <TableCell align="right">Nickname</TableCell>
        <TableCell align="right">Full Name</TableCell>
        <TableCell align="right">League</TableCell>
      </TableRow>
    </TableHead>
  );
};
