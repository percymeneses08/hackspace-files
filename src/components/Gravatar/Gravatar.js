import React from 'react'
import md5 from 'md5'

function Gravatar(props) {
  const email = props.emailGravatar
  const hash = md5(email)

  return(
    <img src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar según el hask que nos da el email"/>
  )
}

export default Gravatar