import React, { Component } from 'react'
import '../css/ExTwo.css'
import Navbar from './shared/Navbar'
import '../css/shared/ExperimentLayout.css'

export class ExTwo extends Component {
  render() {
    return (
      <div className="experiment-layout">
        <Navbar />
        <div className="experiment-content">
          <div className='container'>
            <div className='header'>
              <div className='heading'> Welcome to KL University </div>
              <div className='menu'>
                <span>Home </span>
                <span>About </span>
                <span>Portfolio </span>
                <span>Login </span>
              </div>
            </div>
            <div className='content'>
              <div className='card1'>
                <div className='plogo'>
                   <img src='../images/lap2.jpg' alt='Product Logo' width={250} height={150}/>
                </div>
                <div className='pdetails'>
                  <div className='pname'> Product Name - Macbook air M3</div>
                  <div className='pother'>
                    <p>Description</p>
                    <p>Rs 1.60k</p>
                    <p>Year of Manufacuture-2024</p>
                  </div>
                </div>
              </div>
              <div className='card1'>
                <div className='plogo'>
                  <img src='../images/lap2.jpg' alt='Product Logo' width={250} height={150}/>
                </div>
                <div className='pdetails'>
                  <div className='pname'> Product Name - Macbook air M2</div>
                  <div className='pother'>
                    <p>Description</p>
                    <p>Rs 2.1lak </p>
                    <p>Year of Manufacuture-2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ExTwo
