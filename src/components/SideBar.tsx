import styled from "styled-components";
import { useSetFilters } from "../hooks/useSetFilters";
import { useSetSearch } from "../hooks/useSetSearch";

const Filter = styled.div`
  width: 200px;
  margin-right: 30px;
  border: 1px solid #05825a;
  margin-bottom: 20px;
  .header {
    background-color: #05825a;
    color: white;
    font-weight: bold;
    padding: 5px 10px;
  }
  ul {
    list-style: none;
    padding-left: 0;
    li {
      cursor: pointer;
      padding: 0 10px;
      &.active {
        background-color: lightblue;
      }
    }
  }
`;

const SideBar = () => {
  const { topics, domains, setActiveTopic, setActiveDomain } = useSetFilters();
  const { setSerchProp } = useSetSearch();
  const handleTopicSelect = (topic: string) => () => {
    setActiveTopic(topic);
    setSerchProp({ query: topics.active === topic ? "" : topic });
  };
  const handleDomainSelect = (domain: string) => () => {
    setActiveDomain(domain);
    setSerchProp({
      domains: domains.active === domain ? "" : domain,
      page: 1,
    });
  };
  return (
    <div>
      <Filter>
        <div className="header">Topics</div>
        {topics && (
          <ul>
            {topics.list.map((topic: string) => (
              <li
                className={topic === topics.active ? "active" : ""}
                key={topic}
                onClick={handleTopicSelect(topic)}
              >
                {topic}
              </li>
            ))}
          </ul>
        )}
      </Filter>

      <Filter>
        <div className="header">Domains</div>
        {domains && (
          <ul>
            {domains.list.map((domain: string) => (
              <li
                className={domain === domains.active ? "active" : ""}
                key={domain}
                onClick={handleDomainSelect(domain)}
              >
                {domain}
              </li>
            ))}
          </ul>
        )}
      </Filter>
    </div>
  );
};

export default SideBar;
