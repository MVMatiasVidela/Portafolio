import React from "react";
import Title from "../Title/title";
import Tec from "../MadeWith/MadeWith";
import Technologies from "../Technologies/technologies";
import About from "../About/about";
import Return from "../Return/Return";

const HomeContainer = () => {
  return (
    <div>
    
      <div>
        <Title />
      </div>
      <div>
        <Technologies />
      </div>
    </div>
  );
};

export default HomeContainer;
