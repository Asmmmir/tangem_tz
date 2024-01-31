import React, { useEffect, useState } from "react";
import "./header.css";
import images from "../../constants/index";

const Header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__img">
          <img src={images.images.header_img} alt="" />
        </div>

        <div className="header__text">
          <p className="header__p">
            Black Friday <span className="header__text--hide">, 24-27 Nov</span>
          </p>
          <p className="header__p--highlight">10%OFF</p>
          <p className="header__p header__p--hide">
            Use code <span className="header__p--highlight">10FRIDAY</span>{" "}
            <span className="header__text--hide">at checkout</span>
          </p>
        </div>
        <div className="header__menu-icon header__menu-icon--show">
          <img src={images.images.menuIcon} alt="" />
        </div>

        <div className="header__btn header__btn--hide">
          <button>Shop now</button>

          <div className="header__close-btn header__close-btn--hide">
            <img src={images.images.close} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
