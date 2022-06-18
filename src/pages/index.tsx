import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import TwitterIcon from "../components/icons/TwitterIcon";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tweet Deleter</title>
        <meta name="description" content="Tweet Deleter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="max-w-7xl mx-auto px-4 mt-4 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Hero Section */}
          <div className="text-center lg:text-left mx-auto lg:mx-0 md:pt-24">
            <h1 className="text-[52px] leading-none tracking-[-1.5px] font-bold spacing">
              Delete multiple tweets with one click
            </h1>
            <div className="mt-4 text-2xl leading-9 tracking-[-.5px] text-gray-500">
              Delete your old, embarrassing tweets to keep them from floating
              around the interweb
            </div>
            <div className="inline-grid grid-flow-col gap-6 mt-6 items-center pb-16">
              <div className="mx-auto lg:mx-0">
                <Button type="primary" className="px-4 h-[52px] text-[17px]">
                  <TwitterIcon invertColor />
                  <span className="ml-2">Sign in with Twitter</span>
                </Button>
              </div>
              <div className="hidden lg:block max-w-[240px]">
                <div className="text-sm text-gray-500">
                  <div>
                    Over <strong className="text-black">1,360,240</strong> users
                    have already deleted{" "}
                    <strong className="text-black">1,020,265,991</strong> tweets
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center">
            <img
              src="/image-homepage.png"
              alt="Delete multiple tweets with one click"
              width={528}
              height={528}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
