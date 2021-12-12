
import React, { Component } from 'react'

export default class AddContect extends Component {
    state = {
        name: '',
        email: ''
    }
    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' || this.state.email === '') {
            alert('All The fields are mendatory')
            return
        }
        console.log(this.state);
        this.props.addContectHandeler(this.state)
        this.setState({ name: '', email: '' })
        this.props.history.push('/')
    }
    render() {
        return (
            <div style={{ marginLeft: '150' }}>
                <div className='container my-3' >
                    <h2>Enter Name and Email</h2>
                    <form onSubmit={this.add}>
                        <div className=" form-group mx-sm-3 mb-2 col-md-4">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                            <input type="name" className="form-control" id="name" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} />
                        </div>
                        <div className="form-group mx-sm-3 mb-2 col-md-4">
                            <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                            <input type="email" className="form-control " id="email" value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value }) }} />
                        </div>
                        <button type="submit" className="btn btn-primary my-3 mx-5">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
