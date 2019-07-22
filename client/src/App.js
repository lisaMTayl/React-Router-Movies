import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movie from '../src/Movies/Movie';
import MovieList from '../src/Movies/MovieList';


import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList exact list={savedList} />
      <Route exact path="/" component={MovieList}/>
      <Route path="/movies/:id" component={Movie}/>

    </div>
  );
};

export default App;
