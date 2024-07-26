import React from 'react'
import '../App.css'
function ReviewCard(props) {
  return (
    <div className="review-card">
        <img src="" alt="" />
        <span className="review">{props.review}</span>
        <span className="reviewer">{props.reviewer}</span>
    </div>
  )
}

export default ReviewCard