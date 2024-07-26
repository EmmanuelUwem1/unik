import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import DiscountBannerImg from "../assets/discount-banner-img.png";

function DiscountBanner() {
  return (
    <div className="radial-grad-circle">
      <motion.div
        initial={{ x: "-50%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={{ duration: 2 }}
        className="discount-banner padding-LR "
      >
        <div className="discount-banner-text">
          <div className="text-medium">get</div>
          <div className="text-xxlarge">Over 90% Off</div>
        </div>
        <img src={DiscountBannerImg} className="discount-banner-img" alt="" />
      </motion.div>
    </div>
  );
}

export default DiscountBanner;
