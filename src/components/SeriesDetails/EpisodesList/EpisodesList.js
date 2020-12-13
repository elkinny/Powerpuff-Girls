import React from 'react';
import { useSelector } from 'react-redux';

import { episodesSelector } from '../../../store/selectors';
import Episode from './Episode';
import style from './style.module.scss';

const EpisodesList = () => {
  const episodes = useSelector(episodesSelector);

  return (
    <div className={style.list}>
      {episodes.map(
        (el) => (
          <Episode
            key={`${el.season}-${el.number}`}
            id={el.id}
            name={el.name}
            season={el.season}
            number={el.number}
            image={el.image ? el.image.original : '/placeholder.png'}
          />
        ),
      )}
    </div>
  );
};

export default EpisodesList;
