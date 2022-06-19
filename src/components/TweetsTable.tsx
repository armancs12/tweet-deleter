import { useState } from "react";
import Dropdown from "./Dropdown";
import TweetsTableItem from "./TweetsTableItem";

const tweets = [
  {
    id: "1",
    content: "Here is a beautiful view https://t.co/M1x3GoJai6",
    date: "Fri, Jun 17, 2022, 4:36 PM",
    retweetCount: 0,
    likeCount: 0,
  },
  {
    id: "2",
    content:
      "RT @glanderco: FROG COMIC Art by @OpenAI DALL-E 2, text by Openai playground https://t.co/CBQT2P0tM6",
    date: "Fri, Jun 17, 2022, 4:10 PM",
    retweetCount: 31,
    likeCount: 0,
  },
  {
    id: "3",
    content:
      "RT @billboard: Drake keeps the surprises coming on his new album https://t.co/jDsR4AxHcB",
    date: "Fri, Jun 17, 2022, 4:08 PM",
    retweetCount: 36,
    likeCount: 0,
  },
  {
    id: "4",
    content: "This is a test tweet as well",
    date: "Fri, Jun 17, 2022, 2:19 PM",
    retweetCount: 0,
    likeCount: 0,
  },
];

const TweetsTable = () => {
  const [selectedTweets, setSelectedTweets] = useState<string[]>([]);

  const toggleTweetSelect = (tweetId: string) => {
    if (selectedTweets.includes(tweetId)) {
      setSelectedTweets(selectedTweets.filter((id) => id !== tweetId));
    } else {
      setSelectedTweets([...selectedTweets, tweetId]);
    }
  };

  const selectAllTweets = () => {
    setSelectedTweets(tweets.map((tw) => tw.id));
  };

  const deselectAllTweets = () => {
    setSelectedTweets([]);
  };

  return (
    <div className="border border-gray-300 rounded">
      <div>
        <div className="flex items-center p-4">
          <div className="flex-1 text-left">
            <Dropdown
              items={[
                {
                  type: "button",
                  label: `Select shown (${tweets.length} items)`,
                  onClick: selectAllTweets,
                },
                {
                  type: "button",
                  label: `Select all (${tweets.length})`,
                  onClick: selectAllTweets,
                },
                {
                  type: "button",
                  label: "Deselect all",
                  onClick: deselectAllTweets,
                },
              ]}
            >
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedTweets.length > 0}
              />
            </Dropdown>
          </div>
          <div className="flex-1 text-center text-xs text-gray-500 hidden lg:block">
            {`Showing ${tweets.length} of ${tweets.length} entries`}
          </div>
          <div className="flex-1 text-right">
            <select className="text-sm font-semibold text-gray-500 bg-white text-center">
              <option value="newest-first">Newest First</option>
              <option value="newest-first">Newest First</option>
              <option value="newest-first">Newest First</option>
              <option value="newest-first">Newest First</option>
              <option value="newest-first">Newest First</option>
              <option value="newest-first">Newest First</option>
            </select>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 lg:hidden border-t border-gray-300 py-2">
          Showing 3 of 3 entries
        </div>
        <div>
          {tweets.map((tweet) => (
            <TweetsTableItem
              key={tweet.id}
              id={tweet.id}
              content={tweet.content}
              date={tweet.date}
              likeCount={tweet.likeCount}
              retweetCount={tweet.retweetCount}
              onCheckboxToggle={() => toggleTweetSelect(tweet.id)}
              isSelected={selectedTweets.includes(tweet.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TweetsTable;
