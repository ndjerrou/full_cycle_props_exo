import { useState } from 'react';
const SearchBar = ({ onSearchEmployee }) => {
  const [term, setTerm] = useState('');

  const handleChange = e => {
    setTerm(e.target.value);

    if (e.target.value.length >= 3) {
      onSearchEmployee(e.target.value);
    }
  };
  return (
    <>
      <label>Chercher un employee </label>
      <input value={term} onChange={handleChange} />
    </>
  );
};

export default SearchBar;
