"use client";

import leagues from "@/app/data/leagues.json";
import { FormControl, FormHelperText, MenuItem, Select } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLeague } from "../context/useLeague";
import { Leagues } from "../interfaces/Leagues";

const leagueNames = leagues.map((l) => l.name);

export const Header = () => {
  const { league = "", setLeague } = useLeague();
  const isLandingPage = usePathname() === "/";

  const handleChange = (selectedLeague: Leagues) => {
    setLeague(selectedLeague);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "var(--sport)", padding: "5px" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href={"/"}>ACME Sports</Link>
          </Typography>
          <FormControl disabled={!isLandingPage}>
            <FormHelperText sx={{ color: "#fff" }}>League</FormHelperText>
            <Select sx={{ background: "white" }} value={league} variant="outlined" onChange={(e) => handleChange(e.target.value as Leagues)}>
              {leagueNames.map((league, idx) => (
                <MenuItem key={idx} value={league}>
                  {league}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
