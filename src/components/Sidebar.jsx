import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'

import { mobile } from "../responsive";
import { sidebarItems } from "../data";
library.add(fas)
export const Sidebar = () => {
  return (
    <Container>
      {sidebarItems.map((item) => {
        return (
          <SideItem key={item.id} className="active">
            <Icon>
            <FontAwesomeIcon icon={["fas", item.icon]} />
            </Icon>
            <Text>{item.text}</Text>
          </SideItem>
        );
      })}

    </Container>
  );
};
const Container = styled.div`
  flex: 1;
  height: calc(100vh - 80px);
  /* background-color: red; */
  padding-top: 20px;
  overflow-y: scroll;
  ${mobile({ display: "none" })}
  position: sticky;
  top: 60px;
  background-color: var(--main-bg);
`;

const SideItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  :first-of-type{
    background-color: gray;

  }
`;
const Icon = styled.span`
  justify-self: flex-start;
`;
const Text = styled.span``;
