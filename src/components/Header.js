import React from 'react'
import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';


export default function Header() {
  return (
    <Nav>
      <Logo src={require('../images/disney.jpg')} />
      <NavMenu>
        <a>
          <HomeIcon style={{ color: 'white' }} />
          <span >HOME</span>
        </a>
        <a>
          <SearchIcon style={{ color: 'white' }} />
          <span >SEARCH</span>
        </a>
        <a>
          <AddIcon style={{ color: 'white' }} />
          <span >WATCHLIST</span>
        </a>
        <a>
          <StarIcon style={{ color: 'white' }} />
          <span >ORIGINALS</span>
        </a>
        <a>
          <MovieIcon style={{ color: 'white' }} />
          <span >MOVIES</span>
        </a>
        <a>
          <LiveTvIcon style={{ color: 'white' }} />
          <span >SERIES</span>
        </a>

      </NavMenu>
    </Nav>
  )
}

const Nav = styled.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding: 0 36px;
`;


const Logo = styled.img`
width:80px;
height:70px;

`

const NavMenu = styled.div`
display:flex;
flex:1;
justify-content: space-around ;

a{
  display:flex;
  align-items:center;
  padding: 0 12px;
  cursor:pointer;


span{
  font-size : 13px;
  letter-spacing : 1.3px;
  position : relative;
  
&:after {
  content: "";
  height:2px;
  position : absolute;
  background:white;
  left:0;
  right:0;
  bottom:-6px;
  opacity:0;
  transform-origin: left center;
  transition: all 250ms cubic-bezier(0.25, 0.46 , 0.45 , 0.94) 0s;
  transform: scaleX(0);
  
}

}

&:hover{
  span:after{
    transform:scaleX(1);
    opacity:1;
    }
  }
}

`

