import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";



export const Reccomendation = ({ song }) => {
  console.log(song);
  return (
    <Link to={`/song/${song.yID}`} style={{display:"flex", justifyContent: "center"}}>
      <Container>
        <Thumbnail src={`https://img.youtube.com/vi/${song.yID}/0.jpg`} />
        <Info>
          <SongName>{song.Name}</SongName>
          <Link to={song.wUrl}>
            <FontAwesomeIcon icon={faLink}/> Read on Wikipedia
          </Link>
          <Desc>{song.wTeaser.substring(0, 100)}...</Desc>
        </Info>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  flex-direction: column;
  margin-bottom: 30px;

`;
const Thumbnail = styled.img``;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  gap: 10px;
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