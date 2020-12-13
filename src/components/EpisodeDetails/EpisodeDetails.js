import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

import { viewedEpisodeSelector } from '../../store/selectors';
import InfoCard from '../InfoCard';

const EpisodeDetails = () => {
  const currentEpisode = useSelector(viewedEpisodeSelector);

  return (
    <InfoCard
      image={currentEpisode.image ? currentEpisode.image.original : '/placeholder.png'}
      name={currentEpisode.name}
      summary={currentEpisode.summary}
      subTitle={(
        <>
          <FontAwesomeIcon icon={faFilm} />
          {`${currentEpisode.season}.${currentEpisode.number}`}
        </>
      )}
      link={{ url: '/', text: 'Back' }}
      isColumn
    />
  );
};

EpisodeDetails.getProps = async (context) => {
  const res = await fetch(`${process.env.API_URL}/episodes/${context.params.episodeId}`);

  const data = await res.json();

  if (!data) {
    return {
      props: { initialReduxState: { viewedEpisode: {} } },
    };
  }

  return {
    props: {
      initialReduxState: {
        viewedEpisode: data,
      },
    },
  };
};

export default EpisodeDetails;
