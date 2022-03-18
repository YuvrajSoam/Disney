import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import GroupsIcon from '@mui/icons-material/Groups';
import { useParams } from 'react-router-dom';
import ModalVideo from 'react-modal-video'
import db from '../firebase';
import 'react-modal-video/scss/modal-video.scss';

function Detail() {

    const { id } = useParams();
    const [detaildata, setDetailData] = useState();
    const [isOpen, setOpen] = useState(false)



    useEffect(() => {

        db.collection("movies").doc(id).get().then((doc) => {
            if (doc.exists) {
                setDetailData(doc.data());

            }
            else {
                console.log("No such document in firebase ")
            }
        }).catch((error) => {
            console.log(error);
        })


    }, [id])






    return (
        <Container>
            {detaildata && (
                <>
                    <Background>
                        <img src={detaildata.backgroundImg} alt="" />
                    </Background>

                    <ImageTitle>
                        <img src={detaildata.titleImg} alt="" />
                    </ImageTitle>


                    <Controls>
                        <PlayButton>
                            <PlayArrowIcon />
                            <span>PLAY</span>

                        </PlayButton>
                        <TrailerButton onClick={() => setOpen(true)}>
                            <span>TRAILER</span>

                        </TrailerButton>

                        <AddButton>
                            <span>+</span>

                        </AddButton>
                        <GroupButton>
                            <GroupsIcon />
                        </GroupButton>

                    </Controls>

                    <SubTitle>

                        {detaildata.subTitle}

                    </SubTitle>


                    <Description>
                        {detaildata.description}
                    </Description>
                    <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={detaildata.trailer} onClose={() => setOpen(false)} style={{ position: 'absolute', background: 'red', height: '100px', width: '100px', marginLeft: '1000px' }} />

                </>

            )}

        </Container>
    )
}

export default Detail;

const Container = styled.div`
min-height: calc(100vh-70px);
padding: 0 calc(3.5vh +5px);
position:relative;
`

const Background = styled.div`
position:fixed;
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;

img{
 width:100%;
 height:100%;
 object-fit:cover;
 z-index: -1;
}
`

const ImageTitle = styled.div`
height : 30vh;
min-height:170px;
min-width:170px;
width:35px;
margin-top:60px;
margin-left:20px;


img {
    width:100%;
    height:100%;
    object-fit:contain;
}

`

const Controls = styled.div`
display:flex;
flex:1;
justify-content: space-around ;
align-items:center;
margin-left:20px;
width:25%;

`
const PlayButton = styled.button`

border-radius:4px;
padding:0px 24px;
font-size:15px;
border:none;
display:flex;
align-items:center;
height:56px;
letter-spacing:1.8px;
cursor:pointer;
text-transform:uppercase;


&:hover{
    background:rgb(198, 198, 198)

}

`
const TrailerButton = styled(PlayButton)`
background:rgba(0,0,0,0.3);
border: 1px solid rgb(249,249,249);
color:rgb(249,249,249);


`
const AddButton = styled.button`
width:44px;
height:44px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
border: 2px solid white;
background:rgba(0,0,0, 0.3);

span{
    font-size:30px;
    color:white;
}

`
const GroupButton = styled(AddButton)`
background:black;
color:white;
`
const SubTitle = styled.div`
color:rgb(249,249,249);
font-size:15px;
margin-top:20px;
margin-left:20px;
max-width:1000px;
`

const Description = styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249,249);
max-width:760px;
margin-left:20px;
`