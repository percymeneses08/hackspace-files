import React from 'react'

import Badge from '../../components/Badge/Badge'
import BadgeForm from '../../components/BadgeForm/BadgeForm'
import api from '../../api'

class BadgesCreate extends React.Component {
  // Declaro e incializo el estado vacío
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      area: "",
      experience: "",
      portfolio: "",
      email: ""
    }
  }

  // Y cada vez que se actualice
  handleChange = e => {
    this.setState({
      // Voy actualizando los datos al form con lo que se vaya escribiendo en el input
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    // Esto detiene el envio del form al realizar click en el botón
    e.preventDefault()
    // Aquí empieza la petición para guardar el nuevo badge que hemos realizado,
    // entonces el loading es true
    this.setState({loading: true, error: null})

    try {
      await api.badges.create(this.state.form)
      this.setState({loading: false})
      this.props.history.push("/badges")
    } catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  render() {
    return (
      <div className="padding">
        <div className="badgesCreate">
          <Badge
            BadgePosition="fixed"
            BadgeLeft="5%"
            // Le paso los valores actualizados
            firstNameValue={this.state.form.firstName || "First name"}
            lastNameValue={this.state.form.lastName || "Last name"}
            areaValue={this.state.form.area || "Area"}
            experienceValue={this.state.form.experience || "Experience"}
            portfolioValue={this.state.form.portfolio || "Portfolio"}
            emailValue={this.state.form.email || "Email"}
          />
          <BadgeForm 
            // Le paso la función handleChange declarada arriba a BadgeForm con otro nombre, onChange en este caso
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default BadgesCreate