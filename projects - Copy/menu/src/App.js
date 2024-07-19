import React from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import AboutSection from './AboutSection';
import loImage from './image/lo.png';
import hiImage from './image/hi.avif';
import Bs from './Pages/Bs';
import Ab from './Pages/Ab';
import St from './Pages/St';
import StandardImageList from './Pages/StandardImageList';
import SliderComponent from './Pages/SliderComponent';
import Round from './Pages/Round';
import ImageSlider from './Pages/ImageSlider';

import BlogCards from './Pages/BlogCards';
import VideoPlayer from './Pages/VideoPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Reviews } from '@mui/icons-material';
import ReviewBox from './Pages/ReviewBox;';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        {/* Header Section */}
     
          <ul className="menu">
            <li className='im' style={{ display: 'flex', alignItems: 'center', color: "#3A5FCD" }}>
              <img src={loImage} alt='logo' style={{ height: "90px", marginRight: "20px", margin: "0px", padding: "0px" }} />
            </li>
            <li>
              <h2 style={{ margin: "0px", padding: "0px", marginRight: "300px", color: "darkblue" }}>LifeScience</h2>
            </li>
            <li>
              <Link to="/" style={{textDecoration:"none"}}>About</Link>
            </li>
            <li>
              <Link to="/genetic-panel">Genetic Panel</Link>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            <li>
              <Link to="/membership">Membership</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/search">
                <SearchIcon />
              </Link>
            </li>
            <li>
              <Link to="/CampaignIcon">
                <CampaignIcon />
              </Link>
            </li>
          </ul>
       

        {/* Hero Image Section */}
        <div className="hero">
          <img src={hiImage} alt="hero" />
          <div className="hero-content">
            <p>
              We <span style={{ color: "gold", fontWeight: "bolder" }}>empower</span> you to <span style={{ color: "gold" }}>live</span> your <span style={{ color: "gold" }}>best</span> life
            </p>
            <div className="hero-logo">
              <img src={loImage} alt="logo" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main>
          <AboutSection />
          <Bs />
          <hr />
          <div style={{ marginTop: "90px" }}><Ab /></div>
          <div><St /></div>
          <div><StandardImageList /></div>
          <div style={{ marginTop: "50px" }}><SliderComponent /></div>
          <div style={{ marginTop: "100px" }}><Round /></div>
          <div style={{ marginTop: "100px" }}><ImageSlider /></div>
          <div style={{ marginTop: "100px" }}><ReviewBox /></div>
          <div style={{ marginTop: "100px" }}><BlogCards /></div>
          <div style={{ marginTop: "100px" }}><VideoPlayer /></div>
        </main>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-logo">
              <img src={loImage} alt="Lifescience" />
              <p style={{marginBottom:'50px'}}>Lifescience</p>
            </div>
            <div className="footer-info">
              <p>Lifescience Technologies Private Limited</p>
              <p>Clinic: No.1s, 2nd Floor, Gopalapuram 1st St, Gopalapuram, Chennai, 600086.</p>
            </div>
            <div className="footer-contact">
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <p>support@lifescience.com</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} size="lg" />
                <p>+91 99899 98989</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faGlobe} size="lg" />
                <p>www.lifescience.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
