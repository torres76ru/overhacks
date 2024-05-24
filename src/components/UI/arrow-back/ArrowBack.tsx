import { Link } from "react-router-dom";
import arrow_icon from "../../../assets/icons/arrow.svg";

const ArrowBack = () => {
  return (
    <Link
      to={".."}
      relative="path"
      style={{ padding: "10px 0 0 15px", display: "block" }}
    >
      <img src={arrow_icon} alt="go back" />
    </Link>
  );
};

export default ArrowBack;
