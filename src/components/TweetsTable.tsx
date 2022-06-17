import Dropdown from "./Dropdown";
import TweetsTableItem from "./TweetsTableItem";

const TweetsTable = () => {
  return (
    <div className="border border-gray-300 rounded">
      <div>
        <div className="flex items-center p-4">
          <div className="flex-1 text-left">
            <Dropdown
              items={[
                { type: "button", label: "Select shown (3 items)" },
                { type: "button", label: "Select all (3 items)" },
                { type: "button", label: "Deselect all" },
              ]}
            >
              <input type="checkbox" className="w-4 h-4" />
            </Dropdown>
          </div>
          <div className="flex-1 text-center text-xs text-gray-500 hidden lg:block">
            Showing 3 of 3 entries
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
          <TweetsTableItem />
          <TweetsTableItem />
          <TweetsTableItem />
          <TweetsTableItem />
          <TweetsTableItem />
          <TweetsTableItem />
          <TweetsTableItem />
        </div>
      </div>
    </div>
  );
};

export default TweetsTable;
