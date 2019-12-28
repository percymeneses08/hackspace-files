import React from 'react'

import Badge from '../Badge/Badge'

function BadgesList(props) {
  return(
    <div className="badgesList">
      <div className="unordered-list">
        {props.badges.map(badge => {
          return(
            <div className="list-item" key={badge.id}>
              <Badge
                BadgeWidth="378px"
                BadgeHeight="219.36px"

                firstNameValue={badge.firstName}
                lastNameValue={badge.lastName}
                areaValue={badge.area || "Area"}
                experienceValue={badge.experience || "Experience"}
                portfolioValue={badge.portfolio || "Portfolio"}
                emailValue={badge.email}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BadgesList