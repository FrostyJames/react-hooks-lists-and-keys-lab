import React from "react";

function NavBar() {
  const links = [
    {name:"home", id:1},
    { name:"about", id:2},
    {name:"projects",id:3}
  ];

  return(
   <nav>
    <a href="#home">home</a>
    <a href="#about" >about</a>
    <a href="#projects">projects</a>
   </nav>
  )
}

export default NavBar;
