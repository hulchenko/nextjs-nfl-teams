import { Leagues } from "./Leagues";

export interface Team {
  name: string;
  nickname: string;
  display_name: string;
  id: string;
  league: Leagues;
  conference: string;
  division: string;
}
