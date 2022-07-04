import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const Reccomendation = ({ song }) => {
  console.log(song);
  return (
    <Link to={`/song/${song.yID}`}>
      <Container>
        <Thumbnail src={`https://img.youtube.com/vi/${song.yID}/0.jpg`} />
        <Info>
          <SongName>{song.Name}</SongName>
        </Info>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  display: flex;
  width: 250px;
  flex-direction: column;
  margin-bottom: 30px;
`;
const Thumbnail = styled.img``;
const Info = styled.div``;
const SongName = styled.span`
  font-weight: bold;
`;
