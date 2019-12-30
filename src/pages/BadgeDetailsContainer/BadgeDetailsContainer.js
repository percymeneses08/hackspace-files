import React from 'react'

import BadgeDetails from '../BadgeDetails/BadgeDetails'
import Loader from '../../components/Loader/Loader'
import api from '../../api'

class BadgeDetailsContainer extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    try {
      const data = await api.badges.read(this.props.match.params.badgeId)
      this.setState({ loading: false, data: data })
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if(this.state.loading) {
      return <Loader />
    }

    return(
      <div className="padding">
        <BadgeDetails
          badge={this.state.data}
        />
      </div>
    )
  }
}

export default BadgeDetailsContainer