import React, { useEffect } from 'react'
import styled from "styled-components";
import { auth, provider } from "../firebase"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LogoImage from '../images/logo.svg';
import { Link } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOut, setUserLogin } from '../features/user/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Header() {
  const history = useHistory();

  const userPhoto = useSelector(selectUserPhoto);

  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {

        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL

        }))
        history.push('/');


      }
    })
  })


  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL

      }))
      history.push("/");
    })

  }

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");

    })


  }
  return (

    <Nav>
      <StyledLink to="/">
      <Logo src={LogoImage} />
      </StyledLink>
      {!userName ? (
        <LoginContainer>
          <Login onClick={signIn}>Login</Login>


        </LoginContainer>
      ) :
        <>
          <NavMenu>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <HomeIcon style={{ color: 'white' }} />
              <span >HOME</span>
            </Link>
            <StyledLink to="/detail">
              <SearchIcon style={{ color: 'white' }} />
              <span >SEARCH</span>
            </StyledLink>
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
          <UserImg src={`${userPhoto}`} onClick={signOut} />

        </>

      }

    </Nav>
  )
}

const Nav = styled.div`
height:70px;
background:#090b13;
display:flex;
align-items:center;
padding: 0 36px;
overflow:hidden;
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
  text-decoration:none;


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

const Login = styled.div`
border: 1px solid #f9f9f9;
padding:8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
background-color:rgba(0,0,0,0.6);
text-transform:uppercase;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
cursor:pointer;

&:hover{
  color:#000;
  background-color:#f9f9f9;
  border-color:transparent;


}

`

const LoginContainer = styled.div`
flex:1;
display:flex;
justify-content:flex-end;

`


const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`


const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;