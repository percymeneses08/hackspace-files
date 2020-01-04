import React from 'react'

import BadgeDetails from '../BadgeDetails/BadgeDetails'
import Loader from '../../components/Loader/Loader'
import PageError from '../../components/pageError/pageError'
import api from '../../api'

class BadgeDetailsContainer extends React.Component {
  
  state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false
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

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true })
  }

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false })
  }

  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null })

    try {
      // Remuevo el badge según el Id
      await api.badges.remove(this.props.match.params.badgeId)
      this.setState({ loading: false })

      this.props.history.push("/badges")
    } catch(error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    if(this.state.loading) {
      return <Loader />
    }

    if(this.state.error) {
      return <PageError error={this.state.error} />
    }

    return(
      <div className="padding">
        <BadgeDetails
          badge={this.state.data}
          modalIsOpen={this.state.modalIsOpen}
          
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
          onDeleteBadge={this.handleDeleteBadge}
        />
      </div>
    )
  }
}

export default BadgeDetailsContainer