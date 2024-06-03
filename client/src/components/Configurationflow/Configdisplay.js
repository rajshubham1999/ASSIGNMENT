import React from 'react'
import logo from '../../assets/logo.png';
import lama from '../../assets/LAMA..png';
import home from '../../assets/home.png';
import upload from '../../assets/Widget Configuration.png';
import downarrow from '../../assets/arrow_drop_down.png';
import EN from '../../assets/EN.png';
import flag from '../../assets/Ellipse 2.png';
import notify from '../../assets/notifications.png';
import './Configdisplay.css'
import TwoValueSlider from '../slider/TwoValueSlider';
import uploadicon from '../../assets/upload-icon.png'
import { Link } from 'react-router-dom';

function Configdisplay() {
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
                        <div className='values default-hover' >Widget Configuration</div>
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
                    <Link to="/Configurationflow" className='general-c '>General</Link>
                    <div className='display-c default-hover-nav'>Display</div>
                    <div className='Advanced-c'>Advanced</div>
                </div>
                <div className='display-detail-form'>
                    <div className='first-form-row'>
                        <div className='primary-color'>
                            <p className='primary-color-text'>Primary Color</p>
                            <div className='color-details'>
                                <input className="tell-primary-color" type="text" defaultValue="#7BD568"/>
                                <div className='show-color'></div>
                            </div>

                        </div>
                        <div className='font-color'>
                            <p className='font-color-text'>Font Color</p>
                            <div className='font-color-details'>
                                <input className="tell-font-color" type="text" defaultValue="#3C3C3C" />
                                <div className='show-font-color'></div>
                            </div>
                        </div>
                    </div>
                    <div className='second-form-row'>
                        <div className='font-size'>
                            <p className='font-size-text'>Font Size (in px)</p>
                            <div className='color-details'>
                                <input className="tell-font-size" type="text" defaultValue="25" />

                            </div>

                        </div>
                        <div className='chat-height'>
                            <p className='chat-height-text'>Chat Height (in % of total screen)</p>
                            <div className='font-color-details'>
                                <input className="tell-chat-height" type="text" defaultValue="Lorem ipsuim"/>

                            </div>
                        </div>
                    </div>
                    <div className='third-row'>
                        <div className='left-t'>
                            <p className='show'>Show Sources</p>
                            <p className='lightshow'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</p>
                        </div>
                        <div className='right-t'>
                            <div className='slider-radio'><TwoValueSlider/></div>
                            

                        </div>
                        

                    </div>
                    <div className='line'></div>
                    <p className='chat-icon'>Chat icon</p>

                    <div className='fourth-form-row'>
                        <div className='font-size'>
                            <p className='font-size-text'>Chat Icon Size</p>
                            <div className='color-details'>
                                <input className="tell-font-size" type="text" />

                            </div>

                        </div>
                        <div className='chat-height'>
                            <p className='chat-height-text'>Position on Screen</p>
                            <div className='font-color-details'>
                                <input className="tell-chat-height" type="text" />

                            </div>
                        </div>
                    </div>
                    <div className='second-form-row'>
                        <div className='font-size'>
                            <p className='distance-size'>Distance from Bottom (in px)</p>
                            <div className='color-details'>
                                <input className="tell-font-size" type="text" />

                            </div>

                        </div>
                        <div className='chat-height'>
                            <p className='chat-height-text'>Horizontal Distance (in px)</p>
                            <div className='font-color-details'>
                                <input className="tell-chat-height" type="text" />

                            </div>
                        </div>
                    </div>


                    <div className='bot'>
                        <div className='ellipse'></div>
                        <button className='upload-image'>Upload Image<img src={uploadicon}/></button>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}



export default Configdisplay;
