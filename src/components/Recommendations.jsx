import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet, laptop } from "../responsive";
import { Reccomendation } from "./Reccomendation";
//redux
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { addSongs } from "../redux/songsSlice";


export const Recommendations = () => {
  const dispatch = useDispatch();

  const query = useSelector(state=> state.songs.query)
  useEffect(() => {
    fetch(`http://localhost:5000/${query}`)
      .then((res) => res.json())
      .then((data) => dispatch(addSongs({songs: data.Similar.Results})));
  }, [query]);
    let reccomendedMusic = useSelector(state=>state.songs.songs)
  console.log(query)
  const songElements = reccomendedMusic.map((song) => song.yID && <Reccomendation key={song.yID} song={song} />)
  return (
    <Container>
      {songElements}
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
  width: 80%;
  ${laptop(
      {gridTemplateColumns: "repeat(4, 1fr)"}

  )}
  ${tablet({
    flex: "3",
    gridTemplateColumns: "repeat(3, 1fr)"
  })}
  ${mobile(
      {gridTemplateColumns: "1fr"}

  )}
`;
