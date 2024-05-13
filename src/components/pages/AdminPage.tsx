import arrow_icon from "../../assets/icons/arrow.svg";
import Button from "../UI/button/Button";
import Container from "../UI/container/Container";
import HackatonCard from "../hackatonCard/HackatonCard";
import classes from "./AdminPage.module.scss";
const hackathon = {
  id: "1",
  name: "AIBC World Hackathon",
  prize_pool: "180 000",
  curency: "USD",
  admin: true
};

const AdminPage = () => {
  return (
    <div>
      <div style={{ margin: "10px 0 0 15px" }}>
        <img src={arrow_icon} alt="go back" />
      </div>

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
