import { useState, ChangeEvent, useMemo } from "react";
import { debounce } from "../utils/debounce";
import { SearchDetailsPayload } from "../types/searchDetails";
import { useSetSearch } from "../hooks/useSetSearch";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 10px 30px;
  border: 2px solid darkgrey;
  border-radius: 5px;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSerchProp } = useSetSearch();
  const changeQuery = useMemo(() => {
    return debounce<SearchDetailsPayload>(setSerchProp, 1000);
  }, [setSerchProp]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    changeQuery({
      query: e.target.value,
      page: 1,
    });
  };
  return (
    <form name="search">
      <Input type="text" value={search} onChange={handleChange} />
    </form>
  );
};

export default SearchInput;
