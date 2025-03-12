import { Leagues } from "@/app/interfaces/Leagues";
import { QueryOptions } from "@/app/interfaces/QueryOptions";
import { Team } from "@/app/interfaces/Team";
import { sort } from "@/app/utils/format";
import { NextRequest, NextResponse } from "next/server";

import leagues from "@/app/data/leagues.json";
import teams from "@/app/data/teams.json";

const VALID_API_KEY = process.env.API_KEY;

const leagueNames = leagues.map((l) => l.name as Leagues);

export async function GET(req: NextRequest, { params }: { params: Promise<{ league: Leagues }> }) {
  // Security X-API-KEY check
  const API_KEY = req.headers.get("X-API-KEY");
  if (API_KEY !== VALID_API_KEY) {
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  // URL params
  const { league } = await params;

  // query
  const searchParams = req.nextUrl.searchParams;
  const incSortBy = searchParams.get("sort_by") as QueryOptions;
  const sortParams = Object.values(QueryOptions);
  const sortBy = sortParams.includes(incSortBy) ? incSortBy : QueryOptions.Name; // if incoming param is empty/doesn't exist -> default to "name"

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
