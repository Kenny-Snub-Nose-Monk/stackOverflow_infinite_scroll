import React, {useRef} from 'react';
import './App.css';
import {Questions, SearchBar, Tags} from './components'
import useAlan from './components/Alan';

function App() {
  const alanBtnContainer = useRef();
  useAlan();

  return (
    <div className="App">
      <div className="header">
        <SearchBar/>
        <Tags/>
      </div>
      <div className='content'>
        <Questions/>
      </div>
      <div ref={alanBtnContainer}/>
    </div>
  );
}

export default App;
