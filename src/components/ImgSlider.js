import React from "react";
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bandagingimage from '../images/slider-badging.jpg'
import bandageimage from '../images/slider-badag.jpg'


export default function ImgSlider() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <>
      <Carousal {...settings}>
        <Wrap>
          <img src={bandagingimage} alt="" />
        </Wrap>
        <Wrap>
          <img src={bandageimage} alt="" />
        </Wrap>

      </Carousal>
    </>

  );
}

const Carousal = styled(Slider)`
width:80%;

ul li button{
  &:before{
    font-size:10px;
    color:white;
  }
}

li.slick-active button:before{
  color: white;
}

button{
  z-index:1;
}

padding-top:20px;
margin:auto;
.slick-list{
  overflow:visible;
}

div{
  overflow:visible;
  margin: auto;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
}
  `

const Wrap = styled.div`
cursor:pointer;

overflow:visible;

  img{
    

  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  width:100%;
  height:100%;
  border-radius:4px;
  border: 4px solid transparent;
  transition:300ms;

  &:hover{
    border: 4px solid rgba(249 ,249 ,249 , 0.8);
  }

}

`
