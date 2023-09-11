import React from 'react'
import './User.css'
import avatar from "../../../../assets/images/avatar.jpg";

const User = () => {
  return (
    <div className="user">
    <div className="avatar">
      <img src={avatar} alt="avatar" />
      <h3>Jony Black</h3>
    </div>
  </div>
  )
}

export default User