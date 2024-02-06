import { useState } from 'react';
import { useForm } from 'react-hook-form';

const SearchBar = ({ onSearchEmployee }) => {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <label>Chercher un employee </label>
      <form onSubmit={handleSubmit(({ term, age }) => console.log(term, age))}>
        <input {...register('term', { required: true, minLength: 3 })} />
        <input {...register('age')} />
        <button>Search</button>
      </form>
    </>
  );
};

export default SearchBar;
