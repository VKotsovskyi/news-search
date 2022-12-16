import { useCallback, useEffect, useState } from "react";
import { getParsedLocalstorageItem } from "../utils/filters";

export const useSetFilters = () => {
  const [topics, setTopics] = useState(getParsedLocalstorageItem("topics"));
  const [domains, setDomains] = useState(getParsedLocalstorageItem("domains"));

  const storageHandler = useCallback(() => {
    setTopics(getParsedLocalstorageItem("topics"));
    setDomains(getParsedLocalstorageItem("domains"));
  }, []);

  useEffect(() => {
    window.addEventListener("storage", storageHandler);
    return () => {
      window.removeEventListener("storage", storageHandler);
    };
  }, [storageHandler]);

  const setActiveTopic = (topic: string) => {
    localStorage.setItem(
      "topics",
      JSON.stringify({
        ...topics,
        active: topics.active === topic ? "" : topic,
      })
    );
    window.dispatchEvent(new Event("storage"));
  };

  const setActiveDomain = (domain: string) => {
    localStorage.setItem(
      "domains",
      JSON.stringify({
        ...domains,
        active: domains.active === domain ? "" : domain,
      })
    );
    window.dispatchEvent(new Event("storage"));
  };

  return { topics, domains, setActiveTopic, setActiveDomain };
};
