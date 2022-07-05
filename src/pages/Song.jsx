import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'

import { useSelector } from 'react-redux'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faWikipediaW } from "@fortawesome/free-brands-svg-icons";
import { Recommendations } from '../components/Recommendations'

export const Song = () => {
  const videoID = useParams().id
  const currentSong = useSelector(state=>state.songs.currentSong)
  return (
    <Container>
      <Navbar/>
      <iframe src={`https://www.youtube.com/embed/${videoID}?autoplay=1`} allowFullScreen></iframe>
      <InfoWrap>
        <Info>
          <TitleWrap>
            <Title>{currentSong.Name}</Title>
            <FontAwesomeIcon icon={faYoutube}/>
            <FontAwesomeIcon icon={faWikipediaW}/>
          </TitleWrap>
          
          <Desc>{currentSong.wTeaser}</Desc>
        </Info>
        <div className="reccomendations">
        <Recommendations className="" sidebar={true}/>

        </div>
      </InfoWrap>
    </Container>
  )
}
const Container = styled.div`
  color:#fff;
  iframe{
  width: 100%;
  min-height: 720px;
  border: none;
}
`;
const InfoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 40px;

  .reccomendations{
    flex: 9;
    height: 700px;
    overflow-y: scroll;
  }
`
const Info = styled.div`
  width: 90%;
  margin: 0 auto;
  flex: 20;
`
const Title = styled.h1``
const TitleWrap = styled.div`
display: flex;
align-items: center;
gap: 20px;
svg{
  font-size: 25px;
  &:hover{
    cursor: pointer;
    color: red;
  }
}

`
const Desc = styled.p`
line-height: 25px;
`