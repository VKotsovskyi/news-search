const url =
  "https://newsapi.org/v2/everything?apiKey=fbc6549367cd402ebf985bd3b5424d95&";
export const fetchArticles = <T>(
  query: string,
  page: number = 1,
  domains: string = ""
): Promise<T> =>
  fetch(`${url}q=${query}&domains=${domains}&page=${page}&pageSize=${10}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }
  );
