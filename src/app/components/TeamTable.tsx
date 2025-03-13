"use client";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { useCallback, useState } from "react";
import useSWR from "swr";
import { Leagues } from "../interfaces/Leagues";
import { QueryOptions } from "../interfaces/QueryOptions";
import { SortDirection } from "../interfaces/SortDirection";
import { Team } from "../interfaces/Team";
import { fetcher } from "../utils/fetcher";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { TeamTableHead } from "./TeamTableHead";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || ""; // fallback value in case it's missing

export const TeamTable = () => {
  const [league, setLeague] = useState<Leagues>(Leagues.NFL);
  const [sortBy, setSortBy] = useState(QueryOptions.Name);
  const [sortDir, setSortDir] = useState(SortDirection.ASC);

  const {
    data = [],
    error,
    isLoading,
  } = useSWR([`/api/team_list/${league}?sort_by=${sortBy}&dir=${sortDir}`, API_KEY], fetcher, {
    refreshInterval: 30000, // 30s
  });

  const sortHandler = useCallback(
    (target: QueryOptions): void => {
      // 1. If header hasn't been active -> sort by default asc
      // 2. If header was already active -> change sort direction

      const selectedHeader = target.toLowerCase() as QueryOptions;

      if (sortBy === selectedHeader) {
        setSortDir((prevDir) => {
          if (prevDir === SortDirection.ASC) {
            return SortDirection.DESC;
          }
          return SortDirection.ASC;
        });
      } else {
        setSortBy(selectedHeader);
      }
    },
    [sortBy]
  );

  return (
    <TableContainer component={Paper} sx={{ height: "70vh", width: "80%", margin: "auto", position: "relative" }}>
      <Table size="small" stickyHeader>
        <TeamTableHead sortDir={sortDir} sortBy={sortBy} sortHandler={sortHandler} />
        <TableBody>
          {/* Loading */}
          {data.length === 0 && isLoading && (
            <TableRow>
              <TableCell sx={{ border: "none" }}>
                <Loading />
              </TableCell>
            </TableRow>
          )}

          {/* Error */}
          {data.length === 0 && !isLoading && (
            <TableRow>
              <TableCell colSpan={6} align="center" sx={{ border: "none" }}>
                <Error error={error} />
              </TableCell>
            </TableRow>
          )}
          {data.map((row: Team) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.conference}</TableCell>
              <TableCell align="right">{row.division}</TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
              <TableCell align="right">{row.display_name}</TableCell>
              <TableCell align="right">{row.league}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
