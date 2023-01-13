import Head from 'next/head';
import Header from "../components/Header";
import Nav from '../components/Nav';
import Results from '../components/Results';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HEADER */}
      <Header />

      {/* NAV */}
      <Nav />

      {/* RESULTS */}
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
}