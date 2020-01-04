import React from 'react'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader/Loader'
import BadgesList from '../../components/BadgesList/BadgesList'
import PageError from '../../components/pageError/pageError'
import Navbar from '../../components/Navbar/Navbar'
import api from '../../api'

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData()
    
    // Para que se actualice cada dterminado tiempo automáticamente
    // this.intervalId = setInterval(this.fetchData, 5000)
  }

  fetchData = async () => {
    this.setState({loading: true, error: null})
    
    try {
      const data = await api.badges.list()
      this.setState({loading: false, data: data})
    } catch(error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    // Esto es para que solo se actualice cuando sea necesario
    if(this.state.loading && !this.state.data) {
      return(
        <React.Fragment>
          <Navbar />
          <Loader />
        </React.Fragment>
      )
    }
    if(this.state.error) {
      return(
        <React.Fragment>
          <Navbar />
          <PageError error={this.state.error} />
        </React.Fragment>
      ) 
    }

    return (
      <div className="badges">
        <BadgesList badges={this.state.data} />
      </div>
    )
  }
}

export default Badges