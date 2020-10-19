import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import '../styles/Search.css';

function Search() {
  const [input, setInput] = useState('');
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log('You hit search', input);
    history.push('/search');
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      <div className="search__buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google search
        </Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  );
}

export default Search;
