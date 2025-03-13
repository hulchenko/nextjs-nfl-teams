### Challenge approach

1. React/NextJS were highly suggested, so I will stick to them for the UI
2. openapi.yaml described HTTP GET method, its endpoint and HTTP status codes - it's going to be REST API approach
3. Since FastAPI/Django aren't mentioned, I will use NextJS to support both UI and the backend portion of the application
4. "pull data from a remote API that is <u>frequently updated</u>", so I will need some sort of refreshing mechanism (I know React Query or SWR use it). I will go with SWR.
5. Define types for Leagues/Teams
6. Ensure support of sort and filter functionalities:
   - Filter (required) by league name in URL params
   - Sort (optional) by name/conference/division + asc/desc in query search params.
7. To save time in the UI development I will utilize Material-UI.
8. Based on the API schema, the server should be expecting API key in the request headers
9. Since it's customer's first website - I will keep the implementation to the minimum for the sake of time and cost effectiveness.
10. Given the status codes in the openapi.yaml I will apply them to the following:
    - 400 client side issues (e.g. request is missing league name)
    - 401 if API_KEY is missing from the request headers
    - 403 since customer required "NFL" team specifically, I thought it might be a good way to display this error for any other requested league name
    - 404 if the requested league does not exist
11. Uncertainty: how often should the data be refetched:
    - on focus change
    - every X amount of seconds/minutes
    - if data is frequently updated should the sorting events also re-fetch data or should it be a local data change?
12. Since the challenge does not specify the authentication process specifically, I will assume that it is okay to embed the API key from the .env file, and for direct requests and testing to server side - API key string will be provided
13. Add mock data for leagues and teams
14. During the development and going over challenge description, given the server logic flexibility and since the data is frequently updated - I decided to re-fetch data on every sorting event in the UI.
15. Since there's no DB integration, it is not mentioned in the challenge file, mock data is small and fairly flexible sorting logic - I will opt from adding the pagination.
16. Facing issues with passing headers to SWR (https://stackoverflow.com/a/65863845/14701509)
17. Investigating Material UI hydration issues (https://mui.com/material-ui/integrations/nextjs/?srsltid=AfmBOopLpjZeoTQZzkUaZ4T2evwKStsYk1ZiThkQh7lKUNmEjYnKsr10)
18. Describing steps in frequent commit messages
19. Clean up code, separate concerns, reuse components.
20. Add league context to access from multiple components, avoid excessive prop drilling
21. Create 404 page and allow user to navigate back to the landing page
22. Styling improvements, clean up logs
23. Deploy to Vercel, define environment variables
