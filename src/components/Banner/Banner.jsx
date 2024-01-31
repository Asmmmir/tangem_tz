import React, { useEffect, useState } from "react";
import "./banner.css";
import images from "../../constants/images";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isBannerHidden = localStorage.getItem("isBannerHidden");
    if (isBannerHidden === "true") {
      setIsVisible(false);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (!isVisible && scrollY > 100) {
        setIsVisible(true);
      } else if (isVisible && scrollY <= 100) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const handleCloseClick = () => {
    setIsVisible(false);
    localStorage.setItem("isBannerHidden", "true");
  };

  return (
    <>
      {isVisible && (
        <div className="banner__wrapper">
          <div className={`banner ${isVisible && "show"}`}>
            <div className="banner__text">
              <div className="banner__close" onClick={handleCloseClick}>
                <img src={images.close} alt="Close" />
              </div>
              <h1>Black Friday</h1>
              <h1 className="banner__text--highlight">10%OFF</h1>
              <p className="banner__p">
                Use code <span className="banner__p--highlight">10FRIDAY</span>{" "}
                at checkout
              </p>
              <div className="banner__btn">
                <button>Shop now through Monday</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
