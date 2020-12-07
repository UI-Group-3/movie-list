import React from "react";
import icon from "../assets/images/TMDB-icon.svg";
import { TMDBIcon } from "../style/header";
import { useSelector } from "react-redux";
import { selectHeader } from "../redux/selectors";

function Icon() {
  const bIsDesktop = useSelector(selectHeader);

  return (
    <TMDBIcon
      src={icon}
      alt="TMDB Icon"
      className={bIsDesktop ? "top" : "side"}
    />
  );
}

export default Icon;
