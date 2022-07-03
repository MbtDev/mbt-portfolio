import { Link } from 'gatsby'
import gsap from 'gsap';
import React, {  } from 'react'

export default function NavLink({ link, position }) {



  var displaylink = "";

  if (link === "home") {
    link = "";
    displaylink = "home";
  } else {
    displaylink = link;
  }

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#FD7D5E", scale: 1.1 });
    gsap.to("section", { opacity: 0.5 });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#f5a65b", scale: 1 });
    gsap.to("section", { opacity: 1 });
  };


  return (
    <Link
      className={'navlink ' + position} to={"/" + link} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {displaylink.toUpperCase()}
    </Link>
  )
}
