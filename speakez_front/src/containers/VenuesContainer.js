import React from 'react'
import VenueCard from '../presentation/VenueCard'
import SearchBar from '../presentation/SearchBar'


class VenuesContainer extends React.Component{

  state ={
    allVenues:[],
    searchInput: ""
  }

  handleSearchChange = (e) => {
    let newText = e.target.value
    this.setState({
      searchInput: newText
    })
  }


  componentDidMount(){
      this.getVenues()
  }


  getVenues = () =>{
    fetch('http://localhost:3000/venues')
    .then(resp => resp.json())
    .then(venueObj => {
      this.setState({allVenues:venueObj})
    })
  }

  render(){
    return(
      <div className="vcDiv">
        <SearchBar searchValue={this.state.searchInput} searchText={this.handleSearchChange} />
      {
        this.state.allVenues.filter(venue => venue.address2.includes(this.state.searchInput)).map(venue => {
         return <VenueCard
         key={venue.id}
         name={venue.name}
         address1={venue.address1}
         address2={venue.address2}/>
      })
      }

      </div>
    )
  }
}
export default VenuesContainer
