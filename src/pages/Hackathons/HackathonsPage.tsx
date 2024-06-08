import classes from "./Hackathons.module.scss";
import bg_video from "../../assets/gifs/user_home_bg.mp4";
import Container from "../../components/UI/container/Container";
import Search from "../../components/search/Search";
import Filter from "../../components/filter/Filter";
import HackatonList from "../../components/hackatonList/HackatonList";
import { ChangeEvent, useState } from "react";

const HackathonsPage = () => {
  const [filter, setFilter] = useState<string[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (selectedMarks: string[]) => {
    setFilter(selectedMarks);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.bg_vid}>
        <video className={classes.video} autoPlay loop muted playsInline>
          <source src={bg_video} type="video/mp4" />
        </video>
      </div>
      <div style={{ margin: "18px 0 20px" }}>
        <Container>
          <Search searchQuery={searchQuery} onChange={handleChange} />
        </Container>
      </div>
      <div style={{ margin: "5px 15px 20px" }}>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <div style={{ margin: "30px 0 0" }}>
        <Container>
          <HackatonList filter={filter} searchQuery={searchQuery} />
        </Container>
      </div>
    </div>
  );
};

export default HackathonsPage;
