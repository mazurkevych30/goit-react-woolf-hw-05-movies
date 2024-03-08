import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) return;
    setSearchParams({ search: query });
    setQuery('');
  };

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        id="exampleInputSearch"
        name="search"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
