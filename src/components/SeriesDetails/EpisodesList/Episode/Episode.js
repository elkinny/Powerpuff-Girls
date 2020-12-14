import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import style from './style.module.scss';

const Episode = ({
  id, season, number, name, image,
}) => (
  <Link href="/[episodeId]" as={`/${id}`}>
    <div className={style.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={style.wrapper}>
        <span className={style.name}>{name}</span>
      </div>
      <span className={style.number}>
        {season}
        .
        {number}
      </span>
    </div>
  </Link>
);

Episode.propTypes = {
  id: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Episode;
