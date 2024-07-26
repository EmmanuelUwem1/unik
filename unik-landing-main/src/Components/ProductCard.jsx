import React from "react";
import { motion } from "framer-motion";
import courseIcon from "../assets/course-cap-vector.png";
import timeIcon from "../assets/time-vector.png";
import BarsIcon from "../assets/Mobile Signal.png";
import "../App.css";

function ProductCard(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "1rem" }}
      whileInView={{ opacity: 1, y: "0rem" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="product-card"
    >
      {/*Parent Container for contents of productcard */}
      <div className="card-img">
        <img src={props.image} alt="" />
      </div>
      <div className="card-title">
        <span className="title">{props.cardTitle}</span>
        <span className="title-detail">{props.titleDetail}</span>
      </div>
      <div className="detail-flex">
        <span className="course text-light-small flex">
          <img src={courseIcon} className="icon-small" alt="" />
          {props.courseTitle}
        </span>
        <span className="level">
          <img className="icon-smaller" src={BarsIcon} alt="" />
          <span className="text-light-small">{props.level}</span>
        </span>
        <span className="time flex">
          <img src={timeIcon} className="icon-small" alt="" />
          <span className="text-light-small">{props.duration}</span>
        </span>
      </div>
      <div className="person">
        <span className="profile-pic">
          <img src={props.profilePic} alt="" />
        </span>
        <span className="name text-light-small">{props.name}</span>
      </div>
      <div className="prices">
        <span className="price">{"NGN" + props.price}</span>
        <span className="slashed">{"NGN" + props.priceSlashed}</span>
      </div>
    </motion.div>
  );
}

export default ProductCard;
