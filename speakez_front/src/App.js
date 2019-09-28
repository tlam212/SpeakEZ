import React from 'react';
import NavBar from './presentation/NavBar'
import SearchBar from './presentation/SearchBar'
import VenuesContainer from './containers/VenuesContainer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <VenuesContainer />
    </div>
  );
}

export default App;
