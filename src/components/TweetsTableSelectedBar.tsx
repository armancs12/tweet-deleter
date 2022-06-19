import { FC } from "react";
import Button from "./Button";

type Props = {
  entriesCount: number;
  onDelete: () => void;
};

const TweetsTableSelectedBar: FC<Props> = ({ entriesCount, onDelete }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1DA1F2] py-3 z-10">
      <section className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex-grow flex flex-col lg:flex-row lg:justify-between">
          <div className="text-[17px] font-semibold leading-5 text-white">
            {entriesCount} {entriesCount > 1 ? "entries" : "entry"} selected
          </div>
        </div>
        <Button
          type="primary-inverted"
          className="ml-8 px-6 h-[52px] text-base"
          onClick={onDelete}
        >
          Delete
        </Button>
      </section>
    </div>
  );
};

export default TweetsTableSelectedBar;
