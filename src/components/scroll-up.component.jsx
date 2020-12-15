import React, { Fragment, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const ScrollUpButton = () => {
  const [ScrollUpButton, setScrollUpButton] = useState(false);

  const ScrollButton = () => {
    if (window.scrollY >= 500) {
      setScrollUpButton(true);
    } else {
      setScrollUpButton(false);
    }
  };
  window.addEventListener("scroll", ScrollButton);
  return (
    <Fragment>
      <div className={ScrollUpButton ? "scroll-btn active" : "scroll-btn"}>
        <FaArrowUp />
      </div>
    </Fragment>
  );
};
