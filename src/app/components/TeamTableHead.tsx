import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { QueryOptions } from "../interfaces/QueryOptions";
import { SortDirection } from "../interfaces/SortDirection";
import { capitalize } from "../utils/format";

export const TeamTableHead = ({
  sortBy,
  sortDir,
  sortHandler,
}: {
  sortBy: QueryOptions;
  sortDir: SortDirection;
  sortHandler: (target: QueryOptions) => void;
}) => {
  const SortLabel = ({ label }: { label: QueryOptions }) => {
    return (
      <TableSortLabel
        style={sortBy === label ? { fontWeight: "bold", fontSize: "1rem" } : {}}
        active={sortBy === label}
        direction={sortBy === label ? sortDir : SortDirection.ASC}
        onClick={(e) => sortHandler(e.currentTarget.textContent as QueryOptions)}
      >
        {capitalize(label)}
      </TableSortLabel>
    );
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <SortLabel label={QueryOptions.Name} />
        </TableCell>
        <TableCell align="right">
          <SortLabel label={QueryOptions.Conference} />
        </TableCell>
        <TableCell align="right">
          <SortLabel label={QueryOptions.Division} />
        </TableCell>
        <TableCell align="right">Nickname</TableCell>
        <TableCell align="right">Full Name</TableCell>
        <TableCell align="right">League</TableCell>
      </TableRow>
    </TableHead>
  );
};
