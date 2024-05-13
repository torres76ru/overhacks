import Container from "../UI/container/Container";
import Search from "../search/Search";
import Filter from "../filter/Filter";
import HackatonList from "../hackatonList/HackatonList";
import Navbar from "../navbar/Navbar";
import classes from "./Hackathons.module.scss";

const HackathonsPage = () => {
  return (
    <div className={classes.wrapper}>
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
    </div>
  );
};

export default HackathonsPage;
