export function fetchRecipesService({ query = null, page = 1 }) {
  const params = new URLSearchParams();

  if (query) params.set("query", query);
  params.set("page", page);
  const paramString = params.toString();
  const url = paramString ? `/recipes.json?${paramString}` : "/recipes.json";

  return fetch(url).then((res) => res.json());
}
