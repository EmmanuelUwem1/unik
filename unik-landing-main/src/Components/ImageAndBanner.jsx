import React from 'react'
import '../App.css'
import girlPainting from '../assets/painting-kid-s-portrait 1.png'
function ImageAndBanner() {
  return (
    <div className='flex ma-top gp-1 image-and-banner'>
      <img src={girlPainting} className="girl-painting" alt="" />
      <div className="banner">
        <div className="btext">Connect with like-minded adventurers from accross the realm!</div>
        <div className="wa">
          <span className="wa-icon"></span>
          <span className="wa-text">Check Out our Community Page</span>
        </div>
      </div>
    </div>
  )
}

export default ImageAndBanner