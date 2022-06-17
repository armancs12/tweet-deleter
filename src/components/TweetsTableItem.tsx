import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import TwitterLikeIcon from "./icons/TwitterLikeIcon";
import TwitterRetweetIcon from "./icons/TwitterRetweetIcon";

const TweetsTableItem = () => {
  return (
    <div className="relative flex items-center p-4 border-t border-gray-300 transition-colors duration-200 ease-out">
      <div>
        <input type="checkbox" className="mr-4" />
      </div>
      <div className="flex-grow">
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-sm font-semibold text-gray-800">
                You tweeted
              </span>
              <a href="#" className="ml-2 text-gray-400 hover:text-gray-600">
                <ExternalLinkIcon />
              </a>
            </div>
            <div className="hidden lg:flex items-center">
              <span className="flex items-center text-sm mr-4">
                <TwitterRetweetIcon />
                <span>0</span>
              </span>
              <span className="flex items-center text-sm mr-4">
                <TwitterLikeIcon />
                <span>0</span>
              </span>
              <span className="text-sm">Fri, Jun 17, 2022, 2:19 PM</span>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-[17px] text-gray-500">
              This is a test tweet as well.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetsTableItem;
