import React from 'react'
import user from '../Components/user.png'
import { Link } from 'react-router-dom'

const ContectDetail = (props) => {
    const { name, email } = props.history.location.state.contect
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="dercription">{email}</div>
                </div>
                <Link to={'/'}>
                    <button className="btn btn-dark center-div">Back to Contacts</button>
                </Link>
            </div>
        </div>
    )
}

export default ContectDetail
