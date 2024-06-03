import React from 'react'
import logo from '../../assets/logo.png';
import lama from '../../assets/LAMA..png';
import home from '../../assets/home.png';
import upload from '../../assets/Widget Configuration.png';
import downarrow from '../../assets/arrow_drop_down.png';
import EN from '../../assets/EN.png';
import flag from '../../assets/Ellipse 2.png';
import notify from '../../assets/notifications.png';
import { Link } from 'react-router-dom';
import './Configurationflow.css'

function Configurationflow() {
    return (
        <div className='main'>
            <div className='sidebar'>
                <div className='icon-image'>
                    <img className="logoimage" src={logo} alt="logo" />
                    <img className='logoname' src={lama} alt="logoname" />
                </div>
                <div className='cotainerbox'>
                    <div className='individual-box'>
                        <p>Prodcast uploads file</p>
                    </div>
                    <div className='container-value'>
                        <div className='values'>Projects</div>
                        <div className='values default-hover'  >Widget Configuration</div>
                        <div className='values'>Deployment</div>
                        <div className='values'>Pricing</div>
                    </div>
                </div>
            </div>
            <div className='rightside-container'>
                <div className='header'>
                    <div className='left'>
                        <img className="hut" src={home} alt="home" />
                        <img className='upload' src={upload} alt="upload" />
                    </div>
                    <div className='right'>
                        <img className="downarrow" src={downarrow} alt="down-arrow" />
                        <img className='EN' src={EN} alt="EN" />
                        <img className='flag' src={flag} alt="flag" />
                        <img className='notify' src={notify} alt="notify" />
                    </div>
                </div>
                <div className='title-widget'>Configuration</div>

                <div className='configuration-navbar'>
                    <div className='general-c default-hover-nav'>General</div>
                    {/* <div className='display-c'>Display</div> */}
                    <Link to="/Configdisplay" className="display-c">Display</Link>
                    <div className='Advanced-c'>Advanced</div>
                </div>
                <div className='form-container'>
                    <div className='form-detail-container'>
                        <p className='form-name'>ChatBox-Name</p>
                        <input  className="form-field"type="text"/>
                        <p className='highlight-text'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                    </div>
                    <div className='form-detail-container'>
                        <p className='form-name'>Welcome Message</p>
                        <input  className="form-field"type="text"/>
                        <p className='highlight-text'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                    </div>
                    <div className='form-detail-container'>
                        <p className='form-name'>Input Placeholder</p>
                        <input  className="form-field"type="text"/>
                        <p className='highlight-text'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configurationflow;