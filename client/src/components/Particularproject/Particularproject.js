// import React from 'react'
// import { useEffect } from 'react'
// import './Particularproject.css'
// import logo from '../../assets/logo.png'
// import lama from '../../assets/LAMA..png'
// import home from '../../assets/home.png'
// import upload from '../../assets/Upload.png'
// import downarrow from '../../assets/arrow_drop_down.png'
// import EN from '../../assets/EN.png'
// import flag from '../../assets/Ellipse 2.png'
// import notify from '../../assets/notifications.png'
// import youtube from '../../assets/Youtube.png'
// import media2 from '../../assets/media2.png'
// import media3 from '../../assets/media3.png'
// import uploader from '../../assets/cloud_upload.png'
// function Particularproject() {
//     useEffect(() => {
//         const projectElement = document.querySelector('.values:first-child');
//         if (projectElement) {
//             projectElement.classList.add('default-hover');
//         }
//     }, []);
//     return (

//         <div className='main'>
//             <div className='sidebar'>
//                 <div className='icon-image'>
//                     <img className="logoimage" src={logo} alt="logo" />
//                     <img className='logoname' src={lama} alt="logoname" />
//                 </div>
//                 <div className='cotainerbox'>
//                     <div className='individual-box'>
//                     <p>Prodcast uploads file</p>
//                     </div>

//                     <div className='container-value'>
//                         <div className='values'>Projects</div>
//                         <div className='values'>Widget Configuration</div>
//                         <div className='values'>Deployment</div>
//                         <div className='values'>Pricing</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='rightside-container'>
//                 <div className='header'>
//                     <div className='left'>
//                         <img  className="hut" src={home}  alt="home"/>
//                         <img className='upload' src={upload} alt="upload"/>
//                     </div>
//                     <div className='right'>
//                         <img  className="downarrow" src={downarrow} alt="down-arrow"/>
//                         <img className='EN' src={EN} alt="EN"/>
//                         <img className='flag' src={flag} alt="flag"/>
//                         <img className='notify' src={notify} alt="notify"/>

//                     </div>
//                 </div>
//                 <div className='title'>Upload</div>
//                 <div className='media-box'>
//                     <div className='boxes'>
//                         <img className='mediaimage' src={youtube} alt="media"/>
//                         <p className='medianame'>Upload Youtube Video</p>
//                     </div>
//                     <div className='boxes'>
//                         <img className='mediaimage' src={media2} alt="media"/>
//                         <p className='medianame'>Upload Spotify Podcast</p>
//                     </div>
//                     <div className='boxes'>
//                         <img className='mediaimage' src={media3} alt="media"/>
//                         <p className='medianame'>Upload from RSS Feed</p>
//                     </div>
//                     <div className='boxes'>
//                         <img className='mediaimage' src={youtube} alt="media"/>
//                         <p className='medianame'>Upload Youtube Video</p>
//                     </div>
//                     <div className='boxes'>
//                         <img className='mediaimage' src={media2} alt="media"/>
//                         <p className='medianame'>Upload Spotify Podcast</p>
//                     </div>
//                     <div className='boxes'>
//                         <img className='mediaimage' src={media3} alt="media"/>
//                         <p className='medianame'>Upload from RSS Feed</p>
//                     </div>


//                 </div>
//                 <div className='or'><p>Or</p></div>
//                 <div className='filesupload-container'>
//                     <img className='uploadimage' src={uploader} alt="uploader"/>
//                     <div className='text'>
//                     <p className='first'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
//                     <p className='second'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
//                     </div>
//                     <button className='selectbutton'>Select File</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Particularproject


import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Particularproject.css';
import logo from '../../assets/logo.png';
import lama from '../../assets/LAMA..png';
import home from '../../assets/home.png';
import upload from '../../assets/Upload.png';
import downarrow from '../../assets/arrow_drop_down.png';
import EN from '../../assets/EN.png';
import flag from '../../assets/Ellipse 2.png';
import notify from '../../assets/notifications.png';
import youtube from '../../assets/Youtube.png';
import media2 from '../../assets/media2.png';
import media3 from '../../assets/media3.png';
import uploader from '../../assets/cloud_upload.png';

function Particularproject() {
    const navigate = useNavigate();
    
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedMedia, setSelectedMedia] = useState(null);
    const [mediaName, setMediaName] = useState('');
    const [mediaLink, setMediaLink] = useState('');

    
    

    const openModal = (media) => {
        setSelectedMedia(media);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedMedia(null);
        setMediaName('');
        setMediaLink('');
    };

    const handleUpload = () => {
        const currentDate = new Date();
        const dateTimeString = currentDate.toISOString();
        localStorage.setItem('mediaName', mediaName);
        localStorage.setItem('mediaLink', mediaLink);
        localStorage.setItem('uploadDateTime', dateTimeString);
        navigate('/SampleProject');
    };

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
                        {/* <div className='values' >Widget Configuration</div> */}
                        <Link to="/Configurationflow" className='values'>Widget Configuration</Link>
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
                <div className='title'>Upload</div>
                <div className='media-box'>
                    <div className='boxes' onClick={() => openModal({ image: youtube, name: 'Upload Youtube Video' })}>
                        <img className='mediaimage' src={youtube} alt="media" />
                        <p className='medianame'>Upload Youtube Video</p>
                    </div>
                    <div className='boxes' onClick={() => openModal({ image: media2, name: 'Upload Spotify Podcast' })}>
                        <img className='mediaimage' src={media2} alt="media" />
                        <p className='medianame'>Upload Spotify Podcast</p>
                    </div>
                    <div className='boxes' onClick={() => openModal({ image: media3, name: 'Upload from RSS Feed' })}>
                        <img className='mediaimage' src={media3} alt="media" />
                        <p className='medianame'>Upload from RSS Feed</p>
                    </div>
                    <div className='boxes' onClick={() => openModal({ image: youtube, name: 'Upload Youtube Video' })}>
                        <img className='mediaimage' src={youtube} alt="media" />
                        <p className='medianame'>Upload Youtube Video</p>
                    </div>
                    <div className='boxes' onClick={() => openModal({ image: media2, name: 'Upload Spotify Podcast' })}>
                        <img className='mediaimage' src={media2} alt="media" />
                        <p className='medianame'>Upload Spotify Podcast</p>
                    </div>
                    <div className='boxes' onClick={() => openModal({ image: media3, name: 'Upload from RSS Feed' })}>
                        <img className='mediaimage' src={media3} alt="media" />
                        <p className='medianame'>Upload from RSS Feed</p>
                    </div>
                </div>
                <div className='or'><p>Or</p></div>
                <div className='filesupload-container'>
                    <img className='uploadimage' src={uploader} alt="uploader" />
                    <div className='text'>
                        <p className='first'>Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
                        <p className='second'>MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
                    </div>
                    <button className='selectbutton'>Select File</button>
                </div>
            </div>
            {modalOpen && selectedMedia && (
                <div className='modal-backdrop' onClick={closeModal}>
                    <div className='modal' onClick={(e) => e.stopPropagation()}>
                        <button className='close-button' onClick={closeModal}>X</button>
                        <h2>{selectedMedia.name}</h2>
                        <img src={selectedMedia.image} alt="media" className='modal-image' />
                        <input type='text' placeholder='Name' className='modal-input' value={mediaName} onChange={(e) => setMediaName(e.target.value)} />
                        <input type='text' placeholder='Link' className='modal-input' value={mediaLink} onChange={(e) => setMediaLink(e.target.value)}  />
                        <button className='upload-button' onClick={handleUpload}>Upload</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Particularproject;

