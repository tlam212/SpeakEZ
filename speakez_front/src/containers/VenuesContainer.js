import React from 'react'
import VenueCard from '../presentation/VenueCard'
import SearchBar from '../presentation/SearchBar'
import VenueInfo from '../presentation/VenueInfo'


class VenuesContainer extends React.Component{

  state ={
    allVenues:[],
    searchInput: "",
    venueDetail: null
  }

  handleSearchChange = (e) => {
    let newText = e.target.value
    this.setState({
      searchInput: newText
    })
  }

  handleVenueCardClick = (e) => {
    console.log(e.target.dataset.id)

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
        <VenueInfo venue={this.state.venueDetail}/>
        {
          this.state.allVenues.filter(venue => venue.address2.includes(this.state.searchInput)).map(venue => {
           return <VenueCard
           key={venue.id}
           venue={venue}
           whenClicked={this.handleVenueCardClick}
           />
        })
        }

      </div>
    )
  }
}
export default VenuesContainer
