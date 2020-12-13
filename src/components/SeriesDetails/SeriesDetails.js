import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar, faLanguage, faClock, faFilm,
} from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';
import { seriesSelector } from '../../store/selectors';
import EpisodesList from './EpisodesList';
import InfoCard from '../InfoCard';

const SeriesDetails = () => {
  const {
    image, name, genres, summary, language, status, type, rating,
  } = useSelector(seriesSelector);

  return (
    <>
      <InfoCard
        image={image}
        name={name}
        picDetails={genres}
        summary={summary}
        details={[
          <>
            <FontAwesomeIcon icon={faLanguage} />
            {language}
          </>,
          <>
            <FontAwesomeIcon icon={faClock} />
            {status}
          </>,
          <>
            <FontAwesomeIcon icon={faFilm} />
            {type}
          </>,
        ]}
        subTitle={(
          <>
            {rating}
            <FontAwesomeIcon icon={faStar} className={style.star} />
          </>
        )}
      />
      <EpisodesList />
    </>
  );
};

SeriesDetails.getProps = async () => {
  const res = await fetch(`${process.env.API_URL}/shows/${process.env.SERIES_ID}?embed=episodes`);
  const data = await res.json();

  if (!data) {
    return {
      props: { initialReduxState: {} },
    };
  }

  return {
    props: {
      initialReduxState: {
        name: data.name,
        image: data.image.original,
        summary: data.summary,
        genres: data.genres,
        language: data.language,
        status: data.status,
        type: data.type,
        rating: data.rating.average,
        episodes: data._embedded.episodes,
      },
    },
  };
};

export default SeriesDetails;
