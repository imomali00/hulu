import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import Loader from "../components/Loader";
import requests from "../utils/requests";

export default function Home({ results }) {
  const [loading, setLoading] = useState(false);

  const handleLoading = () => setLoading(true);
  const handleLoaded = () => setLoading(false);

  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar handleLoading={handleLoading} handleLoaded={handleLoaded} />
      {/* Results */}
      {loading ? <Loader /> : <Results results={results} />}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return { results: [] };
    });

  return {
    props: {
      results: request.results,
    },
  };
}
