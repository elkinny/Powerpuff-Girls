import React from 'react';
import Head from 'next/head';

import EpisodeDetails from '../components/EpisodeDetails';

const EpisodeDetailsPage = () => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <EpisodeDetails />
  </div>
);

export const getServerSideProps = EpisodeDetails.getProps;

export default EpisodeDetailsPage;
