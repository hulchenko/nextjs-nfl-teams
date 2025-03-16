### Challenge Approach

1. React/Next.js were strongly suggested, so I will use them for the UI.
2. The openapi.yaml file describes an HTTP GET method, its endpoint, and status codes—indicating a REST API approach.
3. Since FastAPI/Django aren't mentioned, I will use Next.js for both the UI and backend.
4. The requirement to "pull data from a remote API that is <ins>frequently updated</ins>" suggests that a refreshing mechanism is needed. React Query or SWR handle this — I will use SWR.
6. Define TypeScript types for Leagues/Teams.
7. Implement sorting and filtering functionalities:
     - Filter (required): By league name (via URL params).
     - Sort (optional): By name/conference/division (asc/desc) using query params.
8. To speed up UI development, I will use Material-UI.
9. Based on the API schema, the server should expect an API key in request headers.
10. Since this is the customer’s first website, I will keep the implementation minimal for time and cost efficiency.
11. Apply the status codes from openapi.yaml:
     - 400 → Client-side issue (e.g., missing league name in request).
     - 401 → Missing API_KEY in request headers.
     - 403 → Since the customer specifically required NFL teams, any other league request will return this error.
     - 404 → League does not exist.
12. Uncertainty: How often should the data be refetched?
     - On focus change?
     - Every X seconds/minutes?
     - Should sorting trigger a refetch or just update local state?
13. Since the challenge does not specify authentication, I assume it is okay to embed the API key in .env. For direct requests/testing, the API key will be provided.
14. Add mock data for leagues and teams.
15. While reviewing the challenge and API logic, I decided to re-fetch data on every sorting event, since the data is frequently updated.
16. Pagination is unnecessary because:
     - No database integration is mentioned.
     - The mock dataset is small.
     - Sorting logic is user friendly and efficient.
17. Issue: Facing problems passing headers to SWR (fixed via https://stackoverflow.com/a/65863845/14701509).
18. Issue: Investigating Material UI hydration errors (fixed via https://mui.com/material-ui/integrations/nextjs/?srsltid=AfmBOopLpjZeoTQZzkUaZ4T2evwKStsYk1ZiThkQh7lKUNmEjYnKsr10).
19. Commit messages document key steps during development.
20. Refactor code → Separate concerns, reuse components.
21. Add a league context → Avoid excessive prop drilling.
22. Create a 404 page with a navigation option back to the landing page.
23. Improve styling, clean up logs.
24. Deploy to Vercel, define environment variables.
