import { useEffect, useState } from "react";
import css from "./HackathonRegistration.module.scss";
import FirstStep from "./components/FirstStep/FirstStep";
import HackerStep from "./components/HackerStep/HackerStep";
import max_bill from "../../assets/img/max-bill.jpg";
import SuccessStep from "./components/SuccessStep/SuccessStep";

const HackathonRegistration = () => {
  const [regWay, setRegWay] = useState<string>();

  const hackerProps = {
    id: "1",
    name: "Max Bill",
    role: "Product Designer",
    expirience: "3 years",
    skills: "Motion, Adobe, AI",
    picture: max_bill
  };

  const renderStep = () => {
    switch (regWay) {
      case "hacker":
        return <HackerStep hacker={hackerProps} onClick={handleRegWay} />;
      case "success":
        return <SuccessStep />;
      default:
        return <FirstStep onClick={handleRegWay} />;
    }
  };

  const handleRegWay = (way: string) => {
    setRegWay(way);
  };
  useEffect(() => console.log(regWay), [regWay]);
  return <div className={css.wrapper}>{renderStep()}</div>;
};

export default HackathonRegistration;
