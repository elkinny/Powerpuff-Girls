import React from 'react';
import Head from 'next/head';

import SeriesDetails from '../components/SeriesDetails';

const SeriesDetailsPage = () => (
  <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <SeriesDetails />
  </>
);

export const getServerSideProps = SeriesDetails.getProps;

export default SeriesDetailsPage;
