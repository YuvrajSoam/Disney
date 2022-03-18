import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectDisney } from '../features/movie/movieSlice';
import { Link } from 'react-router-dom';
function NewDisney() {

    const newdisney = useSelector(selectDisney);

    return (
        <Container>
            New for you
            <Content>

                {
                    newdisney  &&
                    newdisney.map((movie) => {
                        return (
                            <Wrap key={movie.id}>
                                <Link to={`/detail/${movie.id}`}>
                                    <img src={movie.cardImg} alt='imagetitle' />
                                </Link>
                            </Wrap>
                        )
                    })}
            </Content>
        </Container>
    )
}

export default NewDisney;

const Container = styled.div`
font-size:1.5vw;
margin-left:30px;
`

const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns : repeat(5, minmax(0,1fr));
padding: 30px 0px 26px;

`

const Wrap = styled.div`
border-radius:10px;
overflow:hidden;
cursor:pointer;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
border: 3px solid rgba(249,249,249,0.1);
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
   object-fit:cover;
    width:100%;
    height:100%;
}

&:hover{
    transform:scale(1.05);
    border-color: rgba(249,249,249,0.8);
}

`