import React from 'react';
import NavBar from './presentation/NavBar'
import VenuesContainer from './containers/VenuesContainer'
import MapContainer from './containers/MapContainer'


class App extends React.Component{



  render(){
    return (
      <div className="App">
        <NavBar />
        <div className="mContainer">
        <VenuesContainer />
        <MapContainer />
        </div>
      </div>
    );
  }
}

export default App;
