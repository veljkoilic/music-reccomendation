import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import store from "../redux/store";
import { changeSong } from "../redux/songsSlice";
import { useNavigate } from "react-router-dom";

export const Reccomendation = ({ song, sidebar }) => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const handleClick = ()=>{
  dispatch(changeSong({song}))
  navigate(`/song/${song.yID}`)
 }
  return (
  
    <div onClick={handleClick} style={{display:"flex", cursor:"pointer", justifyContent: "center"}} >
      <Container style={sidebar ? {flexDirection: "row" } : {flexDirection: "column"}}>
        <Thumbnail src={`https://img.youtube.com/vi/${song.yID}/0.jpg`} />
        <Info>
          <SongName>{song.Name}</SongName>
          <a href={song.wUrl} target="_blank">
            <FontAwesomeIcon icon={faLink}/> Read on Wikipedia
          </a>
          <Desc>{song.wTeaser.substring(0, 80)}...</Desc>
        </Info>
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  /* flex-direction: column; */
  /* flex-direction: ${props => props.sidebar ? 'row' : 'column'}; */
  margin-bottom: 30px;
  width: 99%;

`;
const Thumbnail = styled.img`
max-width: 100%;
min-width: 200px;
height: max-content;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  gap: 5px;
  svg{
    font-size: 14px;
  }
`;


const SongName = styled.span`
  font-weight: bold;

`;
const Desc = styled.p`
  font-size: 12px;
  margin: 0;
  color: gray;
`;