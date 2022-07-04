import React from "react";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Recommendations } from "../components/Recommendations";
import { Sidebar } from "../components/Sidebar";
// import { useState, useEffect } from "react";

export const Home = () => {

  return (
    <Container>
      <Navbar />
      <Content>
        <Sidebar />
        <Recommendations />
      </Content>
    </Container>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
`;
const Content = styled.div`
  padding-top: 60px;
  display: flex;
`;
