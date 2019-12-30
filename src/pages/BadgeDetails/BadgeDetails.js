import React from 'react'
import { Link } from 'react-router-dom'

import Badge from '../../components/Badge/Badge'

function BadgeDetails(props) {
  const badge = props.badge
  return(
    <div className="badgeDetails">
      <div>
        <Badge
          firstNameValue={badge.firstName}
          lastNameValue={badge.lastName}
          areaValue={badge.area || "Area"}
          experienceValue={badge.experience || "Experience"}
          portfolioValue={badge.portfolio || "Portfolio"}
          emailValue={badge.email}
        />
      </div>
      <div className="options">
        <div className="edit">
          <Link 
            className="button"
            to={`/badges/${badge.id}/edit`}>
            Edit
          </Link>
        </div>
        <div className="delete">
          <button className="button">Delete</button>
        </div>
      </div>
    </div>
  )
}

export default BadgeDetails