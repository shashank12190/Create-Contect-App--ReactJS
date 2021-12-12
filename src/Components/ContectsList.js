import React from 'react'
import CreateContect from './CreateContect'
import { Link } from 'react-router-dom'

const ContectsList = (props) => {
    const { contects, removeContectHandeler } = props
    // const deleteContectHandeler = (id) => {
    //     getContectId(id)
    // }
    // const contects = [{
    //     id: 121,
    //     name: 'shashank',
    //     email: 'e@2'
    // }]
    const rander = contects.map((i) => {

        return (
            <div key={i.id} className='row container '>
                {/* <CreateContect contect={i} /> */}
                <CreateContect contect={i} removeContectHandeler={removeContectHandeler} />
            </div>
        )
    })
    return (
        <div className='container my-3'>
            <Link to='/add'>
                <button className='ui button blue right'>Add Contects</button>
            </Link>
            <h2>Contect List</h2>
            {rander}
        </div>
    )
}

export default ContectsList
