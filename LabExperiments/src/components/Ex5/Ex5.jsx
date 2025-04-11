
import React from 'react'
import Navbar from '../shared/Navbar'
import '../../css/shared/ExperimentLayout.css'
import '../../css/ExFive.css'

export default function Ex5() {
  function Mover() {
    document.getElementById("login").className = 'mover-login'
  }
  
  function Mleave() {
    document.getElementById("login").className = 'login-form'
  }

  return (
    <div className="experiment-layout">
      <Navbar />
      <div className="experiment-content">
        <div className='parent'>
          <center>    
            <div className='login-form' onMouseOver={Mover} onMouseLeave={Mleave} id="login">
              <table>
                <thead>
                  <tr>
                    <td colSpan={2} style={{ backgroundColor: 'yellowgreen' }}>Login Page</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name: </td>
                    <td><input type="text" /></td>
                  </tr>
                  <tr>
                    <td>Password: </td>
                    <td><input type="password" /></td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <button>Login</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </center>
        </div>
      </div>
    </div>
  )
}
