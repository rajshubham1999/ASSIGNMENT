
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import heading from '../../assets/heading.png';
import group from '../../assets/Group-image.png';
import buttonicon from '../../assets/buttonicon.png';
import './Home.css';
import HomeModal from './HomeModal';
import Modal from '../Modal/Modal';

function Home() {
  const [showEmailModal, setShowEmailModal] = useState(true);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [email, setEmail] = useState('');
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setShowEmailModal(true); // Open the email modal when the component mounts
  }, []);

  const handleCloseEmailModal = () => {
    setShowEmailModal(false);
  };

  const handleCloseProjectModal = () => {
    setShowProjectModal(false);
  };

  const handleEmailSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/api/add-email', { email });
      setShowEmailModal(false); // Close the email modal after submitting
    } catch (error) {
      console.error('Error adding email:', error);
    }
  };

  const handleCreateProject = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/projects/${email}`);
      const projects = response.data;
      if (projects.length === 0) {
        setShowProjectModal(true); // Show the modal if user has no projects
      } else {
        navigate('/Particularproject'); // Navigate to projects if user has projects
      }
    } catch (error) {
      console.error('Error checking projects:', error);
    }
  };

  const handleCreateProjectSubmit = async () => {
    console.log('Project Name:', projectName); // Add this line to check project name
    try {
      if (!projectName) {
        // Display an error message or handle the case where project name is empty
        return;
      }
      await axios.post('http://localhost:5000/api/add-projects', { email, name: projectName });
      setShowProjectModal(false);
      navigate('/Particularproject');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <div className='container'>
      <div className='maincontainer'>
        <div className='heading'>
          <img src={heading} alt="heading" />
        </div>
        <div className='group'>
          <img src={group} alt="group" />
        </div>
        <div className='paragraph'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className='button'>
          <button onClick={handleCreateProject} className='createproject'>
            <img className="buttonicon" src={buttonicon} alt="icon2" />Create New Project
          </button>
        </div>
      </div>
      {showEmailModal && (
        <HomeModal
          onClose={handleCloseEmailModal}
          onSubmit={handleEmailSubmit}
        >
          <div className="homemodal-content">
            <h2>Enter Email</h2>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
            />
            <button onClick={handleEmailSubmit}>Submit</button>
          </div>
        </HomeModal>
      )}
      <Modal
        showModal={showProjectModal}
        onClose={handleCloseProjectModal}
        onSubmit={handleCreateProjectSubmit}
      >
        <div className="homemodal-content">
          <h2>Create Project</h2>
          <p>Enter Project Name:</p>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Type Here"
          />
          <button onClick={handleCreateProjectSubmit}>Create</button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
