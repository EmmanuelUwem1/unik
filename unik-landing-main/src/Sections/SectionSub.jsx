import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import OptionsBar from '../Components/OptionsBar'
import ProductCard from '../Components/ProductCard'
import cardImage from '../assets/Rectangle 7.png'
 
 <assets />

function SectionSub() {
  return (
    <>
    <section className="section-sub">
        <OptionsBar />
        <div className="product-cards-container">

        <ProductCard image={cardImage} cardTitle={"Generative AI In Fashion:"} titleDetail={"Scaling Up as an expert designer"} courseTitle={"Course"} level={"Beginner"} duration={"2hrs"} profilePic="" name={"Joseph Umoren"} price={30000} priceSlashed={50000} />

        <ProductCard image={cardImage} cardTitle={"Generative AI In Fashion:"} titleDetail={"Scaling Up as an expert designer"} courseTitle={"Course"} level={"Beginner"} duration={"2hrs"} profilePic="" name={"Joseph Umoren"} price={30000} priceSlashed={50000} />

        <ProductCard image={cardImage} cardTitle={"Generative AI In Fashion:"} titleDetail={"Scaling Up as an expert designer"} courseTitle={"Course"} level={"Beginner"} duration={"2hrs"} profilePic="" name={"Joseph Umoren"} price={30000} priceSlashed={50000} />

        <ProductCard image={cardImage} cardTitle={"Generative AI In Fashion:"} titleDetail={"Scaling Up as an expert designer"} courseTitle={"Course"} level={"Beginner"} duration={"2hrs"} profilePic="" name={"Joseph Umoren"} price={30000} priceSlashed={50000} />
        </div>


    </section>
    <div className="line-grad"></div>



    {/* third section */}

    <div className="section-heading">
    Empowering Over <span className="text-grad">200 Creative Minds</span> with Generative AI Brilliance
    </div>



    <div className="flex">
        <Link to='/products' className='btn-large-fit active'>View Courses</Link>
    </div>

    </>
  )
}

export default SectionSub