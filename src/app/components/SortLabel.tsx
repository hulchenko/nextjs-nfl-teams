import { TableSortLabel } from "@mui/material";
import { QueryOptions } from "../interfaces/QueryOptions";
import { capitalize } from "../utils/format";
import { SortDirection } from "../interfaces/SortDirection";

export const SortLabel = ({
  label,
  sortBy,
  sortDir,
  sortHandler,
}: {
  label: QueryOptions;
  sortBy: QueryOptions;
  sortDir: SortDirection;
  sortHandler: (target: QueryOptions) => void;
}) => {
  return (
    <TableSortLabel
      sx={sortBy === label ? { fontWeight: "bold", fontSize: "1rem" } : {}}
      active={sortBy === label}
      direction={sortBy === label ? sortDir : SortDirection.ASC}
      onClick={() => sortHandler(label)}
    >
      {capitalize(label)}
    </TableSortLabel>
  );
};
