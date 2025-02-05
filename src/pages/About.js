import React from 'react'
import AboutUs from '../assets/2.jpg'
import '../styles/About.css'

export default function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${AboutUs})` }}>
      </div>
      <div className="aboutBottom">
      <h1>Our Journey</h1>
        <p>
            At Clay Oven, we’re more than just a pizza place; we’re a movement. 
            Passionate about sustainability and bold flavors, we craft mouth-watering, 
            plant-based pizzas that nourish both the body and the planet. Our mission is to 
            redefine pizza by offering vegan options that don’t compromise on taste or quality. 
            Using only the freshest, locally-sourced ingredients, each pizza is lovingly crafted 
            in our clay oven, infusing a unique smoky flavor with every bite. Whether you're a vegan,
             a health-conscious eater, or just craving something new, Clay Oven unites people through 
             delicious, cruelty-free pizzas that support ethical farming and a healthier planet. Join 
             us in making the world better, one slice at a time.
        </p>
      </div>
    </div>
  )
}