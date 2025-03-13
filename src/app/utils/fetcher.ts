// SWR requires defined fetcher: const fetcher = (...args) => fetch(...args).then(res => res.json())
// Add header to the SWR https://stackoverflow.com/a/65863845/14701509

export const fetcher = async ([url, token]: [url: string, token: string]) => {
  const response = await fetch(url, {
    method: "GET",
    headers: { "X-Api-Key": token },
  });

  if (!response.ok) {
    const { error } = await response.json();
    throw new Error(error || "Error fetching data.");
  }

  const data = await response.json();
  return data;
};
