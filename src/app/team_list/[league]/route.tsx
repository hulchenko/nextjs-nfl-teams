import { NextRequest, NextResponse } from "next/server";
import { Leagues } from "@/app/interfaces/Leagues";
import { QueryOptions } from "@/app/interfaces/QueryOptions";
import { sort } from "@/app/utils/format";

import leagues from "@/app/data/leagues.json";
import teams from "@/app/data/teams.json";
import { Team } from "@/app/interfaces/Team";

const leagueNames = leagues.map((l) => l.name as Leagues);
const sortParams = Object.values(QueryOptions);

export async function GET(req: NextRequest, { params }: { params: Promise<{ league: Leagues }> }) {
  // URL params
  const { league } = await params;

  // query
  const searchParams = req.nextUrl.searchParams;
  const incSortBy = searchParams.get("sort_by") as QueryOptions;
  const sortBy = sortParams.includes(incSortBy) ? incSortBy : QueryOptions.Name; // if incoming param is empty/doesn't exist -> default to "name"
  console.log("SORT BY: ", sortBy);

  // request validation
  if (!league) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
  if (!leagueNames.includes(league)) {
    return NextResponse.json({ error: `League with the name ${league} does not exist.` }, { status: 404 });
  }
  if (league !== Leagues.NFL) {
    // restrict other leagues, since customer explicitly asked for NFL league
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const teamsInLeague = (teams as Team[]).filter((t) => t.league === league);
  const sortedData = sort(teamsInLeague, sortBy);

  return NextResponse.json({ data: sortedData }, { status: 200 });
}
