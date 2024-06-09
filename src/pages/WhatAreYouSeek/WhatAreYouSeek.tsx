import { Link } from 'react-router-dom';
import css from './WhatAreYouSeek.module.scss';
import video from '../../assets/gifs/sft_button.mp4';
import Container from '../../components/UI/container/Container';

const WhatAreYouSeek = () => {
  return (
    <Container>
      <div className={`${css.title}`}>
        <h1>What are you seeking?</h1>
      </div>
      <div className={`${css.info}`}>
        <p>
          If you want to find a hackathon, click "Search for teammates". To find
          like-minded teammates, click "Search for hackathons". If you want to
          create an event, select "I’m an organizer"
        </p>
      </div>

      <div className={`${css.link} ${css.link__animated}`}>
        <Link to="people">
          <video autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <span>Search for teammates</span>
        </Link>
      </div>
      <div className={`${css.link}`}>
        <Link to="hackathons">
          <span>Search for hackathons</span>
        </Link>
      </div>
      <div className={`${css.link}`}>
        <Link to="admin-panel">
          <span>Organize events</span>
        </Link>
      </div>
    </Container>
  );
};

export default WhatAreYouSeek;
