import "./App.css";
import Container from "./components/UI/container/Container";
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
      <Navbar />
    </>
  );
}

export default App;
