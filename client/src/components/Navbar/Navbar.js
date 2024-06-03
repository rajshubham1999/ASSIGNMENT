import React from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.png';
import LAMA from '../../assets/LAMA..png';
import setting from '../../assets/setting.png'
import notification from '../../assets/notifications.png'

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='left'>
                <img className="logo" src={logo} alt="icon"/>
                <img className='lama' src={LAMA} alt="lama"/>
                
                
            </div>
            <div className='right'>
              <img className='setting' src={setting} alt="setting"/>
              <img className='notification' src={notification} alt="notification"/>
            </div>
        </div>

    </nav>
  )
}

export default Navbar