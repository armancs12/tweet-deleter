import FilterIcon from "./icons/FilterIcon";
import SearchFilterButton from "./SearchFiltersButton";

const SEARCH_FILTERS = [
  { label: "Tweet type", isLocked: true },
  { label: "Date", isLocked: true },
  { label: "Profanities", isLocked: false },
  { label: "Time of day", isLocked: true },
  { label: "Day of the week", isLocked: true },
  { label: "Media", isLocked: true },
];

const SearchFilters = () => {
  return (
    <div className="sticky top-0 bg-gray-100 z-10 py-4">
      <section className="max-w-7xl mx-auto px-4">
        <div className="relative h-10 flex w-full max-w-full items-center">
          <div className="hide-scrollbars flex h-full w-full items-center overflow-x-scroll whitespace-nowrap">
            <div className="mr-4 flex-shrink-0">
              <button className="flex items-center">
                <FilterIcon />
                <span className="ml-2 text-sm font-semibold text-blue-400">
                  Filter
                </span>
              </button>
            </div>
            <div className="h-full">
              <div className="grid h-full grid-flow-col items-center gap-x-2">
                {SEARCH_FILTERS.map(({ label, isLocked }, index) => (
                  <SearchFilterButton
                    key={index}
                    label={label}
                    isLocked={isLocked}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchFilters;
