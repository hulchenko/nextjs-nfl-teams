"use client";

import leagues from "@/app/data/leagues.json";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useLeague } from "../context/useLeague";
import { Leagues } from "../interfaces/Leagues";

const leagueNames = leagues.map((l) => l.name);

export const Header = () => {
  const { league = "", setLeague } = useLeague();

  const handleChange = (selectedLeague: Leagues) => {
    setLeague(selectedLeague);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: "rgb(240, 81, 35)", padding: "5px" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            ACME Sports
          </Typography>
          <FormControl>
            <InputLabel>League</InputLabel>
            <Select value={league} label="League" variant="outlined" onChange={(e) => handleChange(e.target.value as Leagues)}>
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
