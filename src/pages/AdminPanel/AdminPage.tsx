import ArrowBack from "../../components/UI/arrow-back/ArrowBack";
import Button from "../../components/UI/button/Button";
import Container from "../../components/UI/container/Container";
import HackatonCard from "../../components/hackatonCard/HackatonCard";
import classes from "./AdminPage.module.scss";
const hackathon = {
  id: "1",
  name: "AIBC World Hackathon",
  prize_pool: "180 000",
  curency: "USD",
  preview: "http://localhost:5173/src/assets/img/hackathon1.png",
  admin: true
};

const AdminPage = () => {
  return (
    <div className={classes.wrapper}>
      <ArrowBack />

      <Container>
        <div style={{ margin: "30px 0 42px" }}>
          <Button variant={"secondary"} href={"#"}>
            Add new event
          </Button>
        </div>

        <div className={classes.title}>My events:</div>
        <HackatonCard hackaton={hackathon} />
        <HackatonCard hackaton={hackathon} />
      </Container>
    </div>
  );
};

export default AdminPage;
