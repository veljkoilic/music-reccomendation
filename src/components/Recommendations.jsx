import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px 50px;
  ${tablet({
    flex: "3",
  })}
`;
