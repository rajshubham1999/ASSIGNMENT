import React, { useState } from 'react';
import './TwoValueSlider.css';

const TwoValueSlider = () => {
    const [selectedValue, setSelectedValue] = useState('ON');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="slider-container">
            <div className="slider">
                {['ON', 'OFF'].map(value => (
                    <label key={value} className={`slider-label ${selectedValue === value ? 'active' : ''}`}>
                        <input 
                            type="radio" 
                            name="slider" 
                            value={value} 
                            checked={selectedValue === value} 
                            onChange={handleChange} 
                        />
                    </label>
                ))}
                <div className="slider-track"></div>
                <div className="slider-fill" style={{ left: selectedValue === 'OFF' ? '50%' : '0' }}></div>
            </div>
        </div>
    );
};

export default TwoValueSlider;
