import React, { Component } from 'react'
import '../css/Projecthomepage.css'
import { Link } from 'react-router-dom'
import Navbar from './shared/Navbar'

export class Projecthomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      experiments: [
        { id: 2, path: '/ex2', name: 'Experiment 2' },
        { id: 3, path: '/ex3', name: 'Experiment 3' },
        { id: 4, path: '/ex4', name: 'Experiment 4' },
        { id: 5, path: '/ex5', name: 'Experiment 5' },
        { id: 6, path: '/ex6', name: 'Experiment 6 - Users' },
        { id: 7, path: '/ex7', name: 'Experiment 7 - Weather' },
        { id: 9, path: '/ex9', name: 'Experiment 9 - Product Management' },
      ]
    };
  }

  render() {
    return (
      <div id="base">
        <Navbar />
        <div id="content">
          <div className="experiments-grid">
            {this.state.experiments.map(exp => (
              <Link to={exp.path} key={exp.id} className="experiment-card">
                {exp.name}
              </Link>
            ))}
          </div>
        </div>
        <div id='footer'>
          <label className='copyrightText'>Copyright © Leo Stephen - K L University. All rights reserved</label>
          <div className="social-icons">
            <img className='socialmediaIcon' src='./images/facebook.png' alt="facebook"/>
            <img className='socialmediaIcon' src='./images/linkedin.png' alt="linkedin"/>
            <img className='socialmediaIcon' src='./images/twitter.png' alt="twitter"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Projecthomepage
