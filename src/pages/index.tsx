import Head from 'next/head';
import { ReactElement } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Titlsae</h1>
    </>
  );
};

export default Home;
Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
