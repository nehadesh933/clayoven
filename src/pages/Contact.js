import React from 'react'
import PizzaLeft from '../assets/aboutus.jpg';
import '../styles/Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" 
      style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>Your Feedback Matters</h1>
        <form id="contact-form" method="POST">
            <label htmlFor="name">Your Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">E-mail</label>
            <input name="email" placeholder="Enter mail..." type="email" />
            <label htmlFor="message">Your Feedback</label>
            <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
            <button>Submit</button>
        </form>
      </div>
    </div>
  )
}