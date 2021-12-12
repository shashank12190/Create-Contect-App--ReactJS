import React from 'react'
import { Link } from 'react-router-dom'
const CreateContect = (props) => {
    const { id, name, email } = props.contect
    return (

        <div className="card my-2 col-sm-3 " >
            <div className="card-body">
                <Link to={{ pathname: `/contact/${id}`, state: { contect: props.contect } }}>
                    <h5 style={{ color: 'red' }} className="card-title"> {name}</h5>
                    <p style={{ color: 'black' }} className="card-text"> {email}</p>
                </Link>
                <Link to={{ pathname: `/delete/${id}`, state: { contect: props.contect } }}>
                    <div className='text-center'>
                        <button onClick={() => { props.removeContectHandeler(id) }} className='btn btn-dark btn-sm my-2'>Delete</button>
                    </div>
                </Link>
            </div>
        </div>


    )
}

export default CreateContect
