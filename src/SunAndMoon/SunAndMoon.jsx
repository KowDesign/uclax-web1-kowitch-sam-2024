import styled from "styled-components";
import { useState } from "react";
import sunImage from "./images/sun.png"
import moonImg from "./images/moon.png"
const SunAndMoon = () => {

    const [imgSrc, imgSrcUpdate]] = useState (moonImg);

    const changeToSun = () => {
        imgSrcUpdate(sunImage);
    } ;
    const changeToMoon = () => {
        imgSrcUpdate(MoonImage);
    };
    //HTML Layer
    return <SunAndMoonStyled>
    <h2>Sun And Moon<h2>
        <img
         src={imgSrc}
         onMouseEnter={changeToSun}
         onMouseLeave={changeToMoon} />
    </SunAndMoonStyled>;
    <div>Sun And Moon</div>;
};

export default SunAndMoon;


// CSS Layer
const SunAndMoonStyled =styled.div`
text-align; center;

h2 {
    font0size: 30px;
    color: teal;
}

img {
    display: block;
    margin: 30px auto;
    padding: 20px;
    border: solid 20px teal;
    background-color:#004e4e;
}
`;
</div>