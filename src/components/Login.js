import React from 'react'
import styled from 'styled-components'
import backgroundImage from '../images/login-background.jpg'
import CTAImage1 from '../images/cta-logo-one.svg'
import CTAImage2 from '../images/cta-logo-two.png'
function Login() {
  return (
    <Container>

      <CTA>
        <CTALogoOne src={CTAImage1} />
        <SignUp>GET ALL HERE </SignUp>
        <Description>
          Get DISNEY PLUS PREMIUM FOR FREE HERE RIGHT NOW
        </Description>
        <CTALogoTwo src={CTAImage2} />

      </CTA>


    </Container>
  )
}

export default Login

const Container = styled.div`
position:relative;
height:calc(100vh - 70px);
display : flex;
justify-content:center;
align-items:top;

&:before{
    background-position:top;
    background-image:  url(${backgroundImage}) ;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    content:"";
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity:0.7;
    z-index: -1;
  
  }

  `

const CTA = styled.div`
  max-width:650px;
  margin-top:100px;
  padding:80px 40px;
  width:90%;
  display:flex;
  flex-direction:column;
  align-items:center;

  
  `

const CTALogoOne = styled.img`
  `

const SignUp = styled.a`
  width:100%;
  background-color:#0063e5;
  padding:17px 0;
  color:#f9f9f9;
  border-radius:4px;
  text-align:center;
  text-transform:uppercase;
  font-size:18px;
  cursor:pointer;
  letter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px;

  &:hover{
      background:#0483ee;
  }
  
  `

const Description = styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5px;

`

const CTALogoTwo = styled.img`
width:98%;
`