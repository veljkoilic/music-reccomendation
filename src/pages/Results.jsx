import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Recommendations } from "../components/Recommendations";
import { Navbar } from "../components/Navbar";

export const Results = () => {
  const searchQuery = useParams().query;
  return (
    <Container>
      <Navbar />
      <Content>
        <h1>You searched for: {searchQuery}</h1>
        <Recommendations query={searchQuery} sidebar={true} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
`;
const Content = styled.div`
  padding-top: 80px;
`;
