import { useEffect, useState } from "react";
import css from "./HackathonDetails.module.scss";

import HackathonDetailsCard from "./components/HackathonDetailsCard";
import ArrowBack from "../../components/UI/arrow-back/ArrowBack";
import Container from "../../components/UI/container/Container";
import ToggleButton from "../../components/toggleButton/ToggleButton";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchHackathons } from "../../store/hackathonSlice";

import HackathonPojects from "./components/HackathonPojects";

const HackathonDetails = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggleEvent = () => {
    setToggle(!toggle);
  };

  // load hackathons
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchHackathons());
  }, [dispatch]);

  // take hackathons
  const hackathons = useSelector(
    (state: RootState) => state.hackathons.hackathons
  );

  // find hackathon by id
  const { id } = useParams<{ id: string }>();
  const hackathonId = id ? parseInt(id, 10) : null;
  const selectedHackathon =
    hackathonId !== null
      ? hackathons.find((hackathon) => hackathon.id === hackathonId)
      : null;

  if (!selectedHackathon) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`${css.wrapper}`}>
      <ArrowBack />
      <Container>
        <h1 className={`${css.title}`}>{selectedHackathon.name}</h1>
        <div className={`${css.card}`}>
          <HackathonDetailsCard hackathon={selectedHackathon} />
        </div>
      </Container>
      <section className={css.details}>
        <div className={css.spoiler_toggle}>
          <ToggleButton
            button1="Details"
            button2="Projects"
            onClick={handleToggleEvent}
          />
        </div>
        {!toggle ? (
          <div className={css.details__text}>
            <div
              dangerouslySetInnerHTML={{
                __html: selectedHackathon.description
              }}
            />
          </div>
        ) : (
          <div className={css.details__project}>
            {hackathonId != null && (
              <HackathonPojects hackathonId={hackathonId} />
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default HackathonDetails;
