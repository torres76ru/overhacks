import { Link } from "react-router-dom";
import arrow_icon from "../../../assets/icons/arrow.svg";

interface Props {
  to?: string;
}

const ArrowBack = ({ to }: Props) => {
  return (
    <Link
      to={to || ".."}
      relative="path"
      style={{
        padding: "10px 0 0 15px",
        display: "block",
        position: "absolute",
        top: 0,
        left: 0
      }}
    >
      <img src={arrow_icon} alt="go back" />
    </Link>
  );
};

export default ArrowBack;
