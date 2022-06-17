import clsx from "clsx";
import { FC } from "react";
import LockIcon from "./icons/LockIcon";

const classes = {
  root: {
    base: "flex h-10 items-center justify-between rounded-full border px-3",
    locked: "bg-gray-100",
    notLocked:
      "transition-all duration-200 ease-out bg-white hover:bg-gray-100",
  },
};

type Props = {
  label: string;
  isLocked: boolean;
};

const SearchFilterButton: FC<Props> = ({ label, isLocked }) => {
  return (
    <button
      className={clsx(
        classes.root.base,
        isLocked ? classes.root.locked : classes.root.notLocked
      )}
    >
      <div className="pointer-events-none">
        <div className="flex items-center">
          <span className="text-sm font-semibold leading-5 text-gray-600">
            {label}
          </span>
          <span className="ml-2 text-sm leading-5 text-gray-600">Any</span>
          {isLocked && (
            <div className="ml-2">
              <LockIcon />
            </div>
          )}
        </div>
      </div>
    </button>
  );
};

export default SearchFilterButton;
