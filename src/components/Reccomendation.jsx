import React from "react";
import styled from "styled-components";
export const Reccomendation = ({ song }) => {
  return <Container>
    <Thumbnail src={`https://img.youtube.com/vi/${song.yID}/0.jpg`} />
    <Info>
        <SongName>{song.Name}</SongName>
    </Info>
    </Container>;
};

const Container = styled.div`
display:flex;
width: 250px;
flex-direction: column;
margin-bottom: 30px;
`;
const Thumbnail = styled.img`
`;
const Info = styled.div``;
const SongName = styled.span``;