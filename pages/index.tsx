import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Countries App</title>
        <meta
          name='description'
          content='Rest countries App, Nextjs TS, Tailwindscsas and Rest Countries API'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
    </div>
  );
};

export default Home;
