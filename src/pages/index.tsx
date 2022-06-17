import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tweet Deleter</title>
        <meta name="description" content="Tweet Deleter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </div>
  );
};

export default Home;
