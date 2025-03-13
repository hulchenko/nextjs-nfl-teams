"use client";

import { useContext, createContext, ReactNode, useState } from "react";
import { Leagues } from "../interfaces/Leagues";

const LeagueContext = createContext<{ league: Leagues; setLeague: (league: Leagues) => void }>({
  league: Leagues.NFL,
  setLeague: () => {},
});

const LeagueProvider = ({ children }: { children: ReactNode }) => {
  const [league, setLeague] = useState<Leagues>(Leagues.NFL);

  return <LeagueContext.Provider value={{ league, setLeague }}>{children}</LeagueContext.Provider>;
};

const useLeague = () => useContext(LeagueContext);

export { LeagueProvider, useLeague };
