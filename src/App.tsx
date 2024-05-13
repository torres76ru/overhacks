import "./App.css";
import Container from "./components/UI/container/Container";
import Filter from "./components/filter/Filter";
import HackatonList from "./components/hackatonList/HackatonList";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <>
      <div style={{ margin: "18px 0 20px" }}>
        <Container>
          <Search />
        </Container>
      </div>
      <div style={{ margin: "5px 15px 20px" }}>
        <Filter />
      </div>
      <div style={{ margin: "30px 0 0" }}>
        <Container>
          <HackatonList />
        </Container>
      </div>

      <Navbar />
    </>
  );
}

export default App;
