import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import style from './style.module.scss';

const InfoCard = ({
  image, name, picDetails, summary, details, subTitle, link, isColumn,
}) => (
  <div className={clsx(style.description, { [style.row]: !isColumn })}>
    <div>
      <img className={style.picture} src={image} alt={name} />
      {picDetails && (
        <div className={style['pic-details']}>
          {picDetails.map((el) => <span key={el} className={style['pic-detail']}>{el}</span>)}
        </div>
      )}
    </div>
    <div className={style.text}>
      <h1 className={style.header}>
        {name}
        <span className={style.subtitle}>
          {subTitle}
        </span>
      </h1>
      <div className={style.summary} dangerouslySetInnerHTML={{ __html: summary }} />
      {link.url && (
      <Link href={link.url}>
        <a href={link.url} className={style.link}>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
          {link.text}
        </a>
      </Link>
      )}
      {details && (
        <div className={style.details}>
          {details.map((el, i) => <p key={i}>{el}</p>)}
        </div>
      )}
    </div>
  </div>
);

InfoCard.defaultProps = {
  picDetails: [],
  details: [],
  link: {},
  summary: 'No summary',
  isColumn: false,
};

InfoCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  picDetails: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ])),
  summary: PropTypes.string,
  details: PropTypes.array,
  subTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  link: PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
  }),
  isColumn: PropTypes.bool,
};

export default InfoCard;
