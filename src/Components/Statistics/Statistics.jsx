import React from 'react';
import images1 from '../../Images/Images2.avif';
import './Statistics.css'

const Statistics = () => {
    return (
        <div className='main-container'>
            <div className='info-container'>
                <h1>One Step Closer To Your <span className='color'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish</p>
                <button>Get started</button>
            </div>
            <div >
                <img className='banner' src={images1} alt="" />
            </div>
        </div>
    );
};

export default Statistics;