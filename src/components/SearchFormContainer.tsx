import SearchForm from "./SearchForm";

const SearchFormContainer = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-12 lg:grid-cols-3">
      <div className="relative lg:col-start-1 lg:col-end-3">
        <SearchForm />
      </div>
    </section>
  );
};

export default SearchFormContainer;
