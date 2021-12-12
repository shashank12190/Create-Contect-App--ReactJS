import React from 'react'
import user from '../Components/user.png'
import { Link } from 'react-router-dom'

const DeleteContect = (props) => {
    console.log(props);
    const { id, name, email } = props.history.location.state.contect

    return (
        <div>
            <h1 className='text-center my-2'>Are You Sure ?</h1>
            <div className="main">
                <div className="ui card centered text-center">
                    <div className="image">
                        <img src={user} alt="user" />
                    </div>
                    <div className="content">
                        <div className="header">{name}</div>
                        <div className="dercription">{email}</div>
                    </div>
                    <Link to={'/'}>
                        <button className="btn btn-dark mb-3 " onClick={() => { props.removeContectHandeler(id) }} >Delete</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default DeleteContect
