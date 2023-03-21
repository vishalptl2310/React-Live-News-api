import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="navbarMain">

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link> </li>
                            <li className="nav-item"><Link className="nav-link" to="/business">business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">technology</Link></li>

                        </ul>
                        <h1>
                            GET LATEST NEWS FREE!!!
                        </h1>
                    </div>
                </nav>
            </div>
        )
    }
}
