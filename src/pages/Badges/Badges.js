import React from 'react'
import { Link } from 'react-router-dom'

import Loader from '../../components/Loader/Loader'
import BadgesList from '../../components/BadgesList/BadgesList'
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
    if(this.state.loading && !this.state.data) {
      return <Loader />
    }

    return (
      <div className="padding">
        <div className="badges">
          <Link className="button" to="/badges/badgesCreate">New Badge</Link>
          <div className="badgesList">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </div>
    )
  }
}

export default Badges