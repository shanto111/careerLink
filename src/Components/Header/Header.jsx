import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <h2>CareerLink</h2>
            <nav className='Navigation-part'>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/appliedJob'>AppliedJobs</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
            <button>StartAppLying</button>
        </div>
    );
};

export default Header;