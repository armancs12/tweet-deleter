import SearchForm from "./SearchForm";

const SearchFormContainer = () => {
  return (
    <div className="pt-4 bg-gray-100">
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="relative lg:col-start-1 lg:col-end-3">
          <SearchForm />
        </div>
      </section>
    </div>
  );
};

export default SearchFormContainer;
