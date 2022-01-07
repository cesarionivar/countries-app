import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { SearchBar } from '../components/SearchBar';

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
      <main className='min-h-screen bg-gray-900 text-white'>
        <SearchBar />
      </main>
    </div>
  );
};

export default Home;
