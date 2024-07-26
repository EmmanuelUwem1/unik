import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import mainImg from '../assets/mainBG.png'
import heroImg from '../assets/woman-face.png'
import ArrowGif from '../assets/ArrowGif.gif'



function SectionMain() {
  return (
    <section className="Main">
        <img src={mainImg} alt="" className="main-img" />

        <div className="hero-text">
            <p className="font-large">Get Good at</p>
            <p className="font-xlarge gradient">Generative AI</p>
            <p className="font-normal">Join 2,000,000+ students in over 150 countries and start learning how to make your own games today</p>

            
            <div className="flex-left">
                <img src={ArrowGif} alt="" className="arrow-gif" />
            </div>
            <div className="flex-left">
                <Link to='/products' className="btn-large active">Start Here</Link>
            </div>
            

        </div>

        <div className="hero-img">
            <img src={heroImg} alt="hero" />
        </div>
    </section>
  )
}

export default SectionMain