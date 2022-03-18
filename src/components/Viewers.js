import React from 'react'
import styled from 'styled-components'
import disneyImage from '../images/viewers-disney.png'
import pixarImage from '../images/viewers-pixar.png'
import marvelImage from '../images/viewers-marvel.png'
import starImage from '../images/viewers-starwars.png'
import nationalImage from '../images/viewers-national.png'
import { selectrecommend } from '../features/movie/movieSlice'
import { useSelector } from 'react-redux'
export default function Viewers() {


    const originals = useSelector(selectrecommend);
    console.log(originals);
    return (
        <Container>

            <Wrap>
                <img src={disneyImage} alt="" />
            </Wrap>
            <Wrap>
                <img src={pixarImage} alt="" />
            </Wrap>
            <Wrap>
                <img src={marvelImage} alt="" />
            </Wrap>
            <Wrap>
                <img src={starImage} alt="" />
            </Wrap>
            <Wrap>
                <img src={nationalImage} alt="" />
            </Wrap>

        </Container>
    )
}


const Container = styled.div`
margin-top: 30px;
display:grid;
grid-gap:25px;
grid-template-columns: repeat(5 , minmax(0, 1fr));
padding: 30px 0px 26px;

`
const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
border: 3px solid rgba(249,249,249,0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{

    width:100%;
    height:100%;
    object-fit:cover;

}


&:hover{
    transform:scale(1.05);
    border-color: rgba(249,249,249,0.8);
}


`
