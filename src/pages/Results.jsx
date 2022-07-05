import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Recommendations } from "../components/Recommendations";
import { Navbar } from "../components/Navbar";
import { mobile, tablet } from "../responsive";

export const Results = () => {
  const searchQuery = useParams().query;
  return (
    <Container>
      <Navbar />
      <Content>
        <h1>You searched for: "{searchQuery}"</h1>
        <Recommendations
          className="reccommendations"
          query={searchQuery}
          sidebar={true}
        />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Content = styled.div`
  h1 {
    align-self: center;
    color: gray;
  }
  padding-top: 80px;
  display: flex;
  width: 50%;
  ${tablet({
    width: "80%",
  })}
  ${mobile({
    width: "95%",
  })}
  flex-direction: column;
  .reccommendations {
    /* width: 800px; */
  }
`;
