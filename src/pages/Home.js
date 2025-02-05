import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/1.jpg';
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Clay Oven</h1>
        <p>Fuel Your Soul with Plant-Based Pizza</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}
