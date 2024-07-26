import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import ReviewCard from '../Components/ReviewCard'
function SectionEnd() {
  return (
    <section className="section-end">
        <div className="flex end-heading">
            Don't just take it from us!
        </div>
        <div className="flex font-normal ma-bottom pa-LR">
            Here's what developers from around the realm are saying.
        </div>
        <div className="review-cont ma-bottom-2x">
            <ReviewCard review={'"Super fun course from @gramtabitt and @GameDevTV will definitely be trying to make similar characters on my own in the future, but it was really great to go from absolutely nothing to apossible anime character"'} reviewer={'@iamshadow'}/>
            <ReviewCard review={'"Super fun course from @gramtabitt and @GameDevTV will definitely be trying to make similar characters on my own in the future, but it was really great to go from absolutely nothing to apossible anime character"'} reviewer={'@iamshadow'}/>
            <ReviewCard review={'"Super fun course from @gramtabitt and @GameDevTV will definitely be trying to make similar characters on my own in the future, but it was really great to go from absolutely nothing to apossible anime character"'} reviewer={'@iamshadow'}/>
        </div>
        <div className="flex end-heading">
            Be The Player, Not The NPC
        </div>
        <div className="flex font-normal ma-bottom">
            Your Story, Your Rules, Your Adventure.
        </div>
        <div className="flex">
            <Link  className="btn-large-fit">
                Start Here
            </Link>
        </div>
        <div className="ma-bottom-2x">{/*for margin space*/}</div>
    </section>
  )
}

export default SectionEnd