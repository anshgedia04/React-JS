import React, { useContext } from 'react';
import { SearchContext } from '../Context/SearchContext';

export default function First() {
  const { Search_counter, new_Search } = useContext(SearchContext); 

  return (
    <div>
      <h1>Search Counter: {Search_counter}</h1>
      <button onClick={new_Search}>New Search</button> 
    </div>
  );
}
