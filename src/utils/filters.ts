import { Article } from "../types/articles";

export const setFilters = (type: string, values: string[]) => {
  const filterStorage = localStorage.getItem(type);
  const filter = filterStorage
    ? JSON.parse(filterStorage)
    : {
        list: [],
        active: "",
      };

  let changesMade = false;

  for (let value of values) {
    if (filter.list.indexOf(value) === -1) {
      filter.list.unshift(value);
      changesMade = true;
    }
  }

  if (!changesMade) return;

  localStorage.setItem(
    type,
    JSON.stringify({
      ...filter,
      list: filter.list.slice(0, 19),
    })
  );
  window.dispatchEvent(new Event("storage"));
};

export const getDomains = (articles: Article[]) => {
  return articles.map((article) => {
    return new URL(article.url).hostname.replace("www.", "");
  });
};

export const getParsedLocalstorageItem = (item: string) => {
  const itemStorage = localStorage.getItem(item);
  return itemStorage ? JSON.parse(itemStorage) : null;
};
