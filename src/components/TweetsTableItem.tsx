import clsx from "clsx";
import { FC } from "react";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import TwitterLikeIcon from "./icons/TwitterLikeIcon";
import TwitterRetweetIcon from "./icons/TwitterRetweetIcon";

type Props = {
  id: string;
  content: string;
  date: string;
  retweetCount: number;
  likeCount: number;
  isSelected?: boolean;
  onCheckboxToggle: () => void;
};

const classes = {
  base: {
    root: "relative flex items-center p-4 border-t border-gray-300 transition-colors duration-200 ease-out",
    border:
      "absolute left-0 h-full w-1 bg-blue-500 transition-opacity opacity-0 duration-200 ease-out",
  },
  selected: {
    root: "bg-gray-100",
    border: "opacity-100",
  },
};

const TweetsTableItem: FC<Props> = ({
  id,
  content,
  date,
  likeCount,
  retweetCount,
  onCheckboxToggle,
  isSelected = false,
}) => {
  return (
    <div
      className={clsx(classes.base.root, isSelected && classes.selected.root)}
    >
      <div
        className={clsx(
          classes.base.border,
          isSelected && classes.selected.border
        )}
      ></div>
      <div>
        <input
          type={"checkbox"}
          className="mr-4 w-4 h-4 p-1 cursor-pointer"
          checked={isSelected}
          onChange={onCheckboxToggle}
        />
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
                <span>{retweetCount}</span>
              </span>
              <span className="flex items-center text-sm mr-4">
                <TwitterLikeIcon />
                <span>{likeCount}</span>
              </span>
              <span className="text-sm">{date}</span>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-[17px] text-gray-500">{content}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetsTableItem;
