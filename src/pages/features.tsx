import Button from "../components/Button";
import CheckmarkIcon from "../components/icons/CheckmarkIcon";
import TwitterIcon from "../components/icons/TwitterIcon";

const FeaturesPage = () => {
  return (
    <section className="features-hero max-w-7xl mx-auto px-4 mt-4 md:mt-0 md:pt-24 pb-32 bg-auto bg-top overflow-x-hidden">
      <div className="text-center mx-auto max-w-screen-md">
        <h1 className="text-4xl leading-[44px] md:text-[52px] md:leading-none tracking-[-1.5px] font-bold spacing">
          All the features you wish Twitter had, in one place.
        </h1>
        <div className="mt-4 text-2xl leading-9 tracking-[-.5px] text-gray-500">
          Browse, search and delete your tweets fast.
        </div>
        <div className="mt-4">
          <Button type="primary" className="px-4 h-[52px] text-[17px]">
            <TwitterIcon invertColor />
            <span className="ml-2">Sign in with Twitter</span>
          </Button>
        </div>
        <div className="mt-4">
          <div className="text-sm text-gray-500">
            <div>
              Over <strong className="text-black">1,360,240</strong> users have
              already deleted{" "}
              <strong className="text-black">1,020,265,991</strong> tweets
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-16 -mr-12 -mb-8">
          <div className="text-center mr-12 mb-8 max-w-[144px]">
            <div className="mx-auto inline-block">
              <CheckmarkIcon />
            </div>
            <p className="mt-1 text-[17px] font-semibold leading-5">
              {" "}
              Delete tweets and likes{" "}
            </p>
          </div>
          <div className="text-center mr-12 mb-8 max-w-[144px]">
            <div className="mx-auto inline-block">
              <CheckmarkIcon />
            </div>
            <p className="mt-1 text-[17px] font-semibold leading-5">
              {" "}
              Auto delete tweets and likes{" "}
            </p>
          </div>
          <div className="text-center mr-12 mb-8 max-w-[144px]">
            <div className="mx-auto inline-block">
              <CheckmarkIcon />
            </div>
            <p className="mt-1 text-[17px] font-semibold leading-5">
              {" "}
              Smart tweet and like search{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
