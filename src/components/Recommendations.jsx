import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet, laptop } from "../responsive";
import { Reccomendation } from "./Reccomendation";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addSongs } from "../redux/songsSlice";
import { useLocation } from "react-router-dom";

export const Recommendations = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const query = useSelector((state) => state.songs.query);
  useEffect(() => {
    fetch(`http://localhost:5000/${props.query ? props.query : query}`)
      .then((res) => res.json())
      .then((data) => dispatch(addSongs({ songs: data.Similar.Results })));
  }, [query, location.pathname]);
  let reccomendedMusic = useSelector((state) => state.songs.songs);
  
  const songElements = reccomendedMusic.map(
    (song) => song.yID && <Reccomendation key={song.yID} song={song}  sidebar={props.sidebar}/>
  );
  return (
    <Container style={props.sidebar? { display: "flex", flexDirection: "column" }: {}}>
      {reccomendedMusic.length === 0 ? <h4>No results. Try searching again</h4>: songElements}
    </Container>
  );
};
const Container = styled.div`
  flex: 6;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  padding: 20px 50px;
  margin: 0 auto;
  ${laptop({ gridTemplateColumns: "repeat(4, 1fr)" })}
  ${tablet({
    flex: "3",
    gridTemplateColumns: "repeat(3, 1fr)",
  })}
  ${mobile({ gridTemplateColumns: "1fr", padding: "0" })}
`;
