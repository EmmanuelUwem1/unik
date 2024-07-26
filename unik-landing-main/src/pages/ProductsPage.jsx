import React from "react";
import { ScrollRestoration } from "react-router-dom";
import {motion} from 'framer-motion';
import '../App.css'
import Header from "../Sections/Header";
import DiscountBanner from "../Components/DiscountBanner";
import ProductCard from "../Components/ProductCard";
import Footer from "../Sections/Footer";
import cardImage from '../assets/Rectangle 7.png'
function Start() {
  return (
    <>
      <Header />
      <DiscountBanner />
      <div className="product-cards-container product-background-gradient">
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />

        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />
      </div>
      <div className="ma-bottom-2x">{/*for margin space*/}</div>
      <div className="hr">{/*Horizontail Line*/}</div>
      <div className="ma-bottom-2x">{/*for margin space*/}</div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Start;
