import styled from "styled-components";
import SearchInput from "./SearchInput";
import Articles from "./Articles";
import SideBar from "./SideBar";

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 20px auto;
  padding: 20px;
`;

const App = () => {
  return (
    <Container>
      <SideBar />
      <div>
        <SearchInput />
        <Articles />
      </div>
    </Container>
  );
};

export default App;
