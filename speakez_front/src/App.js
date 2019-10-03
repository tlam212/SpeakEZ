import React from 'react';
import NavBar from './presentation/NavBar'
import VenuesContainer from './containers/VenuesContainer'
import VenueInfo from './presentation/VenueInfo'
import MapContainer from './containers/MapContainer'
import CoverPage from './presentation/CoverPage'
import { Route } from 'react-router-dom'


class App extends React.Component {

  state = {
    allVenues:[],
    searchInput: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/venues')
    .then(resp => resp.json())
    .then(venueObj => {
      this.setState({allVenues:venueObj})
    })
  }

  handleSearchChange = (e) => {
    let newText = e.target.value
    this.setState({
      searchInput: newText
    })
  }

    render(){
        return(
          <div>
          <NavBar />
          <Route exact path="/venues/:id" render={(props) => {
            let venueId = props.match.params.id
            console.log(venueId)
            let venue = this.state.allVenues.find(v => v.id == venueId)
            console.log(venue)
            return <VenueInfo venue={venue} />
          }}/>

          <Route exact path="/venues" render={() =>     <VenuesContainer
              handleSearchChange={this.handleSearchChange}
              searchValue={this.state.searchInput}
              venues={this.state.allVenues} />} />
          <Route exact path="/" render={() => <CoverPage />}/>
          </div>

        )
    }
}
export default App;
