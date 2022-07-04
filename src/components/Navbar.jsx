import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faVideo, faMicrophone, faFolderPlus, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
//redux
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { changeQuery } from "../redux/songsSlice";


export const Navbar = () => {
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    const val = event.target.value
    // usedispatch to update the query with event.target.value
    dispatch(changeQuery(val === ''? {query: "gorillaz"} : {query:val}))
  };
  return (
    <Header>
      <Left>
        <Logo src="https://www.designbust.com/download/1005/png/transparent_background_youtube_logo_png512.png" />
        <h5>YT Music REC</h5>
      </Left>
      <Middle>
        <SearchInputWrapper>
          <input type="text" placeholder="Search" onChange={handleSearch} />
          <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        </SearchInputWrapper>
        <FontAwesomeIcon icon={faMicrophone} />
      </Middle>
      <Right>
        <FontAwesomeIcon icon={faVideo} />
        <FontAwesomeIcon icon={faFolderPlus} />
        <FontAwesomeIcon icon={faBell} />
        <FontAwesomeIcon icon={faCircleQuestion} />
        <FontAwesomeIcon className="menu" icon={faBars} />
      </Right>
    </Header>
  );
};

const Header = styled.header`
  background-color: #282727;
  max-width: 100%;
  height: 60px;
  padding: 15px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: none !important;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  ${mobile({
    padding: "15px 25px",
  })}
`;
const Logo = styled.img`
  height: 30px;
  padding: 0 20px 0 0;
`;
const Left = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  h5 {
    margin: 0;
    padding: 0;
    font-size: 15px;
    ${tablet({
      display: "none",
    })}
  }
`;
const Middle = styled.div`
  flex: 1.5;
  display: flex;

  input {
    background-color: #121212;
    width: 450px;
    padding: 10px;
    color: #fff;
    border: none;
    /* flex: 8; */
    /* max-width: 400px; */
    border: 1px 0px 1px 1px solid #303030;
    ${tablet({
      width: "250px",
    })}
    ${mobile({
      width: "150px",
    })}
  }
  .search,
  svg {
    /* flex: 1; */
    min-width: 50px;
    max-width: 50px;
    padding: 10px 5px;
    cursor: pointer;
    ${mobile({
      padding: "10px 0px",
    })}
  }
  .search {
    background-color: #323232;
  }
`;
const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  svg {
    font-size: 18px;
    cursor: pointer;
    ${tablet({ display: "none" })}
  }
  .menu {
    display: none;
    ${tablet({ display: "block" })}
  }
`;
