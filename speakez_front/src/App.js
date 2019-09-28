import React from 'react';
import NavBar from './presentation/NavBar'
import SearchBar from './presentation/SearchBar'
import VenuesContainer from './containers/VenuesContainer'
import MapContainer from './containers/MapContainer'


class App extends React.Component{
  state ={
    searchInput: ""
  }
  render(){
    return (
      <div className="App">
        <NavBar />
        <SearchBar />
        <div className="mContainer">
        <VenuesContainer />
        <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
